import { render, screen } from '@testing-library/react';
import BlogImage from '../BlogImage/BlogImage';

describe('blogImage', () => {
  it('renders correctly with src & alt', () => {
    render(
      <BlogImage src="https://via.placeholder.com/500x230" alt="placeholder" />,
    );

    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('src');
    expect(screen.getByRole('img')).toHaveAttribute('alt', 'placeholder');
  });

  it('renders correctly with src, alt & className', () => {
    render(
      <BlogImage
        src="https://via.placeholder.com/500x230"
        alt="placeholder"
        className="wrapper"
      />,
    );

    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('src');
    expect(screen.getByRole('img')).toHaveAttribute('alt', 'placeholder');
    expect(screen.getByTestId('blog-image')).toHaveAttribute(
      'class',
      'wrapper wrapper',
    );
  });
});
