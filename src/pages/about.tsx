import Button from '@src/components/Button/Button';
import ButtonGroup from '@src/components/ButtonGroup/ButtonGroup';
import Page from '@src/components/Page/Page';
import PageHeader from '@src/components/PageHeader/PageHeader';
import Skills from '@src/components/Skills/Skills';
import { NextSeo } from 'next-seo';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from './about.module.scss';

const AboutPage = () => {
  const router = useRouter();
  return (
    <Page>
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
      <PageHeader title="About">
        <div className={styles.text}>
          <Image
            src="/images/luke.jpeg"
            className="corner-radius-8"
            width={250}
            blurDataURL="/images/luke.jpeg"
            placeholder="blur"
            height={305}
            priority
          />{' '}
          <h1>
            Hey 👋, I'm Luke. I'm a Software Engineer currently based in
            Sheffield, UK
          </h1>
          <p>
            Right now, I'm working as a Software Engineer. I'm comfortable with
            both frontend (React, Node, GraphQL, Next.js etc.) & devops tech
            stacks (Azure, AWS, digitalocean, Ansible etc.), and I'm always keen
            to keep up with industry trends and new technologies
          </p>
          <p>In my spare time I love to travel, read, and code</p>
        </div>
        <ButtonGroup>
          <Button href="/contact">Contact</Button>
          <Button href="/static/resume.pdf">Resume</Button>
        </ButtonGroup>

        <div className={styles.skills}>
          <p>Current skills</p>
          <Skills />
        </div>
      </PageHeader>
    </Page>
  );
};
export default AboutPage;
