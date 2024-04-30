// Importe as dependências necessárias
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Footer from '../components/Footer';

test('renders footer component with correct text', () => {
  const { getByText } = render(<Footer />);

  const footerText = getByText('MKS sistemas © Todos os direitos reservados');
  expect(footerText).toBeInTheDocument();
});
