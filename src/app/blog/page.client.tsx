'use client';

import Box from '@frontend/components/Box';
import Heading from '@frontend/components/Heading';
import Input from '@frontend/components/Input';
import PostItem from '@frontend/components/PostItem';
import Select from '@frontend/components/Select';
import Spacer from '@frontend/components/Spacer';
import { Post } from '@frontend/types/sanity';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { ChangeEvent, useCallback, useState } from 'react';

interface Props {
  posts: Post[];
}

type SortOrder = 'asc' | 'desc';

export default function PostsClient({ posts }: Props) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [query, setQuery] = useState({
    title: searchParams.get('title') || '',
  });
  const [sortOrder, setSortOrder] = useState<SortOrder>(
    (searchParams.get('order') as SortOrder) || 'desc',
  );

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

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSortOrder(e.target.value as SortOrder);
    const queryString = createQueryString('order', e.target.value);
    router.push(`${pathname}?${queryString}`);
  };

  const filteredPosts = posts
    .filter(post => {
      return post.title.toLowerCase().includes(query.title.toLowerCase());
    })
    .sort((a, b) => {
      if (sortOrder === 'asc') {
        return (
          new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime()
        );
      }
      return (
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      );
    });

  const postsByYear: Record<string, Post[]> = {};

  filteredPosts.forEach(post => {
    const year = new Date(post.publishedAt).getFullYear();

    if (!postsByYear[year]) {
      postsByYear[year] = [];
    }

    postsByYear[year].push(post);
  });

  const sortedYears = Object.keys(postsByYear).sort((a, b) => {
    if (sortOrder === 'asc') {
      return Number(a) - Number(b);
    }
    return Number(b) - Number(a);
  });

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
          label="Search"
        />
      </Box>
      <Box>
        <Select
          data-testid="sort-order"
          label="Sort Order"
          onChange={handleSelectChange}
          options={[
            {
              label: 'Descending',
              value: 'desc',
            },
            {
              label: 'Ascending',
              value: 'asc',
            },
          ]}
        />
      </Box>
      <Spacer height="xxxl" />

      <Box as="section">
        {sortedYears.map(year => (
          <Box key={year} marginBottom="xxxl">
            <Heading
              fontSize="xl"
              as="h2"
              color="foregroundNeutral"
              testId={`year-heading-${year}`}
            >
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
