export const API_URL =
  process.env.VIVAT_API_URL || 'https://api.multisearch.io';
export const BASE_URL = process.env.VIVAT_BASE_URL || 'https://vivat.com.ua';
export const STORE_NAME = process.env.VIVAT_STORE_NAME || 'Vivat';
export const API_LIMIT = Number(process.env.VIVAT_API_LIMIT) || 10;
export const API_SORT = process.env.VIVAT_API_SORT || 'relevance';
export const API_ID = process.env.VIVAT_API_ID || '12340';
export const API_LANG = process.env.VIVAT_API_LANG || 'uk';
export const API_M = process.env.VIVAT_API_M || '1741776093274';
export const API_Q = process.env.VIVAT_API_Q || 'boae4d';
export const API_S = process.env.VIVAT_API_S || 'large';
export const API_UID =
  process.env.VIVAT_API_UID || '142e7a01-c5b7-45b4-943d-57f3cd4332b3';

export const API_PARAMS = {
  id: API_ID,
  lang: API_LANG,
  m: API_M,
  q: API_Q,
  s: API_S,
  uid: API_UID,
};
