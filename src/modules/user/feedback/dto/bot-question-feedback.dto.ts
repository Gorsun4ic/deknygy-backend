// bot-question-feedback.dto.ts
import { IsString, IsIn } from 'class-validator';

export class BotQuestionFeedbackDto {
  @IsString()
  @IsIn(['yes', 'no'], { message: 'Answer must be "yes" or "no"' })
  answer: string;

  telegramId: string;
}
