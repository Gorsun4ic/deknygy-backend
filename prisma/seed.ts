import { PrismaClient } from '@prisma/client';
import { seedCoreData } from './seed-core';
import { seedDependentData } from './seed-dependences';
import { NUM_USERS, NUM_QUERIES, NUM_BOOKS, NUM_SEARCH_LOGS } from './constats';
const prisma = new PrismaClient();

async function main() {
  await prisma.$executeRaw`TRUNCATE TABLE "Book", "Format", "Store", "Feedback", "FeedbackCategory", "SearchLog", "SentMessage", "StoreStatistic", "UnsuccessfulSearch", "User", "Query", "WeeklyBroadcast", "BookPrice", "CacheLog", "ViewedBook" RESTART IDENTITY CASCADE;`;
  console.log('Old data truncated.');

  const coreIds = await seedCoreData();
  console.log(`Created ${NUM_USERS} users and ${NUM_QUERIES} unique queries.`);

  await seedDependentData(coreIds);
  console.log(`Created ${NUM_BOOKS} books and ${NUM_SEARCH_LOGS} search logs.`);

  console.log('✨ Seeding complete.');
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
