// Leaves only numbers in ISBN
export function clearIsbn(isbn: string): string {
  return isbn.replace(/[^0-9]/g, '');
}
