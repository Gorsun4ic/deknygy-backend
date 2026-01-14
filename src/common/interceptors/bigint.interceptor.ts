import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  Logger,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class BigIntInterceptor implements NestInterceptor {
  private readonly logger: Logger;
  constructor() {}
  intercept(
    context: ExecutionContext,
    next: CallHandler<unknown>,
  ): Observable<unknown> {
    return next
      .handle()
      .pipe(map((data: unknown) => this.serializeBigInt(data)));
  }

  private serializeBigInt<T>(data: T): T {
    try {
      // Handle null/undefined cases
      if (data === null || data === undefined) {
        return data;
      }

      const stringified = JSON.stringify(data, (_, value) =>
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        typeof value === 'bigint' ? value.toString() : value,
      );

      // JSON.stringify can return undefined for certain values
      if (stringified === undefined) {
        return data;
      }

      return JSON.parse(stringified) as unknown as T;
    } catch (error) {
      this.logger.error(
        `Failed to serialize bigint: ${error instanceof Error ? error.message : String(error)}.`,
        error,
      );
      return data;
    }
  }
}
