/* 
    Gets query string and format it before sending to the API.
    Delete special characters, links etc.
*/
export const formatQuery = (query: string): string => {
  return query.replace(/['"`:.,]/gi, '');
};
