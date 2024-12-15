import { posts } from '@frontend/test/__mocks__/post';
import render from '@frontend/test/render';
import { fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  ReadonlyURLSearchParams,
  useRouter,
  useSearchParams,
} from 'next/navigation';
import PostsClient from './page.client';

jest.mock('next/navigation');

const mockUseSearchParams = jest.mocked(useSearchParams);
const mockUseRouter = jest.mocked(useRouter);

describe('PostsClient', () => {
  test('renders posts', async () => {
    mockUseSearchParams.mockReturnValue(new ReadonlyURLSearchParams('/blog'));

    render(<PostsClient posts={posts} />);

    expect(screen.getByText(posts[0].title)).toBeInTheDocument();
    expect(screen.getByText(posts[0].intro)).toBeInTheDocument();

    expect(screen.getByText(posts[1].title)).toBeInTheDocument();
    expect(screen.getByText(posts[1].intro)).toBeInTheDocument();

    expect(screen.getByText(posts[2].title)).toBeInTheDocument();
    expect(screen.getByText(posts[2].intro)).toBeInTheDocument();
  });

  test('typing in input adds to query param and filters posts', async () => {
    const push = jest.fn();

    // @ts-expect-error - we don't need to mock all the properties but TS isn't happy about that
    mockUseRouter.mockReturnValue({ push });

    mockUseSearchParams.mockReturnValue(new ReadonlyURLSearchParams('/blog'));

    render(<PostsClient posts={posts} />);

    expect(screen.getByText(posts[0].title)).toBeInTheDocument();
    expect(screen.getByText(posts[0].intro)).toBeInTheDocument();

    expect(screen.getByText(posts[1].title)).toBeInTheDocument();
    expect(screen.getByText(posts[1].intro)).toBeInTheDocument();

    expect(screen.getByText(posts[2].title)).toBeInTheDocument();
    expect(screen.getByText(posts[2].intro)).toBeInTheDocument();

    await userEvent.type(screen.getByRole('textbox'), 'vault');

    // vault post
    expect(screen.queryByText(posts[2].title)).toBeInTheDocument();
    expect(screen.queryByText(posts[2].intro)).toBeInTheDocument();

    // rest of posts
    expect(screen.queryByText(posts[0].title)).not.toBeInTheDocument();
    expect(screen.queryByText(posts[0].intro)).not.toBeInTheDocument();

    expect(screen.queryByText(posts[1].title)).not.toBeInTheDocument();
    expect(screen.queryByText(posts[1].intro)).not.toBeInTheDocument();
  });

  test('ASC sort order updates query param and sorts posts', async () => {
    const push = jest.fn();
    mockUseSearchParams.mockReturnValue(new ReadonlyURLSearchParams('/blog'));

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    mockUseRouter.mockReturnValue({ push });

    render(<PostsClient posts={posts} />);

    const select = screen.getByTestId('sort-order');

    fireEvent.change(select, { target: { value: 'asc' } });
    expect(push).toHaveBeenCalledWith('undefined?%2Fblog=&order=asc');

    const headings = screen.getAllByTestId(/^year-heading-/);

    const headingText = headings.map(heading => heading.textContent);

    expect(headingText).toEqual(['2020', '2021', '2022', '2023', '2024']);

    const postHeadings = screen.getAllByTestId(/^post-title/);

    const postHeadingsText = postHeadings.map(heading => heading.textContent);

    expect(postHeadingsText).toEqual([
      'First blog post',
      'Forcing git merges',
      'Next.js SSR notes',
      'Full stack deploy with dokku',
      'Extending multiple classes in TypegraphQL',
      'How to rename local & remote git branches',
      'Preventing fouc with Chakra UI',
      'Set default node version with nvm',
      'Launching multiple Iterm2 windows with one script',
      'Getting started with Playwright UI testing',
      'Conventional commits, a better way to commit',
      'What Next.js 13 means for end-users',
      'How to build a custom Prisma generator',
      'How to use the Spotify API with Next.js',
      'TypeScript - why to use unknown instead of any',
      '2023 in review and 2024 goals',
      'Getting started with aws-vault',
      'How to connect a custom domain to AWS API gateway',
      'Code linters and formatters',
    ]);
  });

  test('DESC sort order updates query param and sorts posts', async () => {
    const push = jest.fn();
    mockUseSearchParams.mockReturnValue(new ReadonlyURLSearchParams('/blog'));

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    mockUseRouter.mockReturnValue({ push });

    render(<PostsClient posts={posts} />);

    const select = screen.getByTestId('sort-order');
    fireEvent.change(select, { target: { value: 'desc' } });
    expect(push).toHaveBeenCalledWith('undefined?%2Fblog=&order=desc');

    const headings = screen.getAllByTestId(/^year-heading-/);
    const headingText = headings.map(heading => heading.textContent);

    expect(headingText).toEqual(['2024', '2023', '2022', '2021', '2020']);

    const postHeadings = screen.getAllByTestId(/^post-title/);
    const postHeadingsText = postHeadings.map(heading => heading.textContent);

    expect(postHeadingsText).toEqual([
      'Code linters and formatters',
      'How to connect a custom domain to AWS API gateway',
      'Getting started with aws-vault',
      '2023 in review and 2024 goals',
      'How to use the Spotify API with Next.js',
      'TypeScript - why to use unknown instead of any',
      'How to build a custom Prisma generator',
      'What Next.js 13 means for end-users',
      'Conventional commits, a better way to commit',
      'Getting started with Playwright UI testing',
      'Launching multiple Iterm2 windows with one script',
      'Set default node version with nvm',
      'Preventing fouc with Chakra UI',
      'How to rename local & remote git branches',
      'Extending multiple classes in TypegraphQL',
      'Full stack deploy with dokku',
      'Next.js SSR notes',
      'Forcing git merges',
      'First blog post',
    ]);
  });
});
