export const removeSymbolsExceptNumbers = (string: string): string => {
  // The regex matches any character that is NOT a digit (0-9) globally.
  // It replaces those matches with an empty string ('').
  return string.replace(/[^0-9]/g, '');
};
