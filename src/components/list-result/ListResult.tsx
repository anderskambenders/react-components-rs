import { useContext, useEffect, useState } from 'react';
import Pagination from '../pagination/Pagination';
import Card from './Card';
import './list-result.css';
import { Link, Outlet, useSearchParams } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import { baseUrl, searchUrl, getProductsData } from '../../api/api';
import { useAppSelector } from '../../store/hooks';

const ListResult = () => {
  const searchValue = useAppSelector((state) => state.searchInput.searchInput);
  const storageData = localStorage.getItem('valueKey');
  const context = useContext(AppContext);
  const [search] = useSearchParams();
  const page = Object.fromEntries(search).page || '1';
  const [itemsCount, setItemsCount] = useState(0);
  const itemsPerPage = useAppSelector(
    (state) => state.itemsPerPage.itemsPerPage
  );
  const skip = itemsPerPage * (+page - 1);

  useEffect(() => {
    let url;
    if (searchValue.length === 0) {
      url = baseUrl(itemsPerPage, skip);
    } else {
      url =
        storageData !== null
          ? searchUrl(storageData)
          : baseUrl(itemsPerPage, skip);
    }
    context.setIsLoaded(false);
    context.setProducts([]);
    getProductsData(url).then((result) => {
      setItemsCount(result.total);
      context.setIsLoaded(true);
      context.setProducts(result.products);
    });
  }, [page, itemsPerPage, searchValue]);

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
          <Pagination itemsCount={itemsCount} itemsPerPage={itemsPerPage} />
        )}
      </div>
      <Outlet />
    </div>
  );
};

export default ListResult;
