import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import ListResult from '../components/list-result/ListResult';
import { AppContext } from '../context/AppContext';
import { MemoryRouter } from 'react-router-dom';
const product = {
  id: 1,
  title: 'Iphone',
  description: 'Iphone 12',
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
const mockFunc = vi.fn();

describe('CardContainer', () => {
  it('renders the specified number of cards', () => {
    render(
      <AppContext.Provider
        value={{
          products: [product, product],
          setProducts: mockFunc,
          setSearchValue: mockFunc,
          searchValue: '',
          isLoaded: true,
          setIsLoaded: mockFunc,
        }}
      >
        <MemoryRouter initialEntries={['/page/1/']}>
          <ListResult />
        </MemoryRouter>
      </AppContext.Provider>
    );
    expect(screen.getAllByText('Name: Iphone').length).toBe(2);
  });
  it('message is displayed if no cards are present', () => {
    render(
      <AppContext.Provider
        value={{
          products: [],
          setProducts: mockFunc,
          setSearchValue: mockFunc,
          searchValue: '',
          isLoaded: true,
          setIsLoaded: mockFunc,
        }}
      >
        <MemoryRouter initialEntries={['/page/1/']}>
          <ListResult />
        </MemoryRouter>
      </AppContext.Provider>
    );
    expect(screen.getByText('Sorry, no items founded')).toBeInTheDocument();
  });
});
