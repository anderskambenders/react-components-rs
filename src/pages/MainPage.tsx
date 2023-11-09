import Search from '../components/search/Search';
import ListResult from '../components/list-result/ListResult';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import ErrorBoundary from '../components/error-boundary/ErrorBoundary';
import { AppContextProvider } from '../context/AppContext';

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
      <AppContextProvider>
        <>
          <Search />
          <div onClick={handleBack}>
            <ListResult />
          </div>
        </>
      </AppContextProvider>
    </ErrorBoundary>
  );
};

export default MainPage;
