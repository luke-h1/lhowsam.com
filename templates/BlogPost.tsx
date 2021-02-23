import React, { FunctionComponent } from 'react';
import { parseISO, format } from 'date-fns';
import { NextSeo } from 'next-seo';
import ShareButtons from '@components/ShareButtons';
import { Container, Flex, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

interface Iprops {
  frontMatter: any;
  children: any;
}

const BlogPost: FunctionComponent<Iprops> = ({ children, frontMatter }) => {
  return (
    <>
      <Container mb={4}>
        <NextSeo
          title={`${frontMatter.title} | lhowsam.com`}
          canonical={`https://lhowsam.com/blog/${frontMatter.slug}`}
          openGraph={{
            url: `https://lhowsam.com/blog/${frontMatter.slug}`,
            title: `${frontMatter.title} | lhowsam.com`,
          }}
        />

        <Flex as="article" direction="column" justify="center" maxW="1000px" mx="auto" mb={5}>
          <Text as="h1" fontSize="40px">
            {frontMatter.title}
          </Text>
        </Flex>

        <Flex direction="column" justify="between" mt={2} mb={5}>
          <p className="text-sm text-gray-700 dark:text-gray-300 ml-2">
            {format(parseISO(frontMatter.date), 'MMMM dd, yyyy')}
          </p>
          <ShareButtons
            location={`https://lhowsam.com/blog/${frontMatter.slug}`}
          />
        </Flex>
        <Text as="p" fontSize="20px" mt={2} mb={2}>
          {' • '}
          {frontMatter.readingTime.text}
        </Text>
        <hr />
        <Text as="p" fontSize="20px" mt={2} mb={2} lineHeight='1.5'>
          {children}

        </Text>

      </Container>
    </>
  );
};
export default BlogPost;
