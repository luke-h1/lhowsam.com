import Box from '@frontend/components/Box/Box';
import { Heading } from '@frontend/components/Heading/Heading';
import HighlightImage from '@frontend/components/HighlightImage/HighlightImage';
import { List } from '@frontend/components/List/List';
import Page from '@frontend/components/Page';
import PostItem from '@frontend/components/PostItem/PostItem';
import { Spacer } from '@frontend/components/Spacer/Spacer';
import siteConfig from '@frontend/config/site';
import postService from '@frontend/services/postService';
import projectService from '@frontend/services/projectService';
import { Metadata } from 'next';

export const revalidate = siteConfig.defaultRevalidate;

export const metadata: Metadata = {
  title: 'Home | lhowsam.com',
};

const fetchPostsAndProjects = async () => {
  'use server';

  const [posts, projects] = await Promise.all([
    postService.getRecentPosts(),
    projectService.getRecentProjects(),
  ]);

  return { posts, projects };
};

const HomePage = async () => {
  const description =
    'Software Engineer based in the UK who is interested in React.js, Next.js, Typescript, Python and DevOps';

  const { posts, projects } = await fetchPostsAndProjects();

  return (
    <Page>
      <Box as="section" paddingX="md" marginY="xxl">
        <Box marginX="auto" maxWidth="container">
          <HighlightImage
            heading="Luke // Software Engineer"
            description={description}
          />
          <Spacer height="lg" />
          {/* <Box as="header" textAlign="center" marginBottom="lg">
            <Heading>Projects and companies I've worked on/at</Heading>
          </Box> */}
          {/* <Marquee>
            <Companies />
          </Marquee> */}
        </Box>
      </Box>
      <Box as="section" paddingX="md" marginY="xxl" maxWidth="container">
        <Heading fontSize="lg">Recent posts</Heading>
        <List marginX="lg" maxWidth="container" marginY="lg">
          {posts &&
            posts.map(post => (
              <List.Item key={`${post._id}-${post.title}`}>
                <PostItem post={post} key={`${post._id}-${post.title}`} />
              </List.Item>
            ))}
        </List>
      </Box>
    </Page>
  );
};

export default HomePage;
