import Box from '@frontend/components/Box/Box';
import Heading from '@frontend/components/Heading/Heading';
import Link from '@frontend/components/Link/Link';
import { List } from '@frontend/components/List/List';
import Page from '@frontend/components/Page/Page';
import PageHeader from '@frontend/components/PageHeader/PageHeader';
import PostItem from '@frontend/components/PostItem/PostItem';
import ProjectTile from '@frontend/components/ProjectTile/ProjectTile';
import Spacer from '@frontend/components/Spacer/Spacer';
import siteConfig from '@frontend/config/site';
import postService from '@frontend/services/postService';
import projectService from '@frontend/services/projectService';
import { Metadata } from 'next';
import * as styles from './page.css';

export const revalidate = siteConfig.defaultRevalidate;

export const metadata: Metadata = {
  title: 'Home | lhowsam.com',
};

const HomePage = async () => {
  const [posts, projects] = await Promise.all([
    postService.getRecentPosts(),
    projectService.getRecentProjects(),
  ]);

  const description =
    "My name is Luke, I'm a Software Engineer based in the UK who is interested in React.js, Next.js, Typescript, Python and DevOps";

  return (
    <Page>
      <PageHeader
        heading="Luke // Software Developer"
        description={description}
      />
      <Box
        as="section"
        paddingX="md"
        marginY="xxl"
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        paddingTop="xl"
      >
        <Heading as="h2" color="gray" fontSize="xl">
          Recent Projects
        </Heading>
        <Link href="/projects" className={styles.homeLinkButton}>
          View all
        </Link>
      </Box>
      <List className={styles.homeUpdatesGrid}>
        {projects &&
          projects.map(project => (
            <ProjectTile project={project} key={project._id} />
          ))}
      </List>
      <Box
        as="section"
        paddingX="md"
        marginY="xxl"
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        paddingTop="xl"
      >
        {' '}
        <Heading as="h3" color="gray" fontSize="xl">
          Recent blog posts
        </Heading>
        <Link href="/blog" className={styles.homeLinkButton}>
          View all
        </Link>{' '}
      </Box>
      <Box as="section" maxWidth={{ md: 'text' }} marginX="auto">
        <header>
          <Heading fontSize="xl">Recent Posts</Heading>
        </header>
        <Spacer height="xxl" />
        <List>
          {posts &&
            posts.map(post => (
              <PostItem post={post} key={`${post._id}-${post.title}`} />
            ))}
        </List>
      </Box>
    </Page>
  );
};

export default HomePage;
