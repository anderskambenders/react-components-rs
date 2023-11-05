import { useEffect, useState } from 'react';
import { Product } from '../types';
import { Props } from '../types';
import Pagination from '../pagination/Pagination';
import './list-result.css';
import { Link, Outlet, useSearchParams } from 'react-router-dom';

interface ResultProps extends Props {
  data?: string;
}

const ListResult = (props: ResultProps) => {
  const storageData = localStorage.getItem('valueKey');
  const [search] = useSearchParams();
  const [limit, setLimit] = useState(10);
  const page = Object.fromEntries(search).page || '1';
  const skip = limit * (+page - 1);
  const baseUrl = `https://dummyjson.com/products?limit=${limit}&skip=${skip}`;
  const searchUrl = (searchString: string) =>
    `https://dummyjson.com/products/search?q=${searchString}`;
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState<Product[]>([]);
  const [itemsCount, setItemsCount] = useState(0);
  const getData = async (url: string) => {
    setIsLoaded(false);
    setItems([]);
    try {
      const response = await fetch(url);
      const result = await response.json();
      setItemsCount(result.total);
      setIsLoaded(true);
      setItems(result.products);
    } catch (err) {
      console.log(err);
    }
  };

  const updateLimitValue = (value: number) => {
    setLimit(value);
  };

  useEffect(() => {
    let url;
    if (props.data?.length === 0) {
      url = baseUrl;
    } else {
      url = storageData !== null ? searchUrl(storageData) : baseUrl;
    }
    getData(url);
  }, [page, limit, props.data]);

  return (
    <div className="result__container">
      <div className="list__container">
        <div>
          {!isLoaded && <p>Loading...</p>}
          <div className="list">
            {isLoaded && items.length === 0 && <p>Sorry, no items founded</p>}
            {items.map((item, ind) => (
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
