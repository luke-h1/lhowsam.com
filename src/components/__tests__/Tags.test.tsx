import { Tag } from '@src/types/sanity';
import { render, screen } from '@testing-library/react';
import Tags from '../Tags';

describe('Tags', () => {
  const tags: Tag[] = [
    {
      _id: '5e9f8f8f8f8f8f8f8f8f8f8',
      title: 'Tag 1',
      slug: {
        _type: 'slug',
        current: 'tag-1',
      },
      _type: 'tag',
      key: 'tag-1',
    },
    {
      _id: '5e9f8f8f8f8f8f8f8f8f8f8',
      title: 'Tag 2',
      slug: {
        _type: 'slug',
        current: 'tag-2',
      },
      _type: 'tag',
      key: 'tag-2',
    },
  ];

  it('renders a link to tag slug page when the `type` is blog', () => {
    render(<Tags tags={tags} type="blog" />);

    expect(screen.getByText('#Tag 1')).toHaveAttribute(
      'href',
      '/blog/tags/tag-1',
    );
    expect(screen.getByText('#Tag 2')).toHaveAttribute(
      'href',
      '/blog/tags/tag-2',
    );

    expect(screen.getByText('#Tag 1')).toBeInTheDocument();
    expect(screen.getByText('#Tag 2')).toBeInTheDocument();
  });

  it('renders a span when the `type` is projects', () => {
    render(<Tags tags={tags} type="projects" />);

    expect(screen.getByText('#Tag 1')).toBeInTheDocument();
    expect(screen.getByText('#Tag 2')).toBeInTheDocument();

    expect(screen.getByText('#Tag 1')).not.toHaveAttribute('href');
    expect(screen.getByText('#Tag 2')).not.toHaveAttribute('href');
  });
});
