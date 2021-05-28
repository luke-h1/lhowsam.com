import {
  Box, Heading, Tag, Text,
} from '@chakra-ui/react';
import { BlogPost, ProjectPost } from '@src/types/md';
import Link from 'next/link';
import React from 'react';

const Card = ({
  title,
  summary,
  slug,
  date,
  tags,
  type,
}: BlogPost | ProjectPost) => {
  return (
    <>
      <Link href={`/${type}/${slug}`}>
        <a>
          <Box
            color="black"
            shadow="sm"
            rounded="md"
            data-testid="card"
            maxW="md"
            mt={6}
            mb={8}
            borderWidth="1px"
            borderRadius="md"
            overflow="hidden"
          >
            <Heading m="5" mb="2" as="h1" size="lg">
              {title}
            </Heading>
            <Text m="5" mt="2" mb="4">
              {summary}
            </Text>
            <Text m="5" mt="2" mb="4">
              {date}
            </Text>
            {tags && tags.map((t) => (
              <Tag m={2}>
                #
                {t}
              </Tag>
            ))}
          </Box>
        </a>
      </Link>
    </>
  );
};

export default Card;
