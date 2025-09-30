-- CreateEnum
CREATE TYPE "public"."FeedbackType" AS ENUM ('CUSTOM', 'STRUCTURED');

-- CreateTable
CREATE TABLE "public"."Book" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "available" BOOLEAN NOT NULL DEFAULT false,
    "queryId" INTEGER,
    "storeId" INTEGER NOT NULL,
    "formatId" INTEGER NOT NULL,

    CONSTRAINT "Book_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Format" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "Format_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Store" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "Store_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Feedback" (
    "id" SERIAL NOT NULL,
    "userId" BIGINT NOT NULL,
    "type" "public"."FeedbackType" NOT NULL DEFAULT 'CUSTOM',
    "message" TEXT,
    "categoryId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Feedback_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."FeedbackCategory" (
    "id" SERIAL NOT NULL,
    "key" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "FeedbackCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."SearchLog" (
    "id" SERIAL NOT NULL,
    "queryId" INTEGER NOT NULL,
    "userId" BIGINT NOT NULL,
    "searchedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SearchLog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."SentMessage" (
    "id" SERIAL NOT NULL,
    "userId" BIGINT NOT NULL,
    "sentAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "groupId" TEXT NOT NULL,

    CONSTRAINT "SentMessage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."StoreStatistic" (
    "id" SERIAL NOT NULL,
    "storeId" INTEGER NOT NULL,
    "booksFound" INTEGER NOT NULL DEFAULT 0,
    "lastScrapedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "StoreStatistic_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."UnsuccessfulSearch" (
    "id" SERIAL NOT NULL,
    "queryId" INTEGER NOT NULL,
    "userId" BIGINT NOT NULL,
    "searchedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UnsuccessfulSearch_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."User" (
    "id" BIGSERIAL NOT NULL,
    "telegramId" BIGINT NOT NULL,
    "username" TEXT,
    "firstSeen" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastActive" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "sessionCount" INTEGER NOT NULL DEFAULT 1,
    "lastWeeklyTop" TIMESTAMP(3),

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Query" (
    "id" SERIAL NOT NULL,
    "query" TEXT NOT NULL,
    "firstSeen" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Query_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."WeeklyBroadcast" (
    "id" SERIAL NOT NULL,
    "userId" BIGINT NOT NULL,
    "groupName" TEXT NOT NULL,
    "sentAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "WeeklyBroadcast_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."BookPrice" (
    "id" SERIAL NOT NULL,
    "bookId" INTEGER NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "recordedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "BookPrice_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Book_link_key" ON "public"."Book"("link");

-- CreateIndex
CREATE INDEX "Book_storeId_idx" ON "public"."Book"("storeId");

-- CreateIndex
CREATE INDEX "Book_formatId_idx" ON "public"."Book"("formatId");

-- CreateIndex
CREATE UNIQUE INDEX "Format_title_key" ON "public"."Format"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Store_title_key" ON "public"."Store"("title");

-- CreateIndex
CREATE UNIQUE INDEX "FeedbackCategory_key_key" ON "public"."FeedbackCategory"("key");

-- CreateIndex
CREATE INDEX "SearchLog_queryId_idx" ON "public"."SearchLog"("queryId");

-- CreateIndex
CREATE INDEX "SearchLog_userId_idx" ON "public"."SearchLog"("userId");

-- CreateIndex
CREATE INDEX "SearchLog_userId_queryId_idx" ON "public"."SearchLog"("userId", "queryId");

-- CreateIndex
CREATE INDEX "SentMessage_userId_idx" ON "public"."SentMessage"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "StoreStatistic_storeId_key" ON "public"."StoreStatistic"("storeId");

-- CreateIndex
CREATE INDEX "UnsuccessfulSearch_queryId_idx" ON "public"."UnsuccessfulSearch"("queryId");

-- CreateIndex
CREATE INDEX "UnsuccessfulSearch_userId_idx" ON "public"."UnsuccessfulSearch"("userId");

-- CreateIndex
CREATE INDEX "UnsuccessfulSearch_userId_queryId_idx" ON "public"."UnsuccessfulSearch"("userId", "queryId");

-- CreateIndex
CREATE UNIQUE INDEX "User_telegramId_key" ON "public"."User"("telegramId");

-- CreateIndex
CREATE UNIQUE INDEX "Query_query_key" ON "public"."Query"("query");

-- CreateIndex
CREATE UNIQUE INDEX "WeeklyBroadcast_userId_groupName_key" ON "public"."WeeklyBroadcast"("userId", "groupName");

-- AddForeignKey
ALTER TABLE "public"."Book" ADD CONSTRAINT "Book_queryId_fkey" FOREIGN KEY ("queryId") REFERENCES "public"."Query"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Book" ADD CONSTRAINT "Book_storeId_fkey" FOREIGN KEY ("storeId") REFERENCES "public"."Store"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Book" ADD CONSTRAINT "Book_formatId_fkey" FOREIGN KEY ("formatId") REFERENCES "public"."Format"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Feedback" ADD CONSTRAINT "Feedback_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Feedback" ADD CONSTRAINT "Feedback_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "public"."FeedbackCategory"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."SearchLog" ADD CONSTRAINT "SearchLog_queryId_fkey" FOREIGN KEY ("queryId") REFERENCES "public"."Query"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."SearchLog" ADD CONSTRAINT "SearchLog_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."SentMessage" ADD CONSTRAINT "SentMessage_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."StoreStatistic" ADD CONSTRAINT "StoreStatistic_storeId_fkey" FOREIGN KEY ("storeId") REFERENCES "public"."Store"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."UnsuccessfulSearch" ADD CONSTRAINT "UnsuccessfulSearch_queryId_fkey" FOREIGN KEY ("queryId") REFERENCES "public"."Query"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."UnsuccessfulSearch" ADD CONSTRAINT "UnsuccessfulSearch_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."WeeklyBroadcast" ADD CONSTRAINT "WeeklyBroadcast_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."BookPrice" ADD CONSTRAINT "BookPrice_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "public"."Book"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
