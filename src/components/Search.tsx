import React, { useEffect } from 'react';
import Fuse from 'fuse.js';

import { Stack, Input } from '@chakra-ui/react';

import { BlogPost } from '@src/types';

interface SearchProps {
  blogs: BlogPost[];
  // eslint-disable-next-line no-unused-vars
  handleFilter: (arg0: any) => void;
}

const fuseOptions = {
  threshold: 0.35,
  location: 0,
  distance: 100,
  minMatchCharLength: 1,
  shouldSort: true,
  includeScore: true,
  useExtendedSearch: true,
  keys: ['title', 'tags'],
};

export const Search: React.FC<SearchProps> = ({ blogs, handleFilter }) => {
  const [searchValue, setSearchValue] = React.useState('');
  const [searchTags] = React.useState([]);
  const fuse = new Fuse(blogs, fuseOptions);
  useEffect(() => {
    if (searchValue === '' && searchTags.length === 0) {
      handleFilter(blogs);
    } else {
      // Allow for a search for tag
      const formattedTags = [...searchTags.map((item) => ({ tags: item }))];
      const formattedTitle = searchValue.length ? [{ title: searchValue }] : [];
      const queries = {
        $or: [
          { tags: searchValue },
          { title: searchValue },
          {
            $and: [...formattedTags, ...formattedTitle],
          },
        ],
      };
      const results = fuse.search(queries).map((result) => result.item);
      handleFilter(results);
    }
  }, [searchValue, searchTags]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    setSearchValue(value);
  };

  return (
    <Stack
      direction="column"
      w={['100%', '75%', '50%']}
      align="center"
      spacing={[6, 8, 10]}
    >
      <Input value={searchValue} onChange={onChange} placeholder="filter blog posts" />
    </Stack>
  );
};
