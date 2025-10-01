import { Module, Logger } from '@nestjs/common';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { BooksRepository } from './books.repository';
import { YakabooApiModule } from '../search-providers/yakaboo-api/yakaboo-api.module';
import { NashformatApiModule } from '../search-providers/nashformat/nashformat-api.module';
import { AprioriApiModule } from '../search-providers/apriori/apriori-api-module';
import { VivatApiModule } from '../search-providers/vivat/vivat-api.module';
import { StaryLevModule } from '../search-providers/stary-lev/stary-lev.module';
import { MegogoApiModule } from '../search-providers/megogo/megogo-api.module';
import { LaboratoryModule } from '../search-providers/laboratory/laboratory.module';
import { KSDModule } from '../search-providers/ksd/ksd.module';
import { ReadEatModule } from '../search-providers/readeat/readeat.module';
import { BookYeApiModule } from '../search-providers/book-ye/book-ye.api.module';
import { KnygolandApiModule } from '../search-providers/knygoland/knygoland.api.module';
import { RidnamovaApiModule } from '../search-providers/ridnamova/ridnamova.module';
import { ArthussApiModule } from '../search-providers/arthuss/arthuss.module';
import { ConfigModule } from '@nestjs/config';
import { RedisModule } from '../redis/redis.module';
import { PrismaModule } from '../prisma/prisma.module';
import { SearchLogService } from '../analytics/services/user/search-log.service';
import { SearchLogRepository } from '../analytics/repository/user/search-log.repository';

@Module({
  imports: [
    YakabooApiModule,
    NashformatApiModule,
    AprioriApiModule,
    VivatApiModule,
    StaryLevModule,
    MegogoApiModule,
    LaboratoryModule,
    KSDModule,
    ReadEatModule,
    BookYeApiModule,
    KnygolandApiModule,
    RidnamovaApiModule,
    ArthussApiModule,
    ConfigModule,
    RedisModule,
    PrismaModule,
  ],
  controllers: [BooksController],
  providers: [
    BooksService,
    BooksRepository,
    Logger,
    SearchLogService,
    SearchLogRepository,
  ],
})
export class BooksModule {}
