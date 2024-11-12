import render from '@frontend/test/render';
import { screen } from '@testing-library/react';
import React from 'react';
import Footer, { navigationLinks, socialLinks } from '.';

describe('Footer Component', () => {
  test('renders the footer correctly', () => {
    render(<Footer />);

    expect(screen.getByTestId('footer')).toBeInTheDocument();
    expect(screen.getByTestId('footer-navigation-links')).toBeInTheDocument();
    expect(screen.getByTestId('footer-cc')).toHaveTextContent(
      `© ${new Date().getFullYear()} Luke Howsam`,
    );
  });

  test('renders navigation links correctly', () => {
    render(<Footer />);

    navigationLinks.forEach(link => {
      expect(screen.getByText(link.text)).toHaveAttribute('href', link.href);
    });
  });

  test('renders social links correctly', () => {
    render(<Footer />);

    socialLinks.forEach(link => {
      expect(screen.getByText(link.text)).toHaveAttribute('href', link.href);
    });
  });
});
