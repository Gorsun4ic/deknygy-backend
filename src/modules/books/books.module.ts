import { Module } from '@nestjs/common';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
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
  ],
  controllers: [BooksController],
  providers: [BooksService],
})
export class BooksModule {}
