import { useContext, useEffect, useState } from 'react';
import Pagination from '../pagination/Pagination';
import './list-result.css';
import { Link, Outlet, useSearchParams } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import { baseUrl, searchUrl, getProductsData } from '../../api/api';

const ListResult = () => {
  const storageData = localStorage.getItem('valueKey');
  const context = useContext(AppContext);
  const [search] = useSearchParams();
  const [limit, setLimit] = useState(10);
  const page = Object.fromEntries(search).page || '1';
  const skip = limit * (+page - 1);
  const [isLoaded, setIsLoaded] = useState(false);
  const [itemsCount, setItemsCount] = useState(0);

  const updateLimitValue = (value: number) => {
    setLimit(value);
  };

  useEffect(() => {
    let url;
    if (context.searchValue?.length === 0) {
      url = baseUrl(limit, skip);
    } else {
      url =
        storageData !== null ? searchUrl(storageData) : baseUrl(limit, skip);
    }
    setIsLoaded(false);
    context.setProducts([]);
    getProductsData(url).then((result) => {
      setItemsCount(result.total);
      setIsLoaded(true);
      context.setProducts(result.products);
    });
  }, [page, limit, context.searchValue]);

  return (
    <div className="result__container">
      <div className="list__container">
        <div>
          {!isLoaded && <p>Loading...</p>}
          <div className="list">
            {isLoaded && context.products.length === 0 && (
              <p>Sorry, no items founded</p>
            )}
            {context.products.map((item, ind) => (
              <Link
                className="link"
                key={+page * 10 + ind}
                to={`about/${item.id}?page=${page}`}
              >
                <div className="list__item" key={item.id}>
                  <ul className="item__container">
                    <img className="item__img" src={item.images[0]} />
                    <li className="item">{`Name: ${item.title}`}</li>
                    <li className="item">{`Description: ${item.description} cm`}</li>
                  </ul>
                </div>
              </Link>
            ))}
          </div>
        </div>
        {isLoaded && (
          <Pagination
            itemsCount={itemsCount}
            itemsPerPage={limit}
            updateLimit={updateLimitValue}
          />
        )}
      </div>
      <Outlet />
    </div>
  );
};

export default ListResult;
