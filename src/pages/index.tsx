import Search from '../components/search/Search';
import SearchResult from '../components/list-result/SearchResult';
import ErrorBoundary from '../components/error-boundary/ErrorBoundary';
import { Provider } from 'react-redux';
import { store } from '@/store/store';

const Home = () => {
  // const { pathname } = useLocation();
  // const navigate = useNavigate();
  // const [search] = useSearchParams();
  // const page = Object.fromEntries(search).page || '1';

  // const handleBack = () => {
  //   if (pathname !== '/') {
  //     navigate(`/?page=${page}`);
  //   }
  // };

  return (
    <Provider store={store()}>
    <ErrorBoundary>
      <>
        <Search />
        <div>
          <SearchResult />
        </div>
      </>
    </ErrorBoundary>
    </Provider>

  );
};

export default Home;
