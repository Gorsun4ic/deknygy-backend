import { Module } from '@nestjs/common';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { YakabooApiModule } from '../search-providers/yakaboo-api/yakaboo-api.module';
import { NashformatApiModule } from '../search-providers/nashformat/nashformat-api.module';
import { AprioriApiModule } from '../search-providers/apriori/apriori-api-module';
import { VivatApiModule } from '../search-providers/vivat/vivat-api.module';

@Module({
  imports: [
    YakabooApiModule,
    NashformatApiModule,
    AprioriApiModule,
    VivatApiModule,
  ],
  controllers: [BooksController],
  providers: [BooksService],
})
export class BooksModule {}
