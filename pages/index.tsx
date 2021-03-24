import React from 'react';
import { NextSeo } from 'next-seo';
import { GetStaticProps } from 'next';
import { Intro } from '@components/Intro';
import { getAllFilesFrontmatter } from '@utils/mdx';
import { Text, Flex } from '@chakra-ui/react';
import { Skills } from '@data/skills';
import { BlogPost, ProjectPost } from '@src/types';
import ProjectCard from '@src/components/ProjectCard';
import BlogCard from '@src/components/BlogCard';

const Home = ({
  posts,
  projects,
}: {
  posts: BlogPost[];
  projects: ProjectPost[];
}) => {
  const filterPosts = posts.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date)),
  );

  return (
    <>
      <NextSeo
        title="Home | lhowsam.com"
        canonical="https://lhowsam.com/"
        openGraph={{
          url: 'https://lhowsam.com',
          title: 'Home | lhowsam.com',
        }}
      />
      <Intro />
      <Text as="h2" fontSize="40px" mt={1} mb={6} align="center">
        Projects
      </Text>
      <Flex direction="column" justify="center" align="center" mb={6}>
        {projects.map((frontMatter) => (
          <ProjectCard key={frontMatter.title} {...frontMatter} />
        ))}
      </Flex>
      <Text as="h2" fontSize="40px" mt={1} mb={6} align="center">
        Blog
      </Text>
      <Flex direction="column" justify="center" align="center" mb={6}>
        {filterPosts.map((frontMatter) => (
          <BlogCard key={frontMatter.title} {...frontMatter} />
        ))}
      </Flex>
      <div className="flex flex-col items-center justify-center">
        {/* <Text as="h2" fontSize="40px" mt={1} mb={6} align="center">
          Skills
        </Text> */}
        <div className="flex flex-col items-center max-w-md w-full">
          <p className="text-4xl mb-4">Skills</p>
          <p className="md:text-2xl mb-12 text-left sm:text-md text-left ml-2">
            I'm always expanding my technical skills by learning new tech. The
            following is a list of technology I'm interested in / what I'm
            actively working with !
          </p>
        </div>
        {/* map thru skills here */}
        <div className="max-w-xl w-full">
          <div className="flex flex-wrap  -mb-5 pb-8">
            {Skills && Skills.map((s) => (
              <div className="w-1/3 mb-4 h-12"><p className="mr-4 ml-4 text-left capitalize">{s.name}</p></div>

            ))}

          </div>
        </div>
      </div>
    </>
  );
};
export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllFilesFrontmatter('blog');
  const projects = await getAllFilesFrontmatter('project');
  return { props: { posts, projects } };
};
export default Home;
