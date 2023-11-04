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
  const [search] = useSearchParams();
  const page = Object.fromEntries(search).page || '1';
  const baseUrl = `https://dummyjson.com/products`;
  const searchUrl = `${baseUrl}search?q=`;
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState<Product[]>([]);
  const itemsPerPage = 10;
  const [itemsCount, setItemsCount] = useState(0);

  const getData = async (url: string) => {
    setIsLoaded(false);
    setItems([]);
    try {
      const response = await fetch(url);
      const result = await response.json();
      setItemsCount(result.count);
      setIsLoaded(true);
      setItems(result.products);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    const url =
      localStorage.getItem('valueKey') !== null
        ? `${searchUrl}${localStorage.getItem('valueKey')}`
        : baseUrl;
    getData(url);
  }, []);
  useEffect(() => {
    if (props.data) {
      const url =
        props.data?.length !== 0
          ? `${searchUrl}${props.data}&page=1`
          : `${baseUrl}?page=1`;
      getData(url);
    }
  }, [props.data]);

  useEffect(() => {
    const url =
      props.data?.length !== 0
        ? `${searchUrl}${props.data}?page=${page}`
        : `${baseUrl}?page=${page}`;
    getData(url);
  }, [page]);

  return (
    <>
      <div className="list__container">
        <div>
          {!isLoaded && <p>Loading...</p>}
          <ol className="list">
            {isLoaded && items.length === 0 && <p>Sorry, no items founded</p>}
            {items.map((item, ind) => (
              <Link key={+page * 10 + ind} to={`about/${item.id}`}>
                <li className="list__item" key={item.id}>
                  <ul className="item__container">
                    <li className="item">{`Name: ${item.title}`}</li>
                    <li className="item">{`Description: ${item.description} cm`}</li>
                  </ul>
                </li>
              </Link>
            ))}
          </ol>
        </div>
        <Outlet />
      </div>
      {isLoaded && (
        <Pagination itemsCount={itemsCount} itemsPerPage={itemsPerPage} />
      )}
    </>
  );
};

export default ListResult;
