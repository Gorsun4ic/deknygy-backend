-- 1. CREATE NEW TABLES
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

-- (Add other tables like WeeklyBroadcast, SentMessage, StoreStatistic, UnsuccessfulSearch, ViewedBook, CacheLog here if needed from your schema)
-- ... (Assuming standard creation for them)

-- 2. DATA MIGRATION

-- Migrate USERS
INSERT INTO "User" ("telegramId", "firstSeen", "lastActive", "sessionCount", "lastWeeklyTop")
SELECT user_id, COALESCE(first_seen, NOW()), COALESCE(last_active, NOW()), COALESCE(session_count, 1), last_weekly_top 
FROM users;
CREATE UNIQUE INDEX "User_telegramId_key" ON "User"("telegramId");

-- Migrate QUERIES
INSERT INTO "Query" ("id", "query", "firstSeen")
SELECT id, query, searched_at FROM queries;
SELECT setval(pg_get_serial_sequence('"Query"', 'id'), coalesce(max(id)+1, 1), false) FROM "Query";

-- Migrate STORES
INSERT INTO "Store" ("title") SELECT DISTINCT store FROM books;
CREATE UNIQUE INDEX "Store_title_key" ON "Store"("title");

-- Migrate FORMATS
INSERT INTO "Format" ("title") SELECT DISTINCT format FROM books;
CREATE UNIQUE INDEX "Format_title_key" ON "Format"("title");

-- Migrate BOOKS
INSERT INTO "Book" ("id", "title", "link", "available", "queryId", "storeId", "formatId")
SELECT b.id, b.title, b.link, COALESCE(b.available, false), b.query_id, s.id, f.id
FROM books b
JOIN "Store" s ON b.store = s.title
JOIN "Format" f ON b.format = f.title;

-- Migrate PRICES
INSERT INTO "BookPrice" ("bookId", "price", "recordedAt")
SELECT id, CAST(price AS DOUBLE PRECISION), NOW() FROM books;
SELECT setval(pg_get_serial_sequence('"Book"', 'id'), coalesce(max(id)+1, 1), false) FROM "Book";

-- Migrate FEEDBACKS
INSERT INTO "Feedback" ("userId", "message", "createdAt", "type")
SELECT u.id, f.message, COALESCE(f.created_at, NOW()), 'CUSTOM'
FROM feedbacks f
JOIN "User" u ON u."telegramId" = f.user_id;

-- Migrate SEARCH LOGS
INSERT INTO "SearchLog" ("queryId", "userId", "searchedAt")
SELECT q.id, u.id, COALESCE(sl.timestamp, NOW())
FROM search_logs sl
JOIN "Query" q ON sl.query = q.query
CROSS JOIN LATERAL unnest(sl.users_id) as old_tid
JOIN "User" u ON u."telegramId" = old_tid;


-- 3. DROP OLD TABLES
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

-- 4. ADD CONSTRAINTS
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