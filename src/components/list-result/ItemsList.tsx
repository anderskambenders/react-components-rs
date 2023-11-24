// import { Link, useSearchParams } from 'react-router-dom';
import { useAppSelector } from '../../store/hooks';
import Card from './Card';
import Pagination from '../pagination/Pagination';
import { Product } from '../types';

const ItemsList = ({ data }: { data : Array<Product> }) => {
  const isLoading = useAppSelector((state) => state.listLoading.isLoading);
  // const products = useAppSelector((state) => state.products.products as Array<Product>);
  // const itemsCount = useAppSelector((state) => state.products.productsCount);
  // const [search] = useSearchParams();
  // const page = search.get('page') || '1';

  return (
    <div className="result__container">
    <div className="list__container">
      <div>
        {/* {isLoading && <p>Loading...</p>} */}
        <div className="list">
          {/* {!isLoading && data.length === 0 && (
            <p>Sorry, no items founded</p>
          )} */}
          {data?.map((item, ind) => (
            // <Link
            //   key={ind}
            //   className="link"
            //   to={`about/${item.id}?page=${page}`}
            // >
              <Card
                key={ind}
                id={item.id}
                image={item.images}
                title={item.title}
                description={item.description}
              />
            // </Link>
          ))}
        </div>
      </div>
      {!isLoading && <Pagination itemsCount={10} />}
    </div>
    </div>
  );
};
export default ItemsList;
