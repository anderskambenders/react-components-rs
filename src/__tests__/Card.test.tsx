import {  render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Card from '../components/list-result/Card';

const product = {
  id: 1,
  title: 'Iphone',
  description: 'Description: SIM-Free,',
  price: 1000,
  discountPercentage: 10,
  rating: 10,
  stock: 4,
  brand: 'apple',
  category: 'phones',
  thumbnail: ['moc, apple'],
  species: ['red', 'blue'],
  images: ['image.png'],
};

describe('Card Component', () => {
  it('image is rendered', () => {
    render(
      <Card
        id={product.id}
        image={product.images}
        title={product.title}
        description={product.description}
      />
    );
    expect(screen.getByAltText('product-image')).toBeInTheDocument();
  });
  it('renders the relevant card data', () => {
    render(
      <Card
        id={product.id}
        image={product.images}
        title={product.title}
        description={product.description}
      />
    );
    const name = screen.getByText('Name: Iphone');
    expect(name).toBeInTheDocument();
  });
});
