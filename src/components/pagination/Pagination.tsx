import { useState } from 'react';
// import { useLocation, useParams, useSearchParams } from 'react-router-dom';
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
  // const dispatch = useAppDispatch();
  // const itemsPerPage = useAppSelector(
  //   (store) => store.itemsPerPage.itemsPerPage
  // );
  // const [search, setSearch] = useSearchParams();
  // const { pathname } = useLocation();
  // const params = useParams();
  // const page = search.get('page') || '1';
  const [currentPage, setCurrentPage] = useState(page);
  const maxPages = Math.ceil(props.itemsCount / itemsPerPage);
  const pageNumbers = getPaginationNumbers(currentPage, maxPages);


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
          value={itemsPerPage}
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
