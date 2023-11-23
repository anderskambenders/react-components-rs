// import { Outlet, useSearchParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { useGetProductsQuery } from '../../store/productApi';
import ItemsList from './ItemsList';
import { useEffect } from 'react';
import { productsSlice } from '../../store/products.slice';
import { listLoadingSlice } from '../../store/listLoading.slice';

const SearchResult = () => {
  const searchValue = useAppSelector((state) => state.searchInput.searchInput);
  const dispatch = useAppDispatch();
  // const [search] = useSearchParams();
  const page = '1';
  const itemsPerPage = useAppSelector(
    (state) => state.itemsPerPage.itemsPerPage
  );
  const skip = itemsPerPage * (+page - 1);
  const { data, isLoading } = useGetProductsQuery({
    searchValue: searchValue,
    limit: itemsPerPage,
    skip,
  });
  useEffect(() => {
    dispatch(
      productsSlice.actions.update({
        products: data?.products || [],
        productsCount: data?.total || 0,
      })
    );

    dispatch(listLoadingSlice.actions.set(isLoading));
  }, [searchValue, page, dispatch, itemsPerPage, data, isLoading]);

  return (
    <div className="result__container">
      <ItemsList />
      {/* <Outlet /> */}
    </div>
  );
};

export default SearchResult;
