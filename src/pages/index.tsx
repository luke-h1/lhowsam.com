/* eslint-disable import/no-duplicates */
import Card from '@src/components/Card';
import Head from '@src/components/Head';
import Nav from '@src/components/Nav';
import Page from '@src/components/Page';
import blogService from '@src/services/blogService';
import projectService from '@src/services/projectService';
import { Post } from '@src/types/post';
import { Project } from '@src/types/project';
import classnames from 'classnames';
import format from 'date-fns/format';
import parseISO from 'date-fns/parseISO';
import { GetStaticProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from './index.module.css';

interface Props {
  projects: Project[];
  posts: Post[];
}

const Home = ({ projects, posts }: Props) => {
  return (
    <Page
      className='container'
      title='Home | lhowsam.com'
      description='Home page'
    >
      <div className={classnames('container', styles.hero)}>
        <h1 className={styles.greeting}>
          <span>Hey 👋 </span>
          <br />
          I'm Luke. I'm a software tester & developer
        </h1>
      </div>

      <div className="container">
        <h2>Recent blog posts</h2>
        {posts &&
          posts.map(post => (
            <article key={post.id}>
              <header>
                <Link href={`/blog/${post.slug}`}>
                  <a>
                    <div
                      className="fill-image bordered-image"
                      style={{ height: 200 }}
                    >
                      <Image
                        placeholder="blur"
                        blurDataURL={post.image.url}
                        alt={`cover image for ${post.title}`}
                        className="corner-radius-8"
                        src={post.image.url}
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                    <h3 className={styles.title}>{post.title}</h3>
                  </a>
                </Link>
                <small>{format(parseISO(post.date), 'MMMM d, yyyy')}</small>
              </header>
            </article>
          ))}
      </div>
      <div className={classnames('container', styles.projectContainer)}>
        <h2>Projects</h2>
        <div className={styles.cardContainer}>
          {projects &&
            projects.map(project => (
              <Card
                project={project}
                key={project.id}
              />
            ))}
        </div>
      </div>
      <h2>Contact</h2>
        <p>
          Get in touch via{" "}
          <a href="mailto:luke.howsam@yahoo.com" className={styles.contact}>email</a> or send a message on{" "}
          <a
            href="https://twitter.com/LukeH_1999"
            rel="noopener noreferrer"
            target="_blank"
            className={styles.contact}
          >
            Twitter
          </a>
          .
        </p>

    </Page>
  );
};
export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const projects = await projectService.getAllProjects();
  const posts = await blogService.getRecentPosts();

  return {
    props: {
      projects: projects.projects,
      posts: posts.posts,
    },
    revalidate: 30 * 60,
  };
};
