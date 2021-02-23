import { Box, Text, Heading } from '@chakra-ui/react';
import Link from 'next/link';
import { parseISO, format } from 'date-fns';

interface Iprops {
    title: string;
    summary: string;
    slug: string;
    date: string;
}

const BlogCard = ({
  title, summary, slug, date,
}: Iprops) => {
  return (
    <>
      <Link href={`/blog/${slug}`}>
        <a>
          <Box
            color="black"
            shadow="sm"
            rounded="md"
            data-testid="card"
            maxW="md"
            mt={4}
            borderWidth="1px"
            borderRadius="md"
            overflow="hidden"
          >
            <Heading m="5" mb="2" as="h1" size="lg">{title}</Heading>
            <Text m="5" mt="2" mb="4">{summary}</Text>
            <Text m="5" mt="2" mb="4">{format(parseISO(date), 'MMMM dd, yyyy')}</Text>

          </Box>
        </a>
      </Link>
    </>
  );
};
export default BlogCard;
