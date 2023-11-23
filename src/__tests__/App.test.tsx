import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { expect } from 'vitest';
import App from '../../s/src/App';
import { RouterProvider } from 'react-router-dom';

describe('App', () => {
  it('renders Router Component', () => {
    render(<App></App>);

    const providerElement = RouterProvider;
    expect(providerElement).toBeTruthy();
  });
});
