export const getPaginationObject = (
  total: number,
  pageSize: number,
  pageNumber: number,
) => {
  const totalPages = Math.ceil(total / pageSize);
  const hasNextPage = pageNumber < totalPages;
  const hasPreviousPage = pageNumber > 1;

  return {
    page: pageNumber,
    limit: pageSize,
    total,
    totalPages,
    hasNextPage,
    hasPreviousPage,
  };
};
