import './card.css';
import { Product } from '../types';
import { useLoaderData, Link, LoaderFunction } from 'react-router-dom';

async function getProduct(id: number) {
  if (!id || typeof id !== 'number') {
    throw new Error('Invalid product ID');
  }
  const request = await fetch(`https://dummyjson.com/products/${id}`);
  const response = await request.json();
  return response;
}

interface ProductData {
  product: Product;
}

export const loader: LoaderFunction = async ({ params }) => {
  if (params && params.peopleId !== undefined) {
    const res = await getProduct(+params.peopleId);
    console.log(res);
    return { product: res };
  }
};

const Card = () => {
  const { product } = useLoaderData() as ProductData;
  console.log(product);
  return (
    <div className={'characterInfo'}>
      <div className={'infoWrap'}>
        <>
          <h3 className={'title'}>{product.title}</h3>
          <div className={'blockInfo'}>
            <div>Weight: {product.brand}</div>
            <div>Species: {product.description}</div>
            <div className={'listWrap'}></div>
          </div>
          <div>
            <Link to={'/'}>
              <button className={'backButton'}>Back</button>
            </Link>
          </div>
        </>
      </div>
    </div>
  );
};

export default Card;
