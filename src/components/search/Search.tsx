import { ChangeEvent, FormEvent, useState } from 'react';
import ErrorButton from '../error-boundary/ErrorButton';
import './search.css';
import { useAppDispatch } from '../../store/hooks';
import { searchInputSlice } from '../../store/searchInput.slice';

const Search = () => {
  const dispatch = useAppDispatch();
  const [searchValue, setSearchValue] = useState(
    localStorage.getItem('valueKey') || ''
  );

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    localStorage.setItem('valueKey', searchValue);
    dispatch(searchInputSlice.actions.set(searchValue));
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
        <ErrorButton />
      </div>
    </>
  );
};

export default Search;
