import { Box, Text, Heading } from '@chakra-ui/react';
import Link from 'next/link';

interface Iprops {
  title: string;
  summary: string;
  slug: string;
}

const ProjectCard = ({ title, summary, slug }: Iprops) => {
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
            </Box>
          </Box>
        </a>
      </Link>
    </>
  );
};
export default ProjectCard;
