// create-structured-feedback.dto.ts
import { IsString } from 'class-validator';

export class CreateStructuredFeedbackDto {
  @IsString()
  categoryKey: string;

  telegramId: string;
}
