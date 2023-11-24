import Search from '../components/search/Search';
import SearchResult from '../components/list-result/SearchResult';
import ErrorBoundary from '../components/error-boundary/ErrorBoundary';
import { Provider } from 'react-redux';
import { store } from '@/store/store';
import { wrapper } from '@/store/store';
import { getProducts, getProduct, getRunningQueriesThunk } from '@/store/productApi';
import { InferGetServerSidePropsType } from 'next';

export const getServerSideProps = wrapper.getServerSideProps((store) => async (context) => {
  const { searchValue, limit, skip, productId: id } = context.query;
  store.dispatch(
    getProducts.initiate({
      searchValue: searchValue?.toString() || '',
      limit: limit?.toString() || '10',
      skip: skip?.toString() || '0',
    })
  );
  if (id) {
    store.dispatch(getProduct.initiate(id.toString()));
  }

  await Promise.all(store.dispatch(getRunningQueriesThunk()));
  return {
    props: {
      data: {
        cardsData: store.getState().products.products,
        detailsData: store.getState().products.product,
      },
    },
  };
});

const Home = ({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  // const { pathname } = useLocation();
  // const navigate = useNavigate();
  // const [search] = useSearchParams();
  // const page = Object.fromEntries(search).page || '1';

  // const handleBack = () => {
  //   if (pathname !== '/') {
  //     navigate(`/?page=${page}`);
  //   }
  // };

  console.log(data)

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
