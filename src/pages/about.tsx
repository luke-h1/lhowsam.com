import Page from '@src/components/Page';
import Photo from '@src/components/Photo';
import classnames from 'classnames';
import { NextPage } from 'next';
import styles from './about.module.css';

const AboutPage: NextPage = () => {
  return (
    <Page
      className={classnames('container', styles.pageContainer)}
      title="About | lhowsam.com"
    >
      <article>
        <header>
          <h1>About</h1>
        </header>
        <div className={styles.photoContainer}>
          <Photo />
        </div>
        <p className={styles.intro}>
          Hey, I'm Luke{' '}
          <span aria-label="wave" aria-hidden="true">
            👋
          </span>{' '}
          I currently work as a software tester where I do a mixture of
          automated & manual testing in an agile setting. I like building
          projects that are scalable, performant & user friendly. My favorite
          technologies right now are: React.js, Typescript, GraphQL, Node.js,
          and PostgreSQL
        </p>
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
      </article>
    </Page>
  );
};
export default AboutPage;
