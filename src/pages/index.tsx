import Search from '../components/search/Search';
import ErrorBoundary from '../components/error-boundary/ErrorBoundary';
import { Provider } from 'react-redux';
import { store } from '@/store/store';
import { wrapper } from '@/store/store';
import {
  getProducts,
  getProduct,
  getRunningQueriesThunk,
} from '@/store/productApi';
import { InferGetServerSidePropsType } from 'next';
import ItemsList from '@/components/list-result/ItemsList';

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const { searchValue, limit, page, details } = context.query;
    store.dispatch(
      getProducts.initiate({
        searchValue: searchValue?.toString() || '',
        limit: limit?.toString() || '10',
        skip: (+(limit || 10) * (+(page || 1) - 1)).toString() || '0',
      })
    );
    if (details) {
      store.dispatch(getProduct.initiate(details.toString()));
    }

    await Promise.all(store.dispatch(getRunningQueriesThunk()));
    return {
      props: {
        data: {
          cardsData: store.getState().products.products,
          cardsCount: store.getState().products.productsCount,
          detailsData: store.getState().products.product,
        },
      },
    };
  }
);

const Home = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  console.log(data);
  return (
    <Provider store={store()}>
      <ErrorBoundary>
        <>
          <Search />
          <div>
            <ItemsList data={data} />
          </div>
        </>
      </ErrorBoundary>
    </Provider>
  );
};

export default Home;
