import {
  Controller,
  Post,
  Body,
  HttpException,
  HttpStatus,
  Get,
  Param,
  Query,
} from '@nestjs/common';
import { UserRegistrationService } from './registration/user-registration.service';
import { UserFeedbackService } from './feedback/feedback.service';
import { Throttle } from '@nestjs/throttler';
import type { IUser } from './interfaces/user.interface';
import { CreateCustomFeedbackDto } from './feedback/dto/create-custom-feedback.dto';
import { CreateStructuredFeedbackDto } from './feedback/dto/create-structured-feedback.dto';
import { BotQuestionFeedbackDto } from './feedback/dto/bot-question-feedback.dto';

@Controller('user')
export class UserController {
  constructor(
    private readonly userRegistrationService: UserRegistrationService,
    private readonly userFeedbackService: UserFeedbackService,
  ) {}

  @Post('register')
  async registerUser(@Body() user: IUser): Promise<any> {
    try {
      return await this.userRegistrationService.registerUser(user);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'Failed to register user';
      throw new HttpException(
        { success: false, message: errorMessage },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Throttle({ default: { limit: 1, ttl: 60000 } })
  @Post('feedback/custom')
  async submitCustomFeedback(@Body() dto: CreateCustomFeedbackDto) {
    try {
      const telegramId = BigInt(dto.telegramId);
      return await this.userFeedbackService.submitCustomFeedback(
        telegramId,
        dto.message,
      );
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : 'Failed to submit custom feedback';
      throw new HttpException(
        { success: false, message: errorMessage },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Throttle({ default: { limit: 1, ttl: 60000 } })
  @Post('feedback/structured')
  async submitStructuredFeedback(@Body() dto: CreateStructuredFeedbackDto) {
    try {
      const telegramId = BigInt(dto.telegramId);
      return await this.userFeedbackService.submitStructuredFeedback(
        telegramId,
        dto.categoryKey,
      );
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : 'Failed to submit structured feedback';
      throw new HttpException(
        { success: false, message: errorMessage },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Throttle({ default: { limit: 1, ttl: 60000 } })
  @Post('feedback/bot')
  async submitBotFeedback(@Body() dto: BotQuestionFeedbackDto) {
    try {
      const telegramId = BigInt(dto.telegramId);
      return await this.userFeedbackService.submitBotFeedback(
        telegramId,
        dto.answer,
      );
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : 'Failed to submit bot feedback';
      throw new HttpException(
        { success: false, message: errorMessage },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Get(':userId/feedbacks')
  async getUserFeedbacks(
    @Param('userId') userId: string,
    @Query('page') page?: string,
    @Query('limit') limit?: string,
  ) {
    const pageNumber = page ? parseInt(page, 10) : 1;
    const limitNumber = limit ? parseInt(limit, 10) : 10;

    try {
      return await this.userFeedbackService.getUserFeedbacks(
        BigInt(userId.toString()),
        pageNumber,
        limitNumber,
      );
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'Failed to get user feedbacks';
      throw new HttpException(
        { success: false, message: errorMessage },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Get(':userId/feedbacks/count')
  async getUserFeedbacksCount(@Param('userId') userId: string) {
    try {
      return await this.userFeedbackService.getUserFeedbacksCount(
        BigInt(userId.toString()),
      );
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : 'Failed to get user feedbacks count';
      throw new HttpException(
        { success: false, message: errorMessage },
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
