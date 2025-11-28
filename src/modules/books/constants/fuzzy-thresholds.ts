export const MIN_AUTHOR_WORD_MATCH_RATIO = 0.66;
export const AUTHOR_WORD_SIMILARITY_THRESHOLD = 0.7;
export const MIN_TITLE_SIMILARITY_THRESHOLD = 0.9;
export const MIN_TITLE_SUBSTRING_THRESHOLD = 0.85;
export const MIN_WORD_MATCH_SCORE = 0.6;
export const THRESHOLD_TITLE_ONLY_EXTRA_HIGH = 0.95;
export const THRESHOLD_TITLE_ONLY_TOP = 0.6;
export const THRESHOLD_TITLE_ONLY_FAIR = 0.5;
export const THRESHOLD_TITLE_ONLY_LOW = 0.3;
export const WEIGHT_AUTHOR_SIMILARITY = 0.5;
export const BONUS_STRONG_COMBINED = 1.0;
export const BONUS_MODERATE_COMBINED = 0.6;
export const BONUS_SMALL_COMBINED = 0.3;

/* Author Typo Merging Thresholds 
Has been used in the mergeAuthorTypoGroups function to determine if two groups should be merged.
0.75 is the bare minimum, because here is ratio of two similar authors:
John Doe and Jon Doe is 0.76
*/
export const AUTHOR_TYPO_MERGING_THRESHOLD = 0.75;
