import { type IBookInfo } from 'src/modules/common/interfaces/api/book.info';
import { type FormatType } from 'src/modules/common/interfaces/api/book.info';

/**
 * Interface representing a group of books identified as the same title.
 * variants: A map to track all original title strings and their counts to select the best display title.
 * formats: An object containing arrays of book records, separated by format type (e.g., print, ebook, audio).
 */
export interface IBookGroup {
  variants: Map<string, number>;
  formats: Record<Exclude<FormatType, 0>, IBookInfo[]>;
  similarity: number;
}
