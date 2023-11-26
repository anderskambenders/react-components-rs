import { useRouter } from 'next/router';
import { Product } from '../types';
import Image from 'next/image';
import { blurDataURL } from '../list-result/Card';

const CardDetail = ({ data }: { data: Product }) => {
  const router = useRouter();
  const { query, pathname } = router;
  const { ...queryWithoutDetails } = query;
  const myLoader = () => {
    return data.images[0];
  };

  return (
    <div className={'characterInfo'}>
      {data && (
        <div className={'infoWrap'}>
          <Image
            className="product__img"
            loader={myLoader}
            src={data.images[0]}
            alt={'product-img'}
            width={200}
            height={180}
            unoptimized={true}
            style={{
              width: 'auto',
              height: 'auto',
            }}
            placeholder="blur"
            blurDataURL={blurDataURL}
          />
          <h3 className={'title'}>{data.title}</h3>
          <div className={'blockInfo'}>
            <div>Brand: {data.brand}</div>
            <div>Description: {data.description}</div>
            <div>Price: {data.price}$</div>
            <div className={'listWrap'}></div>
          </div>
          <div>
            <button
              className={'backButton'}
              onClick={() => {
                router.push({
                  pathname,
                  query: { ...queryWithoutDetails },
                });
              }}
            >
              Back
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardDetail;
