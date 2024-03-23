import Box from '@frontend/components/Box/Box';
import Heading from '@frontend/components/Heading/Heading';
import Link from '@frontend/components/Link/Link';
import { List } from '@frontend/components/List/List';
import Page from '@frontend/components/Page';
import PostCard from '@frontend/components/PostCard/PostCard';
import ProjectItem from '@frontend/components/ProjectItem/ProjectItem';
import Spacer from '@frontend/components/Spacer/Spacer';
import Text from '@frontend/components/Text/Text';
import siteConfig from '@frontend/config/site';
import postService from '@frontend/services/postService';
import projectService from '@frontend/services/projectService';
import { Metadata } from 'next';
import Balancer from 'react-wrap-balancer';

export const revalidate = siteConfig.defaultRevalidate;

export const metadata: Metadata = {
  title: 'Home | lhowsam.com',
};

const HomePage = async () => {
  const [posts, projects] = await Promise.all([
    postService.getRecentPosts(),
    projectService.getRecentProjects(),
  ]);

  return (
    <Page heading="Luke // Software Engineer">
      <Box
        maxWidth="text"
        style={{
          margin: '0 auto',
        }}
      >
        <Spacer height="md" />
        <Text
          fontSize={{ xs: 'lg', sm: 'xl' }}
          color="foregroundNeutral"
          style={{
            marginBottom: '2rem',
          }}
        >
          <Balancer ratio={0.25} data-testid="intro">
            Software Engineer based in the UK who is interested in React.js,
            Next.js, Typescript, Python and DevOps
          </Balancer>
        </Text>
        <Box as="section" maxWidth={{ md: 'text' }} marginX="auto">
          <Text>
            <Link href="/about" variant="highlight">
              More about me
            </Link>
          </Text>
        </Box>
        <Spacer height="xxxxl" />
        <Box as="section" maxWidth={{ md: 'text' }} marginX="auto">
          <header>
            <Heading fontSize="xl">Recent Projects</Heading>
          </header>
          <Spacer height="xxl" />
          <Box
          // display="flex"
          // flexDirection={{ xs: 'column', sm: 'row' }}
          // alignItems={{ sm: 'flex-start' }}
          // gap="xl"
          >
            {projects &&
              projects.map(project => (
                <ProjectItem project={project} key={project._id} />
              ))}
          </Box>
        </Box>
        <Spacer height="xxxxl" />

        <Box as="section" maxWidth={{ md: 'text' }} marginX="auto">
          <header>
            <Heading fontSize="xl">Recent Posts</Heading>
          </header>
          <Spacer height="xxl" />
          <List>
            {posts &&
              posts.map(post => (
                <PostCard post={post} key={`${post._id}-${post.title}`} />
              ))}
          </List>
        </Box>
      </Box>
    </Page>
  );
};

export default HomePage;
