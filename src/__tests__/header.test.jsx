import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Header } from '../components/Header';
import { CartProvider } from '../contexts/CartContext'; // Certifique-se de importar o CartProvider correto
import { ShoppingCartProvider } from '@/contexts/AsideMenuContext';

test('renders header component', () => {
  render(
    <ShoppingCartProvider>
      <CartProvider>
        <Header />
      </CartProvider>
    </ShoppingCartProvider>
  );

  const mksElement = screen.getByText('MKS');
  expect(mksElement).toBeTruthy();

  const sistemasElement = screen.getByText('Sistemas');
  expect(sistemasElement).toBeTruthy();

  const cartIcon = screen.getByAltText('logo');
  expect(cartIcon).toBeTruthy();
});
