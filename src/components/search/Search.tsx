import { ChangeEvent, FormEvent, useContext, useState } from 'react';
import ErrorBtn from '../error-boundary/ErrorBtn';
import { AppContext } from '../../context/AppContext';
import './search.css';

const Search = () => {
  const context = useContext(AppContext);
  const [searchValue, setSearchValue] = useState(context.searchValue);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    localStorage.setItem('valueKey', searchValue);
    context.setSearchValue(searchValue);
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
