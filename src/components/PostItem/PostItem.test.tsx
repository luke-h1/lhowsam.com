import render from '@frontend/test/render';
import { screen, within } from '@testing-library/react';
import { post } from '../__tests__/__mocks__/post';
import PostItem from '.';

describe('PostItem', () => {
  test('renders postItem', () => {
    render(<PostItem post={post} />);

    const heading = screen.getByRole('heading', {
      name: 'post-title',
    });
    expect(heading).toBeInTheDocument();
    expect(screen.getByText('post intro')).toBeInTheDocument();
    expect(screen.getByRole('time')).toBeInTheDocument();
    expect(screen.getByTestId('post-tag-1')).toBeInTheDocument();
  });

  test('constructs tag URL correctly', () => {
    render(<PostItem post={post} />);

    const tagContainer = screen.getByTestId('tag-container');

    const links = within(tagContainer).getAllByRole('link');

    expect(links).toHaveLength(1);

    expect(links[0]).toHaveAttribute('href', '/blog/tags/react-js');
  });

  test('constructs post URL correctly', () => {
    render(<PostItem post={post} />);

    const link = screen.queryByRole('link', {
      name: 'post-title',
    });
    expect(link).toHaveAttribute('href', '/blog/post-slug');
  });
});
