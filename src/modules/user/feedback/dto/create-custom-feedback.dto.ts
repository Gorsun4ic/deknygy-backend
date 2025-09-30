// create-custom-feedback.dto.ts
import { IsString, MinLength } from 'class-validator';

export class CreateCustomFeedbackDto {
  @IsString()
  @MinLength(1, { message: 'Message cannot be empty' })
  message: string;

  telegramId: string;
}
