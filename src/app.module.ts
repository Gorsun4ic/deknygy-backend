import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './modules/user/user.module';
import { BooksModule } from './modules/books/books.module';
import { RedisModule } from './modules/redis/redis.module';
import { KeyAuthGuard } from './modules/auth/key-auth.guard';
import { AnalyticsModule } from './modules/analytics/analytics.module';
import { APP_GUARD } from '@nestjs/core/constants';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AnalyticsModule,
    BooksModule,
    RedisModule,
    UserModule,
    ThrottlerModule.forRoot([
      {
        ttl: 60000,
        limit: 10,
      },
    ]),
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
    {
      provide: APP_GUARD,
      useClass: KeyAuthGuard,
    },
  ],
})
export class AppModule {}
