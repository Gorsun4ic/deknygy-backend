import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { BooksModule } from './modules/books/books.module';
import { RedisModule } from './modules/redis/redis.module';
import { KeyAuthGuard } from './modules/auth/key-auth.guard';
import { AnalyticsModule } from './modules/analytics/analytics.module';
import { APP_GUARD } from '@nestjs/core/constants';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AnalyticsModule,
    BooksModule,
    RedisModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: KeyAuthGuard,
    },
  ],
})
export class AppModule {}
