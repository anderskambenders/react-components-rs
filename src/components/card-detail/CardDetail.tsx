// import { Product } from '../types';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import { useGetProductQuery } from '../../store/productApi';
import './card.css';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { cardLoadingSlice } from '../../store/cardLoading.slice';

const CardDetail = () => {
  const dispatch = useAppDispatch();
  const { productId } = useParams();
  const { data, isLoading } = useGetProductQuery(productId);
  const cardLoading = useAppSelector((state) => state.cardLoading.isLoading);
  const [search] = useSearchParams();
  const currentPage = search.get('page');
  const url = `/?page=${currentPage}`;
  console.log(data);
  useEffect(() => {
    dispatch(cardLoadingSlice.actions.set(isLoading));
  }, [cardLoading]);

  return (
    <div className={'characterInfo'}>
      {data && (
        <div className={'infoWrap'}>
          <img className="product__img" src={data.images[0]} alt="prod-img" />
          <h3 className={'title'}>{data.title}</h3>
          <div className={'blockInfo'}>
            <div>Brand: {data.brand}</div>
            <div>Description: {data.description}</div>
            <div>Price: {data.price}$</div>
            <div className={'listWrap'}></div>
          </div>
          <div>
            <Link to={url}>
              <button className={'backButton'}>Back</button>
            </Link>
          </div>
        </div>
      )}
      {isLoading && <p>Loading...</p>}
    </div>
  );
};

export default CardDetail;
