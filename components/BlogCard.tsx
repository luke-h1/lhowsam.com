import { Box, Text, Heading, useColorMode } from '@chakra-ui/react';
import Link from 'next/link';
import { parseISO, format } from 'date-fns';

interface Iprops {
  title: string;
  summary: string;
  slug: string;
  date: string;
}

const BlogCard = ({ title, summary, slug, date }: Iprops) => {
  const { colorMode } = useColorMode();

  const blogCard = {
    light: '#000',
    dark: '#fff',
  };
  return (
    <>
      <Link href={`/blog/${slug}`}>
        <a>
          <Box
            color={blogCard[colorMode]}
            shadow="sm"
            rounded="md"
            data-testid="card"
            maxW="md"
            mt={4}
            borderWidth="1px"
            borderRadius="md"
            overflow="hidden"
            _hover={{ color: '#2EC0F9' }}
          >
            <Heading m="5" mb="2" as="h1" size="lg">
              {title}
            </Heading>
            <Text m="5" mt="2" mb="4">
              {summary}
            </Text>
            <Text m="5" mt="2" mb="4">
              {format(parseISO(date), 'MMMM dd, yyyy')}
            </Text>
          </Box>
        </a>
      </Link>
    </>
  );
};
export default BlogCard;
