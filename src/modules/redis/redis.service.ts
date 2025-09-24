import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import Redis from 'ioredis';

@Injectable()
export class RedisService implements OnModuleInit, OnModuleDestroy {
  private client: Redis;

  onModuleInit() {
    try {
      const redisUrl = process.env.REDIS_URL || 'redis://localhost:6379';
      this.client = new Redis(redisUrl);

      this.client.on('error', (err) => {
        console.error('Redis connection error:', err);
      });

      this.client.on('connect', () => {
        console.log('✅ Redis connected');
      });
    } catch (error) {
      console.error('Failed to initialize Redis:', error);
    }
  }

  onModuleDestroy() {
    this.client.quit();
  }

  async get(key: string): Promise<string | null> {
    return this.client.get(key);
  }

  async set(key: string, value: string, ttlSeconds?: number): Promise<void> {
    if (ttlSeconds) {
      await this.client.set(key, value, 'EX', ttlSeconds);
    } else {
      await this.client.set(key, value);
    }
  }

  async del(key: string): Promise<void> {
    await this.client.del(key);
  }
}
