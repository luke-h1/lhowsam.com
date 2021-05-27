import { Box, Heading, Tag } from '@chakra-ui/react';
import { BlogPost } from '@src/types/md';
import Link from 'next/link';
import React from 'react';

const BlogCard = ({
  title, summary, slug, tags, date,
}: BlogPost) => {
  return (
    <Link href={`/blog/${slug}`}>
      <Box
        maxW="md"
        borderWidth="1px"
        borderRadius="md"
        overflow="hidden"
        mt={7}
      >
        <Box m="5" as="div">
          <Heading m="5" mb="0" as="h4" size="md">
            {title}
          </Heading>
          <Box as="p" m="5" mt="0">
            {date}
          </Box>
          <Box as="p" m="5" mt="0">
            {summary}
          </Box>
          {tags
            && tags.map((t) => (
              <Tag m={2} as="p">
                #
                {' '}
                {t}
              </Tag>
            ))}
        </Box>
      </Box>
    </Link>
  );
};
export default BlogCard;
