import render from '@frontend/test/render';
import { screen, within } from '@testing-library/react';
import Footer from '.';

describe('Footer', () => {
  test('renders navigation links', () => {
    render(<Footer />);

    const navigationLinks = screen.getByTestId('footer-navigation-links');

    const links = within(navigationLinks).getAllByRole('link');

    expect(links).toHaveLength(5);

    expect(links[0]).toHaveTextContent('Home');
    expect(links[0]).toHaveAttribute('href', '/');

    expect(links[1]).toHaveTextContent('About');
    expect(links[1]).toHaveAttribute('href', '/about');

    expect(links[2]).toHaveTextContent('Blog');
    expect(links[2]).toHaveAttribute('href', '/blog');

    expect(links[3]).toHaveTextContent('Projects');
    expect(links[3]).toHaveAttribute('href', '/projects');

    expect(links[4]).toHaveTextContent('Talks');
    expect(links[4]).toHaveAttribute('href', '/talks');
  });

  test('renders social links', () => {
    render(<Footer />);

    const socialLinks = screen.getByTestId('footer-social-links');

    const links = within(socialLinks).getAllByRole('link');

    expect(links).toHaveLength(3);

    expect(links[0]).toHaveTextContent('Github');
    expect(links[0]).toHaveAttribute('href', 'https://github.com/luke-h1');

    expect(links[1]).toHaveTextContent('Linkedin');
    expect(links[1]).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/lukehowsam',
    );

    expect(links[2]).toHaveTextContent('Email');
    expect(links[2]).toHaveAttribute('href', 'mailto:luke.howsam@yahoo.com');
  });

  test('renders cc', () => {
    const { container } = render(<Footer />);

    const cc = screen.getByTestId('footer-cc');
    expect(cc).toHaveTextContent(`© ${new Date().getFullYear()} Luke Howsam`);

    expect(container).toMatchSnapshot();
  });
});
