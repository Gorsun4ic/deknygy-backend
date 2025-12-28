-- 1. CLEANUP
DROP TABLE IF EXISTS "Book" CASCADE;
DROP TABLE IF EXISTS "User" CASCADE;
DROP TABLE IF EXISTS "Store" CASCADE;
DROP TABLE IF EXISTS "Format" CASCADE;
DROP TABLE IF EXISTS "Query" CASCADE;
DROP TABLE IF EXISTS "SearchLog" CASCADE;
DROP TABLE IF EXISTS "Feedback" CASCADE;
DROP TABLE IF EXISTS "BookPrice" CASCADE;
DROP TABLE IF EXISTS "FeedbackCategory" CASCADE;

-- 2. CREATE NEW TABLES
CREATE TABLE "User" (
    "id" BIGSERIAL NOT NULL,
    "telegramId" BIGINT NOT NULL,
    "username" TEXT,
    "firstSeen" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastActive" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "sessionCount" INTEGER NOT NULL DEFAULT 1,
    "lastWeeklyTop" TIMESTAMP(3),
    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "Query" (
    "id" SERIAL NOT NULL,
    "query" TEXT NOT NULL,
    "firstSeen" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Query_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "Store" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    CONSTRAINT "Store_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "Format" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    CONSTRAINT "Format_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "Book" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "available" BOOLEAN NOT NULL DEFAULT false,
    "queryId" INTEGER,
    "storeId" INTEGER NOT NULL,
    "formatId" INTEGER NOT NULL,
    CONSTRAINT "Book_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "BookPrice" (
    "id" SERIAL NOT NULL,
    "bookId" INTEGER NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "recordedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "BookPrice_pkey" PRIMARY KEY ("id")
);

CREATE TYPE "FeedbackType" AS ENUM ('CUSTOM', 'STRUCTURED');

CREATE TABLE "Feedback" (
    "id" SERIAL NOT NULL,
    "userId" BIGINT NOT NULL,
    "type" "FeedbackType" NOT NULL DEFAULT 'CUSTOM',
    "message" TEXT,
    "categoryId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Feedback_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "FeedbackCategory" (
    "id" SERIAL NOT NULL,
    "key" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    CONSTRAINT "FeedbackCategory_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "SearchLog" (
    "id" SERIAL NOT NULL,
    "queryId" INTEGER NOT NULL,
    "userId" BIGINT NOT NULL,
    "searchedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "groupedResults" JSONB,
    CONSTRAINT "SearchLog_pkey" PRIMARY KEY ("id")
);

-- 3. DATA MIGRATION

-- Migrate USERS (Deduplicate by Telegram ID)
INSERT INTO "User" ("telegramId", "firstSeen", "lastActive", "sessionCount", "lastWeeklyTop")
SELECT DISTINCT ON (user_id) user_id, COALESCE(first_seen, NOW()), COALESCE(last_active, NOW()), COALESCE(session_count, 1), last_weekly_top 
FROM users
ORDER BY user_id, first_seen DESC;
CREATE UNIQUE INDEX "User_telegramId_key" ON "User"("telegramId");

-- Migrate QUERIES (FIX: Deduplicate Queries by text)
-- We do NOT copy the old ID because we are merging duplicates. New IDs will be generated.
INSERT INTO "Query" ("query", "firstSeen")
SELECT DISTINCT ON (query) query, searched_at 
FROM queries
ORDER BY query, searched_at DESC;

-- Migrate STORES
INSERT INTO "Store" ("title") SELECT DISTINCT store FROM books;
CREATE UNIQUE INDEX "Store_title_key" ON "Store"("title");

-- Migrate FORMATS
INSERT INTO "Format" ("title") SELECT DISTINCT format FROM books;
CREATE UNIQUE INDEX "Format_title_key" ON "Format"("title");

-- Migrate BOOKS (FIX: Deduplicate Links AND Map new Query IDs)
INSERT INTO "Book" ("id", "title", "link", "available", "queryId", "storeId", "formatId")
SELECT DISTINCT ON (b.link) 
    b.id, 
    b.title, 
    b.link, 
    COALESCE(b.available, false), 
    new_q.id, -- Use the NEW Query ID derived from the text match
    s.id, 
    f.id
FROM books b
JOIN "Store" s ON b.store = s.title
JOIN "Format" f ON b.format = f.title
LEFT JOIN queries old_q ON b.query_id = old_q.id     -- 1. Find the old query text
LEFT JOIN "Query" new_q ON old_q.query = new_q.query -- 2. Find the new Query ID based on text
ORDER BY b.link, b.id DESC;

-- Migrate PRICES
INSERT INTO "BookPrice" ("bookId", "price", "recordedAt")
SELECT b.id, CAST(b.price AS DOUBLE PRECISION), NOW() 
FROM books b
JOIN "Book" new_b ON new_b.id = b.id; -- Only for books that survived deduplication

SELECT setval(pg_get_serial_sequence('"Book"', 'id'), coalesce(max(id)+1, 1), false) FROM "Book";

-- Migrate FEEDBACKS
INSERT INTO "Feedback" ("userId", "message", "createdAt", "type")
SELECT u.id, f.message, COALESCE(f.created_at, NOW()), 'CUSTOM'
FROM feedbacks f
JOIN "User" u ON u."telegramId" = f.user_id;

-- Migrate SEARCH LOGS
INSERT INTO "SearchLog" ("queryId", "userId", "searchedAt")
SELECT new_q.id, u.id, COALESCE(sl.timestamp, NOW())
FROM search_logs sl
JOIN "Query" new_q ON sl.query = new_q.query -- Match by Text because IDs changed
CROSS JOIN LATERAL unnest(sl.users_id) as old_tid
JOIN "User" u ON u."telegramId" = old_tid;


-- 4. DROP OLD TABLES
DROP TABLE IF EXISTS books CASCADE;
DROP TABLE IF EXISTS feedbacks CASCADE;
DROP TABLE IF EXISTS queries CASCADE;
DROP TABLE IF EXISTS search_logs CASCADE;
DROP TABLE IF EXISTS sent_messages CASCADE;
DROP TABLE IF EXISTS store_statistics CASCADE;
DROP TABLE IF EXISTS unsuccessful_searches CASCADE;
DROP TABLE IF EXISTS user_searches CASCADE;
DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS weekly_broadcasts CASCADE;

-- 5. ADD CONSTRAINTS
CREATE UNIQUE INDEX "Book_link_key" ON "Book"("link");
CREATE INDEX "Book_storeId_idx" ON "Book"("storeId");
CREATE INDEX "Book_formatId_idx" ON "Book"("formatId");
CREATE UNIQUE INDEX "Query_query_key" ON "Query"("query");

ALTER TABLE "Book" ADD CONSTRAINT "Book_queryId_fkey" FOREIGN KEY ("queryId") REFERENCES "Query"("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "Book" ADD CONSTRAINT "Book_storeId_fkey" FOREIGN KEY ("storeId") REFERENCES "Store"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "Book" ADD CONSTRAINT "Book_formatId_fkey" FOREIGN KEY ("formatId") REFERENCES "Format"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "BookPrice" ADD CONSTRAINT "BookPrice_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "Book"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "Feedback" ADD CONSTRAINT "Feedback_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "SearchLog" ADD CONSTRAINT "SearchLog_queryId_fkey" FOREIGN KEY ("queryId") REFERENCES "Query"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "SearchLog" ADD CONSTRAINT "SearchLog_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;