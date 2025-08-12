export const API_URL: string =
  process.env.YAKABOO_API_URL ||
  'https://api2.yakaboo.ua/api/catalog/vue_storefront_catalog_2/product/_search';

export const BASE_URL: string =
  process.env.YAKABOO_BASE_URL || 'https://yakaboo.ua/';

export const API_FUZZINESS: number = Number(
  process.env.YAKABOO_API_FUZZINESS || 1.5,
);
export const API_MIN_MATCH: string = process.env.YAKABOO_API_MIN_MATCH || '75%';
export const API_SIZE: number = Number(process.env.YAKABOO_API_SIZE || 10);
