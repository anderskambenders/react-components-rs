export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string[];
  species: string[];
  images: Array<string>;
};

export interface Props {
  children?: JSX.Element;
}

export type ApiCallContext = Response<Product> | null;

export interface Response<T> {
  total: number;
  skip: number;
  limit: number;
  products: T[];
}
