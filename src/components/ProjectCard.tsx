import {
  Box, Text, Heading, Stack, Tag,
} from '@chakra-ui/react';
import { ProjectPost } from '@src/types';
import Link from 'next/link';
import React from 'react';

const ProjectCard = ({
  title, summary, slug, tags,
}: ProjectPost) => {
  return (
    <>
      <Link href={`/projects/${slug}`}>
        <a>
          <Box
            maxW="md"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            mb={4}
            minW="md"
            _hover={{ color: '#2EC0F9' }}
          >
            <Box m="5" as="div">
              <Heading m="5" mb="0" as="h4" size="md">
                {title && title}
              </Heading>
              <Text m="5" mt="0">
                {summary && summary}
              </Text>
              <Stack direction="row" spacing={3}>
                {tags.map((tag) => (
                  <Tag key={tag}>
                    #
                    {tag}
                  </Tag>
                ))}
              </Stack>
            </Box>
          </Box>
        </a>
      </Link>
    </>
  );
};
export default ProjectCard;
