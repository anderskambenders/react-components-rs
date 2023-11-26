import CardDetail from '@/components/card-detail/CardDetail';
import { act, render, screen, waitFor } from '@testing-library/react';
import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime';
import { createMockRouter } from './mocks/mockRouter';


const productDetails = {
  id: 1,
  title: 'iPhone 9',
  description: 'An apple mobile which is nothing like apple',
  price: 549,
  discountPercentage: 12.96,
  rating: 4.69,
  stock: 94,
  brand: 'Apple',
  category: 'smartphones',
  thumbnail: ['https://i.dummyjson.com/data/products/1/thumbnail.jpg'],
  species: [],
  images: [],
};

describe('Card details component', () => {

  it('detailed card component should display the detailed card data correctly', async () => {
    await act(async () => {
      const mockRouter = createMockRouter({});
      render(
        <RouterContext.Provider value={mockRouter}>
          <CardDetail data={productDetails}></CardDetail>
        </RouterContext.Provider>
      );
    });

    const title = productDetails.title;
    await waitFor(() => {
      expect(screen.getByText(title)).toBeInTheDocument();
      expect(
        screen.getByText(`Description: ${productDetails.description}`)
      ).toBeInTheDocument();
    });
  });

});
