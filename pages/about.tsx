import React from 'react';
import { NextSeo } from 'next-seo';
import Image from 'next/image';
import styled from '@emotion/styled';
import { NextPage } from 'next';
import {
  Flex, SimpleGrid, Box, Text,
} from '@chakra-ui/react';

const Title = styled.h1`
  text-align: center;
  margin-bottom: 4rem;
`;

const About: NextPage = () => {
  return (
    <>
      <NextSeo
        title="About | lhowsam.com"
        canonical="https://lhowsam.com/about"
        openGraph={{
          url: 'https://lhowsam.com/about',
          title: 'About | lhowsam.com',
        }}
      />
      <div>
        <Title>About</Title>
        <Flex direction="column" align="center" justify="center" m={4}>
          <SimpleGrid columns={2} spacingX="40px" spacingY="20px">
            <Box height="120px">
              <Text as="h1" fontSize="40px" align="left">
                Hey I'm Luke 👋
              </Text>
              <Text
                as="h3"
                fontSize="21px"
                data-testid="intro"
                align="left"
              >
                I'm passionate about solving technical problems and coming up with
                creative solutions.I enjoy working with the JAMstack, React, Node,
                testing technologies + practices & various dev-ops technologies
              </Text>
            </Box>
            <Box height="120px">
              <Image
                src="/static/images/luke.png"
                width={400}
                height={500}
                data-testid="photo"
              />
            </Box>
          </SimpleGrid>

        </Flex>
      </div>
    </>
  );
};
export default About;
