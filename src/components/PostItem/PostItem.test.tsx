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

    for (let i = 0; i < posts[0].tags.length; i += 1) {
      const tagId = `post-tag-${posts[0].tags[i]._id}`;

      expect(screen.getByTestId(tagId)).toHaveTextContent(
        posts[0].tags[i].title.toUpperCase(),
      );

      expect(screen.getByTestId(tagId)).toHaveAttribute(
        'href',
        `/blog/tags/${posts[0].tags[i].slug.current}`,
      );
    }
  });
});
