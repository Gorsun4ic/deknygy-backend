export const EBOOK_INDICATORS = [
  'e-book',
  'електронна книга',
  'е-книга',
  'е книга',
  'ebook',
  'e book',
];

export const isEbook = (title: string): boolean => {
  if (!title) {
    return false;
  }

  const normalizedTitle = title.toLowerCase().replace(/[.:,;'"()[\]—–-]/g, ' ');

  for (const indicator of EBOOK_INDICATORS) {
    if (normalizedTitle.includes(indicator)) {
      return true;
    }
  }
  return false;
};
