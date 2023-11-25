import { useRouter } from 'next/router';
import { Product } from '../types';

const CardDetail = ({ data } : { data: Product }) => {
  const router = useRouter();
  const { query, pathname } = router;
  const { details: id, ...queryWithoutDetails } = query;
  console.log(id)

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
              <button className={'backButton'} onClick={() => {
                  router.push({
                    pathname,
                    query: { ...queryWithoutDetails },
                  });
                }}>Back</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardDetail;
