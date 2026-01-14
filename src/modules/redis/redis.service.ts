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

  async onModuleDestroy() {
    await this.client.quit();
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

  /**
   * Rate limiting using sliding window algorithm
   * @param key - Unique identifier for the rate limit (e.g., user ID)
   * @param limit - Maximum number of requests allowed
   * @param windowSeconds - Time window in seconds
   * @returns true if request is allowed, false if rate limit exceeded
   */
  async checkRateLimit(
    key: string,
    limit: number,
    windowSeconds: number,
  ): Promise<boolean> {
    const rateLimitKey = `rate_limit:${key}`;
    const now = Date.now();
    const windowStart = now - windowSeconds * 1000;

    // Use a sorted set to store request timestamps
    // Remove old entries outside the window
    await this.client.zremrangebyscore(rateLimitKey, 0, windowStart);

    // Count current requests in the window
    const count = await this.client.zcard(rateLimitKey);

    if (count >= limit) {
      return false; // Rate limit exceeded
    }

    // Add current request timestamp
    await this.client.zadd(rateLimitKey, now, `${now}-${Math.random()}`);
    // Set expiration for the key (window + 1 second buffer)
    await this.client.expire(rateLimitKey, windowSeconds + 1);

    return true; // Request allowed
  }

  /**
   * Get remaining requests in the current window
   * @param key - Unique identifier for the rate limit
   * @param limit - Maximum number of requests allowed
   * @param windowSeconds - Time window in seconds
   * @returns Number of remaining requests
   */
  async getRemainingRequests(
    key: string,
    limit: number,
    windowSeconds: number,
  ): Promise<number> {
    const rateLimitKey = `rate_limit:${key}`;
    const now = Date.now();
    const windowStart = now - windowSeconds * 1000;

    // Remove old entries outside the window
    await this.client.zremrangebyscore(rateLimitKey, 0, windowStart);

    // Count current requests in the window
    const count = await this.client.zcard(rateLimitKey);

    return Math.max(0, limit - count);
  }

  async getJson<T>(key: string): Promise<T | null> {
    const data = await this.client.get(key);
    return data ? (JSON.parse(data) as T) : null;
  }

  async setJson(
    key: string,
    value: object,
    ttlSeconds?: number,
  ): Promise<void> {
    const stringValue = JSON.stringify(value, (key, val) =>
      typeof val === 'bigint' ? val.toString() : (val as unknown as string),
    );
    if (ttlSeconds) {
      await this.client.set(key, stringValue, 'EX', ttlSeconds);
    } else {
      await this.client.set(key, stringValue);
    }
  }
}
