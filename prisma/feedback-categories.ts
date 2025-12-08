import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

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
