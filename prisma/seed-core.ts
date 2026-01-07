import 'dotenv/config';
import { PrismaClient } from '@db';
import { PrismaPg } from '@prisma/adapter-pg';

import { faker } from '@faker-js/faker';
import { NUM_USERS, NUM_QUERIES } from './constats';

const prisma = new PrismaClient({
  adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL }),
});

export async function seedCoreData() {
  // 1. FORMATS (Fixed small set)
  const formatTitles = ['Physical', 'Ebook', 'Audiobook'];
  // --- FIX: Use createMany, then findMany to retrieve IDs ---
  await prisma.format.createMany({
    data: formatTitles.map((title) => ({ title })),
  });
  const formatIds = (
    await prisma.format.findMany({ select: { id: true } })
  ).map((f) => f.id);

  // 2. STORES (Fixed small set)
  const storeTitles = ['StoreA', 'StoreB', 'StoreC', 'StoreD'];
  // --- FIX: Use createMany, then findMany to retrieve IDs ---
  await prisma.store.createMany({
    data: storeTitles.map((title) => ({ title })),
  });
  const storeIds = (await prisma.store.findMany({ select: { id: true } })).map(
    (s) => s.id,
  );
  // -----------------------------------------------------------

  // 3. USERS (Bulk)
  const usersData = Array.from({ length: NUM_USERS }).map(() => ({
    telegramId: BigInt(faker.number.int({ min: 1000000000, max: 9999999999 })),
    username: faker.internet.username(),
    firstSeen: faker.date.past({ years: 2 }),
    lastActive: faker.date.recent({ days: 30 }),
  }));
  await prisma.user.createMany({ data: usersData });

  // Fetch ALL User IDs after creation
  const userIds = (await prisma.user.findMany({ select: { id: true } })).map(
    (u) => u.id,
  );

  // 4. QUERIES (Bulk)
  const queriesData = Array.from({ length: NUM_QUERIES }).map(() => ({
    query: faker.lorem.words({ min: 1, max: 4 }),
    firstSeen: faker.date.past({ years: 2 }),
  }));
  await prisma.query.createMany({ data: queriesData, skipDuplicates: true });

  // Fetch ALL Query IDs after creation
  const queryIds = (await prisma.query.findMany({ select: { id: true } })).map(
    (q) => q.id,
  );

  return { userIds, queryIds, storeIds, formatIds };
}
