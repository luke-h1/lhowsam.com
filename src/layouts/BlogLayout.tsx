import React, { FunctionComponent } from 'react';
import { parseISO, format } from 'date-fns';
import { NextSeo } from 'next-seo';
import ShareButtons from '@components/ShareButtons';
import { Container, Flex, Text } from '@chakra-ui/react';

interface Iprops {
  frontMatter: any;
  children: any;
}

const BlogLayout: FunctionComponent<Iprops> = ({ children, frontMatter }) => {
  return (
    <>
      <Container maxW="700px" mb={4}>
        <NextSeo
          title={`${frontMatter.title} | lhowsam.com`}
          canonical={`https://lhowsam.com/blog/${frontMatter.slug}`}
          openGraph={{
            url: `https://lhowsam.com/blog/${frontMatter.slug}`,
            title: `${frontMatter.title} | lhowsam.com`,
          }}
        />

        <Flex as="article" direction="column" justify="center" mb={5}>
          <Text as="h1" fontSize="40px">
            {frontMatter.title}
          </Text>
        </Flex>

        <Flex direction="column" justify="between" mt={2} mb={5}>
          <Text as="p" fontSize="20px" mt={2} mb={2} color="gray.500">
            {format(parseISO(frontMatter.date), 'MMMM dd, yyyy')}
          </Text>
        </Flex>
        <Text as="p" fontSize="20px" mt={2} mb={2} color="gray.500">
          {frontMatter.readingTime.text}
        </Text>
        <hr />
        <Text as="p" fontSize="20px" mt={2} mb={2} lineHeight="1.5">
          {children}
        </Text>
        <ShareButtons
          location={`https://lhowsam.com/blog/${frontMatter.slug}`}
        />
      </Container>
    </>
  );
};
export default BlogLayout;
