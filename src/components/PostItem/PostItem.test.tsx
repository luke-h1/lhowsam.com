import { posts } from '@frontend/test/__mocks__/post';
import render from '@frontend/test/render';
import { screen } from '@testing-library/react';
import PostItem from '.';

describe('PostItem', () => {
  test('renders correctly', () => {
    render(<PostItem post={posts[0]} />);

    expect(screen.getByRole('article')).toBeInTheDocument();

    expect(screen.getByText(posts[0].title)).toBeInTheDocument();
    expect(screen.getByText(posts[0].intro)).toBeInTheDocument();

    expect(screen.getByRole('link', { name: posts[0].title })).toHaveAttribute(
      'href',
      `/blog/${posts[0].slug.current}`,
    );
  });
});
