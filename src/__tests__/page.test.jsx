import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Page from '../app/page';

describe('Page', () => {
  it('renders the Home component inside the Page component', () => {
    render(<Page />);

    const homeText = screen.getByText('Hello, Next.js!');

    expect(homeText).toBeInTheDocument();
  });
});
