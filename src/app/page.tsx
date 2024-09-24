import Box from '@frontend/components/Box';
import { Heading } from '@frontend/components/Heading';
import Intro from '@frontend/components/Intro/Intro';
import { List } from '@frontend/components/List';
import Page from '@frontend/components/Page';
import PostItem from '@frontend/components/PostItem';
import { Spacer } from '@frontend/components/Spacer';
import siteConfig from '@frontend/config/site';
import postService from '@frontend/services/postService';
import projectService from '@frontend/services/projectService';
import { nrLogger } from '@frontend/utils/nrLogger';
// import { nrLogger } from '@frontend/utils/nrLogger';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';

export const revalidate = siteConfig.defaultRevalidate;

export const metadata: Metadata = {
  title: 'Home | lhowsam.com',
};

const ProjectItem = dynamic(() => import('@frontend/components/ProjectItem'));

const fetchPostsAndProjects = async () => {
  'use server';

  const [posts, projects] = await Promise.all([
    postService.getRecentPosts(),
    projectService.getRecentProjects(),
  ]);

  return { posts, projects };
};

const HomePage = async () => {
  const { posts, projects } = await fetchPostsAndProjects();

  nrLogger.log({
    homePage: 'loaded',
  });

  return (
    <Page>
      <Box as="section">
        <Box marginX="auto">
          <Intro />
          <Spacer height="xl" />
        </Box>
      </Box>
      <Box as="section" paddingX="sm" marginY="lg" marginBottom="xxxl">
        <Heading fontSize="lg" color="foregroundNeutral">
          Recent Posts
        </Heading>
        <List marginX="xs">
          {posts &&
            posts.map(post => (
              <List.Item key={`${post._id}-${post.title}`}>
                <PostItem post={post} key={`${post._id}-${post.title}`} />
              </List.Item>
            ))}
        </List>
      </Box>
      <Spacer height="xxxxl" />
      <Box as="section" paddingX="md" marginY="xxl" marginX="auto">
        <Heading fontSize="lg" color="foregroundNeutral">
          Highlighted Projects
        </Heading>
        <List marginX="lg" marginY="lg">
          {projects &&
            projects.map(project => (
              <List.Item key={`${project._id}-${project.title}`}>
                <ProjectItem
                  project={project}
                  key={`${project._id}-${project.title}`}
                />
              </List.Item>
            ))}
        </List>
      </Box>
    </Page>
  );
};

export default HomePage;
