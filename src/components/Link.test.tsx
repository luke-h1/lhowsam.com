import render from '@frontend/test/render';
import { screen } from '@testing-library/react';
import Link from './Link';

describe('Link', () => {
  test('links to relative URL correctly', () => {
    render(<Link href="/about">About</Link>);
    expect(screen.getByText('About')).toHaveAttribute('href', '/about');
  });
  test('links to absolute URL correctly', () => {
    render(<Link href="https://example.com">Example</Link>);
    expect(screen.getByText('Example')).toHaveAttribute(
      'href',
      'https://example.com',
    );

    expect(screen.getByText('Example')).toHaveAttribute('target', '_blank');
    expect(screen.getByText('Example')).toHaveAttribute(
      'rel',
      'noopener noreferrer',
    );
  });
  test('links to hash URL correctly', () => {
    render(<Link href="#about">About</Link>);
    expect(screen.getByText('About')).toHaveAttribute('href', '#about');
    expect(screen.getByText('About')).not.toHaveAttribute('target', '_blank');
    expect(screen.getByText('About')).not.toHaveAttribute(
      'rel',
      'noopener noreferrer',
    );
  });
});
