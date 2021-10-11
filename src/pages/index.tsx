import React from 'react';
import { NextSeo } from 'next-seo';
import { GetServerSideProps } from 'next';
import SEO from '@src/components/SEO';
import Hero from '@src/components/Hero';
import { gql } from 'graphql-request';
import { Client } from '@src/utils/Client';
import BlogPost from '@src/components/BlogPost';
import { Box, Heading, SimpleGrid } from '@chakra-ui/react';
import ProjectCard from '@src/components/ProjectCard';
import { Project } from '@src/types/project';
import { Post } from '../types/post';

const Index = ({ posts, projects }: { posts: Post[]; projects: Project[] }) => {
  return (
    <>
      <NextSeo
        title="Home"
        canonical="https://lhowsam.com/"
        openGraph={{
          url: 'https://lhowsam.com',
          title: 'Home',
        }}
      />
      <SEO
        description="Home page"
        title="Home"
        keywords={['Projects, Blog posts, About']}
        url="https://lhowsam.com"
      />
      <Hero />
      <Heading mb={4}>Recent Blog Posts 📝</Heading>
      {posts && posts.map((post) => <BlogPost post={post} key={post.id} />)}
      <Box as="section" mt={10} mb={20}>
        <Heading mb={4}>Highlighted Projects 👨‍💻</Heading>
        <SimpleGrid minChildWidth="300px" spacing="20px">
          {projects
            && projects.map((project) => (
              <ProjectCard project={project} key={project.id} />
            ))}
        </SimpleGrid>
      </Box>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const blogQuery = gql`
    query Blogs {
      blogs(orderBy: id_DESC, first: 3) {
        id
        slug
        title
        intro
        date
      }
    }
  `;
  const projectQuery = gql`
    query Projects {
      projects(orderBy: id_DESC, first: 3) {
        id
        title
        slug
        intro
        tech
      }
    }
  `;

  const blogData = await Client.request(blogQuery);
  const projectData = await Client.request(projectQuery);
  return {
    props: { posts: blogData.blogs, projects: projectData.projects },
  };
};

export default Index;
