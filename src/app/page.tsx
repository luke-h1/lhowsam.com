import Box from '@frontend/components/Box';
import Heading from '@frontend/components/Heading';
import Intro from '@frontend/components/Intro';
import * as List from '@frontend/components/List';
import Page from '@frontend/components/Page';
import PostItem from '@frontend/components/PostItem';
import Spacer from '@frontend/components/Spacer';
import Text from '@frontend/components/Text';
import postService from '@frontend/services/postService';
import workService from '@frontend/services/workService';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';

const WorkItem = dynamic(() => import('@frontend/components/WorkItem'));

export const revalidate = 1200;

export const metadata: Metadata = {
  title: 'Home | lhowsam.com',
};

export default async function HomePage() {
  const [posts, works] = await Promise.all([
    postService.getRecentPosts(),
    workService.getWorks(),
  ]);

  return (
    <Page>
      <Intro />
      <Spacer height="xxxl" />
      <Box as="section">
        <Heading as="h3" fontSize="xl">
          Recent Posts
        </Heading>
        <Text fontSize="md" color="foregroundNeutral">
          Recent blog posts I've written
        </Text>

        {posts &&
          posts.map(post => <PostItem post={post} key={`${post._id}`} />)}
      </Box>
      <Spacer height="xxxl" />
      <Heading as="h3" fontSize="xl">
        Work Projects
      </Heading>
      <Text fontSize="md" color="foregroundNeutral">
        Projects I've contributed to at work
      </Text>
      <Box as="section">
        <List.Container>
          {works &&
            works.map(work => (
              <List.Item key={work._id}>
                <WorkItem work={work} key={work._id} />
              </List.Item>
            ))}
        </List.Container>
      </Box>
    </Page>
  );
}
