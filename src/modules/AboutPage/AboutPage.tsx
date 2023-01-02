import ButtonGroup from '@frontend/components/ButtonGroup';
import Heading from '@frontend/components/Heading';
import Page from '@frontend/components/Page';
import Skills from '@frontend/components/Skills';
import { NextSeo } from 'next-seo';
import Image from 'next/legacy/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Balancer from 'react-wrap-balancer';
import styles from './AboutPage.module.scss';

const AboutPage = () => {
  const router = useRouter();

  return (
    <>
      <NextSeo
        title="About"
        canonical={`https://lhowsam.com${router.asPath}`}
        description="About"
        openGraph={{
          defaultImageWidth: 1200,
          defaultImageHeight: 630,
          url: `https://lhowsam.com${router.asPath}`,
          title: `About | lhowsam.com`,
        }}
      />
      <Page>
        <Heading as="h1">About</Heading>
        <div className={styles.doubleContent}>
          <div className={styles.sideImage}>
            <div className={styles.containerImage}>
              <Image
                src="/images/luke.jpeg"
                blurDataURL="/images/luke.jpeg"
                alt="Luke Howsam"
                layout="fixed"
                placeholder="blur"
                priority
                quality={100}
                width={300}
                height={340}
              />
            </div>
          </div>
          <div className={styles.sideContent}>
            <h2>
              <Balancer>
                Hey 👋, I'm Luke. I'm a Software Engineer currently based in
                Sheffield, UK
              </Balancer>
            </h2>
            <hr />
            <p>
              Right now, I'm working as a Software Engineer. I'm comfortable
              with both frontend/backend (React, Node, Next.js, Python, Django
              etc.) &amp; devops tech stacks (Azure, AWS, digitalocean, Ansible
              etc.). I'm always keen to keep up with industry trends and new
              technologies.
            </p>
            <p>In my spare time I love to travel, read, and code</p>
            <br />
            <ButtonGroup>
              <Link href="/static/cv-latest.pdf" className="button">
                Resume
              </Link>
              <a href="mailto:luke.howsam@yahoo.com" className="button">
                Get in touch
              </a>
            </ButtonGroup>
            <h2 className="title">Skills:</h2>
            <Skills />
          </div>
        </div>
      </Page>
    </>
  );
};

export default AboutPage;
