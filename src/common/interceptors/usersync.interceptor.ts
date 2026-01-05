import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { UserSyncService } from 'src/modules/user/sync/sync.service';

@Injectable()
export class UserSyncInterceptor implements NestInterceptor {
  constructor(private readonly userSyncService: UserSyncService) {}

  async intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Promise<Observable<unknown>> {
    const request = context.switchToHttp().getRequest<{
      body: { from: { id: bigint; username: string }; telegramId: bigint };
    }>();
    // Assuming the telegramId is in the body, e.g., from a webhook
    // Adjust 'from.id' based on your actual payload structure (e.g. request.body.message.from.id)
    const telegramId =
      (request.body?.from?.id as unknown as bigint) ||
      (request.body?.telegramId as unknown as bigint);
    const username =
      (request.body?.from?.username as unknown as string) ||
      (request.body?.from?.username as unknown as string);

    if (telegramId) {
      // Wait for the DB write to finish.
      const user = await this.userSyncService.syncUser(telegramId, username);

      // Attach user to request so you don't have to query it again
      request['user'] = user;
    }

    return next.handle();
  }
}
