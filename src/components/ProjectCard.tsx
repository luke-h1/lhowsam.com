import { Box, Heading, Tag } from '@chakra-ui/react';
import { ProjectPost } from '@src/types/md';
import Link from 'next/link';
import React from 'react';

const ProjectCard = ({
  title, summary, slug, tags,
}: ProjectPost) => {
  return (
    <Link href={`/projects/${slug}`}>
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
          <Box as="div" m="5" mt="0">
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
export default ProjectCard;
