import Link from '@frontend/components/Link/Link';
import siteConfig from '@frontend/config/site';
import postService from '@frontend/services/postService';
import projectService from '@frontend/services/projectService';
import * as util from '@frontend/styles/util.css';
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

  return (
    <main className={util.page}>
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
      </div>
    </main>
  );
};

export default HomePage;
