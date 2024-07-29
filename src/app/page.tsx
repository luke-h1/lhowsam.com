import Box from '@frontend/components/Box';
import { Heading } from '@frontend/components/Heading';
import Hero from '@frontend/components/Hero';
import { List } from '@frontend/components/List';
import Page from '@frontend/components/Page';
import PostItem from '@frontend/components/PostItem';
import ProjectItem from '@frontend/components/ProjectItem';
import siteConfig from '@frontend/config/site';
import postService from '@frontend/services/postService';
import projectService from '@frontend/services/projectService';
import { Metadata } from 'next';

export const revalidate = siteConfig.defaultRevalidate;

export const metadata: Metadata = {
  title: 'Home | lhowsam.com',
};

const HomePage = async () => {
  const heading = 'Luke // Software Engineer';
  const description =
    'Software Engineer based in the UK who is interested in React.js, Next.js, Typescript, Python and DevOps';

  const [posts, projects] = await Promise.all([
    postService.getRecentPosts(),
    projectService.getRecentProjects(),
  ]);

  return (
    <Page>
      <Box as="section">
        <Box marginX="auto" maxWidth="container">
          <Hero heading={heading} description={description} />
          {/* <Box as="header" textAlign="center" marginBottom="lg">
            <Heading>Projects and companies I've worked on/at</Heading>
          </Box> */}
          {/* <Marquee>
            <Companies />
          </Marquee> */}
        </Box>
      </Box>
      <Box as="section" paddingX="sm" marginY="sm" maxWidth="container">
        <Heading fontSize="lg">Recent Posts</Heading>
        <List marginX="lg" maxWidth="container" marginY="lg">
          {posts &&
            posts.map(post => (
              <List.Item key={`${post._id}-${post.title}`}>
                <PostItem post={post} key={`${post._id}-${post.title}`} />
              </List.Item>
            ))}
        </List>
      </Box>
      <Box
        as="section"
        paddingX="md"
        marginY="xxl"
        marginX="auto"
        // maxWidth={{ lg: 'container', md: 'container', sm: 'text' }}
        style={{
          margin: '0 auto',
        }}
      >
        <Heading fontSize="lg">Highlighted Projects</Heading>
        <List marginX="lg" maxWidth="container" marginY="lg">
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
