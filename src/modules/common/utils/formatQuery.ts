/* 
    Gets query string and format it before sending to the API.
    Delete special characters, links etc.
*/
export const formatQuery = (query: string): string => {
  if (!query) return '';
  const stringWithoutQuotes = query.replace(/'"`/gi, '');
  const urlPattern = /https?:\/\/\S+|www\.\S+/gi;
  const stringWithoutUrl = stringWithoutQuotes.replace(urlPattern, '');
  return stringWithoutUrl.toLowerCase();
};
