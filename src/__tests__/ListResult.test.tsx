import { render, screen } from '@testing-library/react';
import { describe, expect } from 'vitest';
import SearchResult from '../components/list-result/SearchResult';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
// import { store } from '../store/store';
import { mockStore } from './mocks/mockStore';
import App from '../../s/src/App';
// const product = {
//   id: 1,
//   title: 'Iphone',
//   description: 'Iphone 12',
//   price: 1000,
//   discountPercentage: 10,
//   rating: 10,
//   stock: 4,
//   brand: 'apple',
//   category: 'phones',
//   thumbnail: ['moc, apple'],
//   species: ['red', 'blue'],
//   images: ['image.png'],
// };

describe('CardContainer', () => {
  it('It renders component', async () => {
    render(
      <MemoryRouter initialEntries={['/page/1/']}>
        <Provider store={mockStore}>
          <SearchResult />
        </Provider>
      </MemoryRouter>
    );
    const notFoundText = await screen.findByText('Sorry, no items founded');
    expect(notFoundText).toBeTruthy();
  });

  it('renders the specified number of cards', async () => {
    render(<App />);
    const content = await screen.findAllByTestId('card');
    expect(content.length).toBe(10);
  });

  it('message is displayed if no cards are present', () => {
    render(
      <MemoryRouter initialEntries={['/page/1/']}>
        <Provider store={mockStore}>
          <SearchResult />
        </Provider>
      </MemoryRouter>
    );
    expect(screen.getByText('Sorry, no items founded')).toBeInTheDocument();
  });
});
