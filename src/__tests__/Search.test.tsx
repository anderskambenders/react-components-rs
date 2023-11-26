import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import Search from '../components/search/Search';
import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime';
import userEvent from '@testing-library/user-event';
import { createMockRouter } from './mocks/mockRouter';

const TEST_STRING = 'Cawabanga';
const SEARCH_DEFAULT: string = 'valueKey';
const SEARCH_PLACEHOLDER_TEXT = 'enter search param';


const MockSearchComponent = () => {
  const mockRouter = createMockRouter({});
  return (
    <RouterContext.Provider value={mockRouter}>
    <Search />
  </RouterContext.Provider>
  );
};

describe('Search component', () => {
  it('Verify that clicking the Search button saves the entered value to the local storage', async () => {
    render(<MockSearchComponent />);

    localStorage.setItem(SEARCH_DEFAULT, '');

    const inputElement = await screen.findByPlaceholderText(
      SEARCH_PLACEHOLDER_TEXT
    );

    fireEvent.change(inputElement, { target: { value: TEST_STRING } });
    const buttonElement = await screen.findByRole('button', {
      name: /search/i,
    });
    fireEvent.click(buttonElement);

    expect(localStorage.getItem(SEARCH_DEFAULT)).toEqual(TEST_STRING);
  })
  it('clicking the Search button should set search parameters', async () => {
    const mockRouter = createMockRouter({});
    act(() => {
      render(
        <RouterContext.Provider value={mockRouter}>
          <Search />
        </RouterContext.Provider>
      );
    });
    const inputElement = await screen.findByPlaceholderText(
      SEARCH_PLACEHOLDER_TEXT
    );

    await act(async () => {
      await userEvent.type(inputElement, 'test query string');
      await userEvent.click(screen.getByText('Search'));
    });
    await waitFor(() => {
      expect(mockRouter.push).toBeCalledWith({
        query: { searchValue: 'test query string', page: 1 },
      });
    });
  });
});