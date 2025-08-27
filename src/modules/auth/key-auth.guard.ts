// src/auth/key-auth.guard.ts

import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class KeyAuthGuard implements CanActivate {
  // Inject ConfigService in the constructor
  constructor(private readonly configService: ConfigService) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<Request>();

    const apiKey = request.headers['x-api-key'] as string;

    // Use the injected ConfigService to get the environment variable
    const privateApiKey = this.configService.get<string>('API_SECURE_TOKEN');

    // Check if API key is provided in request headers
    if (!apiKey) {
      throw new UnauthorizedException('API key is required.');
    }

    // Check if the provided API key matches the configured one
    if (apiKey === privateApiKey) {
      return true;
    } else {
      throw new UnauthorizedException('Invalid API key.');
    }
  }
}
