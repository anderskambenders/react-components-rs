import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import MainPage from '../../s/src/pages/MainPage';
import NotFound from '../pages/404';

const wrongPath = '/kavabanga';

describe('Not Found', () => {
  it('It renders component', async () => {
    render(<NotFound />);
    const notFoundText = screen.findByText(/The page is not found/i);
    expect(notFoundText).toBeTruthy();
  });

  it('Redirects to NotFound for invalid path', async () => {
    render(
      <MemoryRouter initialEntries={[wrongPath]}>
        <MainPage />
      </MemoryRouter>
    );

    const notFoundText = screen.findByText(/The page is not found/i);
    expect(notFoundText).not.toBeNull();
  });
});
