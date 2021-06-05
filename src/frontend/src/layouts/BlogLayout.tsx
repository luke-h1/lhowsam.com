import React, { FunctionComponent } from 'react';
import { NextSeo } from 'next-seo';
import { BlogPost } from '@src/types/md';
import { CustomHead } from '@src/components/CustomHead';
import Wrapper from '@src/components/Wrapper';
import { Flex, Text } from '@chakra-ui/react';

interface Iprops {
  children: React.ReactNode;
  frontMatter: BlogPost;
}

const BlogLayout: FunctionComponent<Iprops> = ({ children, frontMatter }) => {
  return (
    <>
      <CustomHead
        title={`Blog | ${frontMatter.title}`}
        description={`${frontMatter.summary}`}
        image={`${frontMatter.ogImage && frontMatter.ogImage}`}
      />
      <Wrapper>
        <NextSeo
          title={`${frontMatter.title}`}
          canonical={`https://lhowsam.com/blog/${frontMatter.slug}`}
          openGraph={{
            url: `https://lhowsam.com/blog/${frontMatter.slug}`,
            title: `${frontMatter.title}`,
          }}
        />
        <Flex as="div" direction="column" mx={0} mb={3}>
          <Text as="h1" fontSize="30px">
            {frontMatter.title}
          </Text>
          <Flex
            mt={2}
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Text
              as="p"
              mt={4}
              mb={1}
              lineHeight={10}
              fontSize="18px"
              maxW="70%"
            >
              {frontMatter.readingTime.text}
            </Text>
            <Text
              as="p"
              mt={4}
              mb={2}
              lineHeight={10}
              fontSize="18px"
              maxW="70%"
            >
              {frontMatter.date}
            </Text>
          </Flex>
        </Flex>
        <hr className="underline" />
        <Text as="p" mt={4} lineHeight={10} fontSize="18px" maxW="70%">
          {children}
        </Text>
      </Wrapper>
    </>
  );
};
export default BlogLayout;
