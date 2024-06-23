import Link from '@frontend/components/Link/Link';
import Page from '@frontend/components/Page/Page';
import ProjectTile from '@frontend/components/ProjectTile/ProjectTile';
import siteConfig from '@frontend/config/site';
import postService from '@frontend/services/postService';
import projectService from '@frontend/services/projectService';
import * as util from '@frontend/styles/util.css';
import { Metadata } from 'next';
import * as styles from './page.css';
import Box from '@frontend/components/Box/Box';

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
    <Page>
      <div className={styles.homeColumn}>
        <h1 className={styles.homeGreetingTile}>Luke // Software Developer</h1>
        <span className={styles.tinyText}>
          My name is Luke, I'm a Software Engineer based in the UK who is
          interested in React.js, Next.js, Typescript, Python and DevOps
        </span>
        <div className={styles.homeSectionContainer}>
          <h2 className={styles.homeSectionTitle}>Recent Projects</h2>
          <Link href="/projects" className={styles.homeLinkButton}>
            View all
          </Link>
        </div>
        <ul className={styles.homeUpdatesGrid}>
          {projects &&
            projects.map(project => (
              <ProjectTile project={project} key={project._id} />
            ))}
        </ul>
        <div className={styles.homeSectionContainer}>
          <h3 className={styles.homeSectionTitle}>Recent blog posts</h3>
          <Link href="/blog" className={styles.homeLinkButton}>
            View all
          </Link>{' '}
        </div>
      </div>
    </Page>
  );
};

export default HomePage;
