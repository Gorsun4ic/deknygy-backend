export const API_URL: string =
  process.env.APRIORI_API_URL ||
  'https://apriori-publishing.com/backend/products';

export const BASE_URL: string =
  process.env.APRIORI_BASE_URL || 'https://apriori-publishing.com';

export const STORE_NAME: string = process.env.APRIORI_STORE_NAME || 'Апріорі';

export const API_LIMIT: number = Number(process.env.APRIORI_API_LIMIT) || 10;

export const API_SORT: string = process.env.APRIORI_API_SORT || 'bestsellers';
