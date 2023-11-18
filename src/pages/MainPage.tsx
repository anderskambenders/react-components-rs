import Search from '../components/search/Search';
import SearchResult from '../components/list-result/SearchResult';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import ErrorBoundary from '../components/error-boundary/ErrorBoundary';

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

  return (
    <ErrorBoundary>
      <>
        <Search />
        <div onClick={handleBack}>
          <SearchResult />
        </div>
      </>
    </ErrorBoundary>
  );
};

export default MainPage;
