import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import Pagination from '../components/pagination/Pagination';

const setSearch = vi.fn();
const searchParams = new Map([['page', '1']]);
const mockUseLocationValue = {
  pathname: '/',
  search: '',
  hash: '',
  state: null,
};
vi.mock('react-router-dom', () => ({
  useLocation: () => mockUseLocationValue,
  useParams: () => ({ id: 1 }),
  useSearchParams: () => [searchParams, setSearch],
  useEffect: () => [searchParams],
}));

describe('Pagination', () => {
  it('render component', () => {
    render(
      <Pagination
        itemsCount={100}
        itemsPerPage={10}
        updateLimit={function (): void {}}
      />
    );
    expect(screen.getByText('<')).toBeInTheDocument();
    expect(screen.getByText('>')).toBeInTheDocument();
  });
  it('updates URL query parameter when page changes', () => {
    render(
      <Pagination
        itemsCount={100}
        itemsPerPage={10}
        updateLimit={function (): void {}}
      />
    );
    const nextPage = screen.getByText('>');
    fireEvent.click(nextPage);
    expect(setSearch).toBeCalled();
  });
  it('handle events', () => {
    const updateLimit = vi.fn();
    render(
      <Pagination
        itemsCount={100}
        itemsPerPage={10}
        updateLimit={updateLimit}
      />
    );
    const input = screen.getByDisplayValue('10');
    expect(input).toBeInTheDocument();
    fireEvent.change(input, { target: { value: '20' } });
    expect(updateLimit).toBeCalled();
  });
});
