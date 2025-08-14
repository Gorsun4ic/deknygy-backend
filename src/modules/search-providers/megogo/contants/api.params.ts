export const API_URL: string =
  process.env.MEGOGO_API_URL || 'https://api.mbooks.com.ua/api/v1/search/main';

export const BASE_URL: string =
  process.env.MEGOGO_BASE_URL || 'https://mbooks.com.ua';

export const STORE_NAME: string =
  process.env.MEGOGO_STORE_NAME || 'Megogo Books';

export const API_LIMIT: number = Number(process.env.MEGOGO_API_LIMIT) || 24;
