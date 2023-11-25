import Search from '../components/search/Search';
import ErrorBoundary from '../components/error-boundary/ErrorBoundary';
import { Provider } from 'react-redux';
import { store } from '@/store/store';
import { wrapper } from '@/store/store';
import { getProducts, getProduct, getRunningQueriesThunk } from '@/store/productApi';
import { InferGetServerSidePropsType } from 'next';
import ItemsList from '@/components/list-result/ItemsList';

export const getServerSideProps = wrapper.getServerSideProps((store) => async (context) => {
  const { searchValue, limit, page, productId: id } = context.query;
  console.log(context);
  store.dispatch(
    getProducts.initiate({
      searchValue: searchValue?.toString() || '',
      limit: limit?.toString() || '10',
      skip: (+(limit || 10) * (+(page || 1) - 1)).toString() || '0',
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


  return (
    <Provider store={store()}>
    <ErrorBoundary>
      <>
        <Search />
        <div>
          <ItemsList data={data.cardsData} />
        </div>
      </>
    </ErrorBoundary>
    </Provider>

  );
};

export default Home;
