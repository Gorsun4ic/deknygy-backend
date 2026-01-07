import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { FeedbackType } from '@prisma/client';
import { getPaginationLimits } from '../../common/utils/getPaginationLimits';
import { getPaginationObject } from '../../common/utils/getPaginationObject';

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
    const feedback = await this.prisma.feedback.create({
      data: {
        userId: user.id,
        type: FeedbackType.CUSTOM,
        message,
      },
    });
    return feedback;
  }

  async createStructuredFeedback(userId: bigint, categoryId: number) {
    const user = await this.prisma.user.findUnique({
      where: { telegramId: userId },
    });
    if (!user) {
      throw new Error(`User with telegramId ${userId} not found`);
    }
    const feedback = await this.prisma.feedback.create({
      data: {
        userId: user.id,
        type: FeedbackType.STRUCTURED,
        categoryId,
      },
    });
    return feedback;
  }

  async findCategoryByKey(key: string) {
    return this.prisma.feedbackCategory.findUnique({
      where: { key },
    });
  }

  async getUserFeedbacks(userId: bigint, page: number = 1, limit: number = 10) {
    const user = await this.prisma.user.findUnique({
      where: { telegramId: userId },
    });
    if (!user) {
      throw new Error(`User with telegramId ${userId} not found`);
    }
    const { pageNumber, pageSize, skip } = getPaginationLimits(page, limit);
    const [data, total] = await Promise.all([
      this.prisma.feedback.findMany({
        where: { userId: user.id },
        include: { category: true },
        orderBy: { createdAt: 'desc' },
        skip,
        take: pageSize,
      }),
      this.prisma.feedback.count({
        where: { userId: user.id },
      }),
    ]);

    const pagination = getPaginationObject(total, pageSize, pageNumber);
    return {
      username: user.username,
      data,
      pagination,
    };
  }

  async getUserFeedbacksCount(userId: bigint) {
    const user = await this.prisma.user.findUnique({
      where: { telegramId: userId },
    });
    if (!user) {
      throw new Error(`User with telegramId ${userId} not found`);
    }

    const count = await this.prisma.feedback.count({
      where: { userId: user.id },
    });

    return count;
  }
}
