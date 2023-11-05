import { useState } from 'react';
import Search from '../components/search/Search';
import ListResult from '../components/list-result/ListResult';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';

const MainPage = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [search] = useSearchParams();
  const page = Object.fromEntries(search).page || '1';

  const handleBack = () => {
    if (pathname !== '/') {
      navigate(`/?page=${page}`);
    }
  };
  const [searchValue, setSearchValue] = useState('');

  const updateData = (value: string) => setSearchValue(value);

  return (
    <>
      <Search updateData={updateData} />
      <div onClick={handleBack}>
        <ListResult data={searchValue} />
      </div>
    </>
  );
};

export default MainPage;
