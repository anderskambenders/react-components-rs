import { useEffect, useState } from 'react';
import './pagination.css';
import { useLocation, useParams, useSearchParams } from 'react-router-dom';
import { useAppDispatch } from '../../store/hooks';
import { itemsPerPageSlice } from '../../store/itemsPerPage.slice';

type PaginationProps = {
  itemsCount: number;
  itemsPerPage: number;
};

const Pagination = (props: PaginationProps) => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const [search, setSearch] = useSearchParams();
  const { pathname } = useLocation();
  const page = Object.fromEntries(search).page || '1';
  const [currentPage, setCurrentPage] = useState(+page);
  const maxPages = Math.ceil(props.itemsCount / props.itemsPerPage);
  const items = [];
  let leftSide = currentPage - 2;
  if (leftSide <= 0) leftSide = 1;
  let rightSide = currentPage + 2;
  if (rightSide > maxPages) rightSide = maxPages;
  for (let number = leftSide; number <= rightSide; number++) {
    items.push(
      <div
        key={number}
        className={
          number === currentPage ? 'round-effect active' : 'round-effect'
        }
        onClick={() => {
          if (pathname === '/') {
            setCurrentPage(number);
            setSearch({ ...params, page: number.toString() });
          }
        }}
      >
        {number}
      </div>
    );
  }

  useEffect(() => {
    setSearch({ ...params, page: page });
  }, []);

  const nextPage = () => {
    if (currentPage < maxPages) {
      setCurrentPage(currentPage + 1);
      setSearch({ ...params, page: (currentPage + 1).toString() });
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      setSearch({ ...params, page: (currentPage - 1).toString() });
    }
  };

  return (
    <>
      <div className="pagination-container">
        <select
          onChange={(e) => {
            dispatch(itemsPerPageSlice.actions.set(+e.target.value));
          }}
          value={props.itemsPerPage}
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
          {items}
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
