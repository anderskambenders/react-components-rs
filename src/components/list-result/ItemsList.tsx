import Card from './Card';
import Pagination from '../pagination/Pagination';
import { Product } from '../types';
import CardDetail from '../card-detail/CardDetail';
import { useRouter } from 'next/router';

export interface IData {
  cardsData: Product[];
  detailsData: Product | null ;
  cardsCount: number;
}

const ItemsList = ({ data }: {data: IData}) => {
  const router = useRouter();
  const { pathname, query } = router;
  const { details, ...queryWithoutDetails } = query;
  console.log(data);

  return (
    <div onClick={() => {
      if (details) {
        router.push({
          pathname,
          query: { ...queryWithoutDetails },
        });
      }
    }} className="result__container">
    <div className="list__container">
      <div>
        <div className="list">
          {data.cardsData?.map((item: Product, ind: number) => (
              <div key={ind} onClick={() => {
                router.push({
                  pathname,
                  query: { ...query, details: `${item.id}` },
                });
              }}>
              <Card

                id={item.id}
                image={item.images}
                title={item.title}
                description={item.description}
              />
              </div>
          ))}
        </div>
      </div>
      <Pagination itemsCount={data.cardsCount} />
    </div>
    {details && <CardDetail data={data.detailsData as Product}></CardDetail>}
    </div>
  );
};
export default ItemsList;
