export const getPaginationNumbers = (currentPage: number, maxPages: number) => {
  const pageNumbers: number[] = [];
  let leftSide = currentPage - 2;
  if (leftSide <= 0) leftSide = 1;
  let rightSide = currentPage + 2;
  if (rightSide > maxPages) rightSide = maxPages;
  for (let number = leftSide; number <= rightSide; number++) {
    pageNumbers.push(number);
  }
  return pageNumbers;
};
