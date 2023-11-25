import { useEffect, useState } from 'react';
import { getPaginationNumbers } from '../../utils/getPaginationNumbers';
import { useRouter } from 'next/router';

type PaginationProps = {
  itemsCount: number;
};

const Pagination = (props: PaginationProps) => {
  const router = useRouter();
  const { query } = router;
  const page = +(query?.page || 1);
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(page);
  const [limit, setLimit] = useState(10)
  const maxPages = Math.ceil(props.itemsCount / itemsPerPage);
  const pageNumbers = getPaginationNumbers(currentPage, maxPages);

  useEffect(() => {
    if (query.page) {
      setCurrentPage(+(query?.page) as unknown as number)
    }
  }, [router])

  const nextPage = () => {
    if (currentPage < maxPages) {
      setCurrentPage(currentPage + 1);
      delete query.details;
      router.push({ query: { ...query, page: `${currentPage + 1}` } });
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      delete query.details;
      router.push({ query: { ...query, page: `${currentPage - 1}` } });
    }
  };

  return (
    <>
      <div className="pagination-container">
        <select
        onChange={(e) => {
          setLimit(+e.target.value)
          delete query.details;
          router.push({ query: { ...query, limit: +e.target.value, page: 1 } });
        }}
          value={limit}
        >
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
        </select>
        <div className="paginate-ctn">
          <div className="round-effect" onClick={prevPage}>
            {' '}
            &lt;{' '}
          </div>
          {pageNumbers.map((pageNumber) => {
            return (
              <div
                key={pageNumber}
                className={
                  pageNumber === currentPage
                    ? 'round-effect active'
                    : 'round-effect'
                }
                onClick={() => {
                    setCurrentPage(pageNumber);
                    delete query.details;
                    router.push({ query: { ...query, page: `${pageNumber}` } });
                }}
              >
                {pageNumber}
              </div>
            );
          })}
          <div className="round-effect" onClick={nextPage}>
            {' '}
            &gt;{' '}
          </div>
        </div>
      </div>
    </>
  );
};

export default Pagination;
