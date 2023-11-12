import { useContext, useEffect, useState } from 'react';
import Pagination from '../pagination/Pagination';
import Card from './Card';
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
    context.setIsLoaded(false);
    context.setProducts([]);
    getProductsData(url).then((result) => {
      setItemsCount(result.total);
      context.setIsLoaded(true);
      context.setProducts(result.products);
    });
  }, [page, limit, context.searchValue]);

  return (
    <div className="result__container">
      <div className="list__container">
        <div>
          {!context.isLoaded && <p>Loading...</p>}
          <div className="list">
            {context.isLoaded && context.products.length === 0 && (
              <p>Sorry, no items founded</p>
            )}
            {context.products.map((item, ind) => (
              <Link
                key={ind}
                className="link"
                to={`about/${item.id}?page=${page}`}
              >
                <Card
                  id={item.id}
                  image={item.images}
                  title={item.title}
                  description={item.description}
                />
              </Link>
            ))}
          </div>
        </div>
        {context.isLoaded && (
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
