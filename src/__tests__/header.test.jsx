import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Header } from '../components/Header';

test('renders header component', () => {
  const { getByText, getByAltText } = render(<Header />);

  const mksElement = getByText('MKS');
  expect(mksElement).toBeTruthy();

  const sistemasElement = getByText('Sistemas');
  expect(sistemasElement).toBeTruthy();

  const cartIcon = getByAltText('logo');
  expect(cartIcon).toBeTruthy();

  const cartCount = getByText('0');
  expect(cartCount).toBeTruthy();
});
