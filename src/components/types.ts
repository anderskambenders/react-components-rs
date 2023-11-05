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
