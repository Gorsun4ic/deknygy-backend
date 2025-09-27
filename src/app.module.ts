import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { BooksModule } from './modules/books/books.module';
import { RedisModule } from './modules/redis/redis.module';

@Module({
  imports: [BooksModule, RedisModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
