import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import ErrorBtn from '../error-boundary/ErrorBtn';
import { Props } from '../types';
import './search.css';

interface SearchProps extends Props {
  updateData?: (value: string) => void;
}

const Search = (props: SearchProps) => {
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    if (localStorage.getItem('valueKey') !== null) {
      setSearchValue(localStorage.getItem('valueKey') as string);
    }
  }, []);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    localStorage.setItem('valueKey', searchValue);
    if (props.updateData) {
      props.updateData(searchValue);
    }
  };

  return (
    <>
      <h2 className="header">Api: Dummy json (dummyjson.com)</h2>
      <div className="search__container">
        <form onSubmit={onSubmit}>
          <label className="search__label">
            Enter what you want to see:
            <input
              className="search__input"
              name="key"
              id="key"
              type="text"
              placeholder="enter search param"
              autoComplete="on"
              value={searchValue}
              onChange={onChange}
            />
          </label>
          <button className="search__btn" type="submit">
            Search
          </button>
        </form>
        <ErrorBtn />
      </div>
    </>
  );
};

export default Search;
