import React from 'react';
import { NextSeo } from 'next-seo';
import { getAllFilesFrontmatter } from '@src/utils/mdx';
import Card from '@src/components/Card';
import { ProjectPost } from '@src/types/md';
import { CustomHead } from '@src/components/CustomHead';
import { Box, Text } from '@chakra-ui/react';
import Wrapper from '@src/components/Wrapper';

const Index = ({ projects }: { projects: ProjectPost[] }) => {
  return (
    <>
      <CustomHead title="Projects | lhowsam.com" description="Projects" />
      <NextSeo
        title="Projects"
        canonical="https://lhowsam.com/projects"
        openGraph={{
          url: 'https://lhowsam.com/projects',
          title: 'Projects',
        }}
      />
      <Text fontSize="30px" fontWeight="bold">
        Projects
      </Text>
      <Wrapper>
        <Box as="div">
          {projects.map((frontMatter) => (
            <Card {...frontMatter} key={frontMatter.slug} />
          ))}
        </Box>
      </Wrapper>
    </>
  );
};
export async function getStaticProps() {
  const projects = await getAllFilesFrontmatter('project');
  return { props: { projects } };
}
export default Index;
