/* eslint-disable import/no-duplicates */
import Card from '@src/components/Card';
import Page from '@src/components/Page';
import blogService from '@src/services/blogService';
import imageService from '@src/services/imageService';
import projectService from '@src/services/projectService';
import classnames from 'classnames';
import format from 'date-fns/format';
import parseISO from 'date-fns/parseISO';
import { Blog, Project } from 'lhowsam-studio/types/schema';
import { GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { siteConfig } from '../config/site';
import styles from './index.module.css';

interface Props {
  projects: Project[];
  posts: Blog[];
}

const Home = ({ projects, posts }: Props) => {
  const router = useRouter();
  return (
    <Page className="container">
      <NextSeo
        title="Home"
        canonical={`https://lhowsam.com${router.asPath}`}
        description="Home"
        openGraph={{
          defaultImageWidth: 1200,
          defaultImageHeight: 630,
          url: `https://lhowsam.com${router.asPath}`,
          title: `Home | lhowsam.com`,
        }}
      />
      <div className={classnames('container', styles.hero)}>
        <h1 className={styles.greeting}>
          <span>Hey 👋 </span>
          <br />
          I'm Luke
        </h1>
      </div>
      <div className="container">
        <h2>Recent blog posts</h2>
        {posts &&
          posts.map(post => (
            <article key={post._id}>
              <header>
                <Link href={`/blog/${post.slug.current}`}>
                  <a>
                    <div
                      className="fill-image bordered-image"
                      style={{ height: 200 }}
                    >
                      <Image
                        placeholder="blur"
                        blurDataURL={imageService.urlFor(post.image.asset)}
                        alt={`cover image for ${post.title}`}
                        className="corner-radius-8"
                        src={imageService.urlFor(post.image.asset)}
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                    <h3 className={styles.title}>{post.title}</h3>
                  </a>
                </Link>
                <small>
                  {format(parseISO(post.publishedAt), 'MMMM d, yyyy')}
                </small>
              </header>
            </article>
          ))}
      </div>
      <div className={classnames('container', styles.projectContainer)}>
        <h2>Projects</h2>
        <div className={styles.cardContainer}>
          {projects &&
            projects.map(project => (
              <Card project={project} key={project._id} />
            ))}
        </div>
      </div>
      <h2>Contact</h2>
      Get in touch via{' '}
      <ul>
        <li>
          {' '}
          <a
            href="https://www.linkedin.com/in/lukehowsam"
            className={styles.contact}
          >
            Linkedin
          </a>{' '}
        </li>
        <li>
          <a href="mailto:luke.howsam@yahoo.com" className={styles.contact}>
            email
          </a>{' '}
        </li>

        <li>
          <a
            href="https://twitter.com/LukeH_1999"
            rel="noopener noreferrer"
            target="_blank"
            className={styles.contact}
          >
            Twitter
          </a>
        </li>
      </ul>
    </Page>
  );
}
export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const [posts, projects] = await Promise.all([
    blogService.getRecentPosts(),
    projectService.getAllProjects(),
  ]);

  return {
    props: {
      projects,
      posts,
    },
    revalidate: siteConfig.defaultRevalidate,
  };
};
