'use client';

import Box from '@frontend/components/Box';
import Heading from '@frontend/components/Heading';
import Input from '@frontend/components/Input';
import PostItem from '@frontend/components/PostItem';
import Spacer from '@frontend/components/Spacer';
import { Post } from '@frontend/types/sanity';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { ChangeEvent, useCallback, useState } from 'react';

interface Props {
  posts: Post[];
}

export default function PostsClient({ posts }: Props) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [query, setQuery] = useState({
    title: searchParams.get('title') || '',
  });

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value) {
        params.set(name, value);
      } else {
        params.delete(name);
      }

      return params.toString();
    },
    [searchParams],
  );

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setQuery(prevState => ({
      ...prevState,
      [name]: value,
    }));

    const queryString = createQueryString(name, value);

    router.push(`${pathname}?${queryString}`);
  };

  const filteredPosts = posts
    .filter(post => {
      return post.title.toLowerCase().includes(query.title.toLowerCase());
    })
    .sort((a, b) => {
      if (a.publishedAt < b.publishedAt) {
        return 1;
      }

      if (a.publishedAt > b.publishedAt) {
        return -1;
      }

      return 0;
    });

  const postsByYear: Record<string, Post[]> = {};

  filteredPosts.forEach(post => {
    const year = new Date(post.publishedAt).getFullYear();

    if (!postsByYear[year]) {
      postsByYear[year] = [];
    }

    postsByYear[year].push(post);
  });

  const sortedYears = Object.keys(postsByYear).sort(
    (a, b) => Number(b) - Number(a),
  );

  return (
    <>
      <Box>
        <Input
          onChange={handleInputChange}
          placeholder="Search"
          value={query.title}
          type="text"
          id="title"
          name="title"
        />
      </Box>
      <Spacer height="xxxl" />

      <Box as="section">
        {sortedYears.map(year => (
          <Box key={year} marginBottom="xxxl">
            <Heading fontSize="xl" as="h2" color="foregroundNeutral">
              {year}
            </Heading>
            <Spacer height="xl" />
            {postsByYear[year].map(post => (
              <PostItem post={post} key={post._id} />
            ))}
          </Box>
        ))}
      </Box>
    </>
  );
}
