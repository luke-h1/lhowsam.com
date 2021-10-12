import { motion } from 'framer-motion';
import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import ProjectCard from '@src/components/ProjectCard';
import { GetServerSideProps } from 'next';
import { gql } from 'graphql-request';
import { Client } from '@src/utils/Client';
import SEO from '@src/components/SEO';
import { NextSeo } from 'next-seo';
import { Project } from '../../types/project';

const ProjectPage = ({ projects }: { projects: Project[] }) => {
  return (
    <>
      <NextSeo
        title="Projects"
        canonical="https://lhowsam.com/projects"
        openGraph={{
          url: 'https://lhowsam.com/projects',
          title: 'Projects',
        }}
      />
      <SEO
        description="Projects page"
        title="Projects"
        keywords={['Projects, Typescript, React.js, Next.js']}
        url="https://lhowsam.com/projects"
      />
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <Box mt={10}>
          {' '}
          <Heading mb={4}>Projects</Heading>
          {projects
            && projects.map((project) => (
              <ProjectCard project={project} key={project.id} />
            ))}
        </Box>
      </motion.div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const query = gql`
    query Projects {
      projects(orderBy: id_DESC) {
        id
        title
        slug
        intro
        tech
        siteUrl
        githubUrl
      }
    }
  `;
  const data = await Client.request(query);
  return {
    props: { projects: data.projects },
  };
};

export default ProjectPage;
