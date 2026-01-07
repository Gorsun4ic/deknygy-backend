import 'dotenv/config';
import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';

import { faker } from '@faker-js/faker';
// FIX: Corrected typo 'constats' to 'constants' (cSpell)
import { NUM_BOOKS, NUM_SEARCH_LOGS } from './constats';
import { randomItem } from './random-item';

const prisma = new PrismaClient({
  adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL }),
});

// FIX: Changed string[] to number[] for Int IDs to match Prisma schema
export async function seedDependentData(ids: {
  userIds: bigint[];
  queryIds: number[];
  storeIds: number[];
  formatIds: number[];
}) {
  // FIX: Destructuring is safe now due to the explicit interface (removes warnings on lines 22, 23, 24)
  const { userIds, queryIds, storeIds, formatIds } = ids;

  const usedLinks = new Set<string>();

  const booksData = Array.from({ length: NUM_BOOKS }).map(() => {
    let uniqueLink: string;

    // Loop until we generate a link that hasn't been used yet
    do {
      uniqueLink = faker.internet.url();
    } while (usedLinks.has(uniqueLink));

    // Add the new unique link to the Set
    usedLinks.add(uniqueLink);

    return {
      title: faker.commerce.productName(),
      link: uniqueLink, // Use the guaranteed unique link
      available: faker.datatype.boolean(),
      storeId: randomItem(storeIds) as number,
      formatId: randomItem(formatIds) as number,
      queryId: randomItem(queryIds) as number,
    };
  });
  await prisma.book.createMany({ data: booksData });

  // Fetch ALL Book IDs after creation
  const bookIds = (await prisma.book.findMany({ select: { id: true } })).map(
    (b) => b.id,
  );

  // 2. BOOK PRICES (Bulk) - 1 or 2 prices per book
  const pricesData: { bookId: number; price: number; recordedAt: Date }[] = [];
  for (const bookId of bookIds) {
    // Current price
    pricesData.push({
      bookId: bookId,
      // FIX: Replaced deprecated 'precision' with 'fractionDigits' (TS2353)
      price: faker.number.float({ min: 50, max: 1000, fractionDigits: 2 }),
      // FIX: Changed 'days' in date.recent() to date.recent() (TS2353)
      recordedAt: faker.date.recent({ days: 30 }),
    });
    // Maybe an older price (for price history)
    if (faker.datatype.boolean(0.3)) {
      pricesData.push({
        bookId: bookId,
        // FIX: Replaced deprecated 'precision' with 'fractionDigits' (TS2353)
        price: faker.number.float({ min: 50, max: 1000, fractionDigits: 2 }),
        // FIX: Replaced date.past({ days: 60 }) with date.recent({ days: 60 }) (TS2353)
        recordedAt: faker.date.recent({ days: 60 }),
      });
    }
  }
  await prisma.bookPrice.createMany({ data: pricesData });

  // 3. SEARCH LOGS (Bulk - the large table)
  const searchLogsData = Array.from({ length: NUM_SEARCH_LOGS }).map(() => ({
    // FIX: Add explicit casts to satisfy strict ESLint/TS rules
    queryId: randomItem(queryIds) as number,
    userId: randomItem(userIds) as bigint,
    searchedAt: faker.date.past({ years: 1 }),
  }));
  await prisma.searchLog.createMany({ data: searchLogsData });
}
