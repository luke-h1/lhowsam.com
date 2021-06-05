/* eslint-disable */
import { CustomHead } from '@src/components/CustomHead';
import Wrapper from '@src/components/Wrapper';
import { NextSeo } from 'next-seo';
import { Box, Text } from '@chakra-ui/react';
import { withUrqlClient } from 'next-urql';
import { createUrqlClient } from '@src/utils/createUrqlClient';
import { useAllPostsQuery } from '@src/generated/graphql';

const Home = () => {
  const [{ data, error, fetching }] = useAllPostsQuery();
  return (
    <>
      <CustomHead title="Home | lhowsam.com" description="Homepage" />
      <NextSeo
        title="Home"
        canonical="https://lhowsam.com/"
        openGraph={{
          url: 'https://lhowsam.com',
          title: 'Home',
        }}
      />
      <Wrapper>
        <Text fontSize="40px" fontWeight="bold" mb={4}>
          Hi, I'm Luke 👋
        </Text>
        <Text
          as="p"
          fontSize="18px"
          textAlign="left"
          data-testid="i-intro-1"
          maxW="70%"
          mb={2}
        >
          I have experience working in agile environments, testing features,
          various frontend languages, technologies & tooling.
        </Text>
        <Text
          as="p"
          fontSize="18px"
          textAlign="left"
          data-testid="i-intro-2"
          maxW="70%"
          mb={7}
        >
          At the moment I enjoy working with React, GraphQL, SQL, Cypress &
          Styled Components
        </Text>
        <Box as="div">
          <Text fontSize="30px" fontWeight="bold">
            Blog
          </Text>
          {data?.allPosts?.map((post) => (
            <Text as="h1">{post.title}</Text>
          ))}
        </Box>

        <Box as="div">
          <Text fontSize="30px" fontWeight="bold">
            Projects
          </Text>
        </Box>
      </Wrapper>{' '}
    </>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: false })(Home);
