import { type IBookGroup } from './book.group';

// A temporary map structure used during the grouping process, keyed by the normalized group identifier.
export type TempMap = Record<string, IBookGroup>;
