import { Injectable } from '@nestjs/common';
import { UserFeedbackRepository } from './feedback.repository';

@Injectable()
export class UserFeedbackService {
  private readonly SERVICE_NAME = 'UserFeedbackService';
  constructor(private readonly feedbackRepo: UserFeedbackRepository) {}

  async submitCustomFeedback(telegramId: bigint, message: string) {
    if (!message.trim()) {
      throw new Error(`${this.SERVICE_NAME}: Feedback message cannot be empty`);
    }
    return this.feedbackRepo.createCustomFeedback(telegramId, message);
  }

  async submitStructuredFeedback(telegramId: bigint, categoryKey: string) {
    const category = await this.feedbackRepo.findCategoryByKey(categoryKey);

    if (!category) {
      throw new Error(`Feedback category "${categoryKey}" not found`);
    }

    return this.feedbackRepo.createStructuredFeedback(telegramId, category.id);
  }

  /**
   * Handles bot feedback flows (yes/no + sub-options).
   * @param telegramId
   * @param key - e.g. "feedback_yes", "feedback_not_found", "feedback_other"
   * @param message - optional free text for "feedback_other"
   */
  async submitBotFeedback(telegramId: bigint, key: string, message?: string) {
    switch (key) {
      case 'feedback_yes':
        return this.submitStructuredFeedback(telegramId, 'positive');

      case 'feedback_not_found':
        return this.submitStructuredFeedback(telegramId, 'not_found');

      case 'feedback_price_wrong':
        return this.submitStructuredFeedback(telegramId, 'price_wrong');

      case 'feedback_other':
        if (!message) {
          // tell bot to ask user for text
          return { status: 'need_text' };
        }
        return this.submitCustomFeedback(telegramId, message);

      default:
        throw new Error(
          `${this.SERVICE_NAME}: Unsupported feedback key "${key}"`,
        );
    }
  }

  async getUserFeedbacks(telegramId: bigint) {
    return this.feedbackRepo.getUserFeedbacks(telegramId);
  }
}
