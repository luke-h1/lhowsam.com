import render from '@frontend/test/render';
import { fireEvent, screen, within } from '@testing-library/react';
import Header from '.';

describe('Header', () => {
  test('renders header links', () => {
    render(<Header />);

    const headerLinks = screen.getByTestId('header-links');
    const links = within(headerLinks).getAllByRole('link');

    expect(links).toHaveLength(4);

    expect(links[0]).toHaveTextContent('Home');
    expect(links[0]).toHaveAttribute('href', '/');

    expect(links[1]).toHaveTextContent('About');
    expect(links[1]).toHaveAttribute('href', '/about');

    expect(links[2]).toHaveTextContent('Blog');
    expect(links[2]).toHaveAttribute('href', '/blog');

    expect(links[3]).toHaveTextContent('Projects');
    expect(links[3]).toHaveAttribute('href', '/projects');
  });
  test('highlights the current page link', () => {
    render(<Header />);

    const headerLinks = screen.getByTestId('header-links');
    const links = within(headerLinks).getAllByRole('link');

    fireEvent.click(links[1]);

    // TODO: mock next/navigation to get the current pathname
  });
  test('renders CommandMenu link', () => {
    render(<Header />);
    expect(screen.getByTestId('cmdk-icon')).toBeInTheDocument();
  });
});
