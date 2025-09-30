import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class BigIntInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<unknown>,
  ): Observable<unknown> {
    return next
      .handle()
      .pipe(map((data: unknown) => this.serializeBigInt(data)));
  }

  private serializeBigInt<T>(data: T): T {
    return JSON.parse(
      JSON.stringify(data, (_, value) =>
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        typeof value === 'bigint' ? value.toString() : value,
      ),
    ) as unknown as T;
  }
}
