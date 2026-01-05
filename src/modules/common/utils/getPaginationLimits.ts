export const getPaginationLimits = (page: number, limit: number) => {
  // Ensure page is a valid number and at least 1
  const pageNumber = Math.max(1, Number(page) || 1);
  // Ensure limit is a valid number, at least 1 and at most 100
  const pageSize = Math.min(Math.max(1, Number(limit) || 10), 100);
  const skip = (pageNumber - 1) * pageSize;

  return { pageNumber, pageSize, skip };
};
