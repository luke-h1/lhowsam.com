import Page from '@src/components/Page';
import Photo from '@src/components/Photo';
import SkillItem from '@src/components/SkillItem';
import classnames from 'classnames';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import { BiTestTube } from 'react-icons/bi';
import {
  SiDocker,
  SiGit,
  SiJavascript,
  SiAtlassian,
  SiPython,
  SiNextdotjs as SiNextDotJs,
  SiNodedotjs as SiNodeDotJs,
  SiReact,
  SiGraphql,
  SiCss3,
  SiStyledcomponents as SiStyledComponents,
  SiTypescript,
} from 'react-icons/si';
import styles from './about.module.css';

const AboutPage = () => {
  const router = useRouter();
  return (
    <Page className={classnames('container', styles.pageContainer)}>
      <NextSeo
        title="About"
        canonical={`https://lhowsam.com${router.asPath}`}
        description="About me"
        openGraph={{
          defaultImageWidth: 1200,
          defaultImageHeight: 630,
          url: `https://lhowsam.com${router.asPath}`,
          title: `About | lhowsam.com`,
        }}
      />
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
          projects that are scalable, performant & user friendly.
        </p>
        <h2>Skills</h2>
        <ul className={styles.skillGrid} id="skills-grid">
          <SkillItem icon={SiJavascript} text="Javascript" />
          <SkillItem icon={SiTypescript} text="TypeScript" />
          <SkillItem icon={SiReact} text="React.js" />
          <SkillItem icon={SiNextDotJs} text="Next.js" />
          <SkillItem icon={SiNodeDotJs} text="Node.js" />
          <SkillItem icon={SiGraphql} text="GraphQL" />
          <SkillItem icon={SiPython} text="Python" />
          <SkillItem icon={SiCss3} text="CSS, SCSS" />
          <SkillItem icon={SiStyledComponents} text="styled-components" />
          <SkillItem icon={BiTestTube} text="Automated & manual testing" />
          <SkillItem icon={SiDocker} text="Docker" />
          <SkillItem icon={SiGit} text="Git, Github, Gitlab" />
          <SkillItem icon={SiAtlassian} text="Jira, Trello, confluence etc." />
        </ul>
        <hr />
        <h3>Contact</h3>
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
}
export default AboutPage;
