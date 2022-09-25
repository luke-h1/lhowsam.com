import Page from '@src/components/Page';
import Skills from '@src/components/Skills';
import Image from 'next/image';
// import Link from 'next/link';
import styles from './About.module.scss';

const AboutPage = () => {
  return (
    <Page title="About">
      <div className={styles.doubleContent}>
        <div className={styles.sideImage}>
          <div className={styles.containerImage}>
            <Image
              src="/images/luke.jpeg"
              blurDataURL="/images/luke.jpeg"
              alt="Luke Howsam"
              layout="fixed"
              placeholder="blur"
              quality={100}
              width={300}
              height={340}
              loading="eager"
            />
          </div>
        </div>
        <div className={styles.sideContent}>
          <h1>
            Hey 👋, I'm Luke. I'm a Software Engineer currently based in
            Sheffield, UK
          </h1>
          <br />
          <p>
            Right now, I'm working as a Software Engineer. I'm comfortable with
            both frontend (React, Node, GraphQL, Next.js etc.) &amp; devops tech
            stacks (Azure, AWS, digitalocean, Ansible etc.). I'm always keen to
            keep up with industry trends and new technologies.
          </p>
          <p>In my spare time I love to travel, read, and code</p>
          <br />
          {/* <Link href="/static/resume.pdf">
            <a className={styles.button}>Resume</a>
          </Link> */}
          {/* <h2 style={{ marginTop: '4rem' }}>Skills</h2> */}
          <h2 className="title">Skills:</h2>
          <Skills />
        </div>
      </div>
    </Page>
  );
};

export default AboutPage;
