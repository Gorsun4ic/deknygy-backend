import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { FeedbackType } from '@prisma/client';

@Injectable()
export class UserFeedbackRepository {
  constructor(private readonly prisma: PrismaService) {}

  async createCustomFeedback(userId: bigint, message: string) {
    const user = await this.prisma.user.findUnique({
      where: { telegramId: userId },
    });
    if (!user) {
      throw new Error(`User with telegramId ${userId} not found`);
    }
    return this.prisma.feedback.create({
      data: {
        userId: user.id,
        type: FeedbackType.CUSTOM,
        message,
      },
    });
  }

  async createStructuredFeedback(userId: bigint, categoryId: number) {
    const user = await this.prisma.user.findUnique({
      where: { telegramId: userId },
    });
    if (!user) {
      throw new Error(`User with telegramId ${userId} not found`);
    }
    return this.prisma.feedback.create({
      data: {
        userId: user.id,
        type: FeedbackType.STRUCTURED,
        categoryId,
      },
    });
  }

  async findCategoryByKey(key: string) {
    return this.prisma.feedbackCategory.findUnique({
      where: { key },
    });
  }

  async getUserFeedbacks(userId: bigint) {
    const user = await this.prisma.user.findUnique({
      where: { telegramId: userId },
    });
    if (!user) {
      throw new Error(`User with telegramId ${userId} not found`);
    }
    const feedbacks = await this.prisma.feedback.findMany({
      where: { userId: user.id },
      include: { category: true },
      orderBy: { createdAt: 'desc' },
    });
    return feedbacks.map((feedback) => {
      return {
        ...feedback,
        username: user.username,
      };
    });
  }

  async getUserFeedbacksCount(userId: bigint) {
    const user = await this.prisma.user.findUnique({
      where: { telegramId: userId },
    });
    if (!user) {
      throw new Error(`User with telegramId ${userId} not found`);
    }
    return this.prisma.feedback.count({ where: { userId: user.id } });
  }
}
