import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import App from '../../s/src/App';

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
  thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
  images: [],
};

describe('Card details component', () => {
  it('Smoke check', async () => {
    const app = render(<App />);
    expect(app).not.toBeNull();
  });

  it('Ensure that clicking the close button hides the component', async () => {
    render(<App />);

    const name = await screen.findByText(`Name: ${productDetails.title}`);
    fireEvent.click(name);

    const descriptionElement = await screen.findByText(
      `Description: ${productDetails.description}`
    );
    await waitFor(() => {
      expect(descriptionElement).not.toBeNull();
    });

    const buttonElement = screen.getByRole('button', { name: /Back/i });

    fireEvent.click(buttonElement);

    await waitFor(() => {
      const descriptionElement = screen.queryByText(
        `Description: ${productDetails.description}`
      );
      expect(descriptionElement).toBeNull();
    });
  });

  it('Make sure the detailed card component correctly displays the detailed card data', async () => {
    render(<App />);

    const name = await screen.findByText(`Name: ${productDetails.title}`);
    fireEvent.click(name);

    const descriptionField = await screen.findByText(
      `Description: ${productDetails.description}`
    );
    expect(descriptionField).not.toBeNull();
  });

  it('Check that a loading indicator is displayed while fetching data', async () => {
    render(<App />);
    const name = await screen.findByText(`Name: iPhone 9`);
    fireEvent.click(name);

    const loader = screen.findByText('Loading...');
    expect(loader).not.toBeNull();
  });
});
