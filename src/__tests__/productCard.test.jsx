import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { ProductCard } from '../components/ProductCard';

test('renders buy button in product card component', () => {
  const { getByText } = render(<ProductCard />);

  const buyButton = getByText('COMPRAR');
  expect(buyButton).toBeTruthy();
});
