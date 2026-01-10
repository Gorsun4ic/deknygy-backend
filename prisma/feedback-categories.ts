import 'dotenv/config';
import { PrismaClient } from '../src/generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';

const prisma = new PrismaClient({
  adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL }),
});

export async function seedFeedbackCategories() {
  await prisma.feedbackCategory.createMany({
    data: [
      { key: 'positive', description: 'Positive feedback' },
      { key: 'not_found', description: 'Book Not Found' },
      { key: 'price_wrong', description: 'Wrong Price' },
    ],
    skipDuplicates: true,
  });
}
