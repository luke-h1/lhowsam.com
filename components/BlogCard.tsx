import { Box, Text, Heading } from '@chakra-ui/react';
import Link from 'next/link';

interface Iprops {
    title: string;
    summary: string;
    slug: string;
}

const BlogCard = ({ title, summary, slug }: Iprops) => {
  return (
    <>
      <Link href={`/blog/${slug}`}>
        <a>
          <Box
            color="black"
            shadow="sm"
            rounded="lg"
            data-testid="card"
            maxW="lg"
            mt={4}
          >
            <Heading m="5" mb="2" as="h1" size="lg">{title}</Heading>
            <Text m="5" mt="2" mb="4">{summary}</Text>
          </Box>
        </a>
      </Link>
    </>
  );
};
export default BlogCard;
