import { useEffect, useState } from 'react';
import { Character } from '../types';
import { Props } from '../types';
import './list-result.css';

interface ResultProps extends Props {
  data?: string;
}

const ListResult = (props: ResultProps) => {
  const baseUrl = `https://swapi.dev/api/people/`;
  const searchUrl = `${baseUrl}?search=`;
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState<Character[]>([]);

  const getData = async (url: string) => {
    setIsLoaded(false);
    setItems([]);
    const response = await fetch(url);
    const result = await response.json();
    setIsLoaded(true);
    setItems(result.results);
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
        props.data?.length !== 0 ? `${searchUrl}${props.data}` : baseUrl;
      getData(url);
    }
  }, [baseUrl, props.data, searchUrl]);

  return (
    <div className="list__container">
      {!isLoaded && <p>Loading...</p>}
      <ol className="list">
        {isLoaded && items.length === 0 && <p>Sorry, no items founded</p>}
        {items.map((item) => (
          <li className="list__item" key={item.name}>
            <ul className="item__container">
              <li className="item">{`Name: ${item.name}`}</li>
              <li className="item">{`Gender: ${item.gender} cm`}</li>
              <li className="item">{`Eye color: ${item.eye_color}`}</li>
              <li className="item">{`Birth year: ${item.birth_year}`}</li>
            </ul>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ListResult;
