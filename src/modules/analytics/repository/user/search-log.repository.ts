import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';

@Injectable()
export class SearchLogRepository {
  constructor(private readonly prisma: PrismaService) {}

  async logSearch(telegramId: bigint, query: string) {
    const [user, existingQuery] = await Promise.all([
      this.prisma.user.findUnique({ where: { telegramId } }),
      this.prisma.query.findUnique({ where: { query } }),
    ]);

    if (!user)
      throw new NotFoundException(
        `User with telegramId ${telegramId} not found`,
      );
    if (!existingQuery)
      throw new NotFoundException(`Query "${query}" not found`);

    return this.prisma.searchLog.create({
      data: {
        user: { connect: { id: user.id } },
        query: { connect: { id: existingQuery.id } },
      },
    });
  }
}
