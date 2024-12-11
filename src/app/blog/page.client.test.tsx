import { posts } from '@frontend/test/__mocks__/post';
import render from '@frontend/test/render';
import { screen } from '@testing-library/react';
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
});
