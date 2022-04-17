import Button from '@src/components/Button';
import Page from '@src/components/Page';
import PageHeader from '@src/components/PageHeader';
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
      <PageHeader
        title="Hey, I’m Luke 👋"
        description="Right now, I'm working as a software tester, doing automated + manual
      testing on web & mobile applications.          I'm comfortable with both frontend (React, Node, Next.js etc.) &
      devops tech stacks (Azure, AWS, digitalocean, Ansible etc.), and I'm
      always keen to keep up with industry trends and new technologies
"
      >
        <div className={styles.photoContainer}>
          <Image
            src="/images/luke.jpeg"
            className="corner-radius-8"
            width={250}
            blurDataURL="/images/luke.jpeg"
            placeholder="blur"
            height={305}
            priority
          />
        </div>
        <p className={styles.text}>
          {' '}
          In my spare time I love to travel, read, and code
        </p>
      </PageHeader>
      <Button href="/contact">Contact</Button>
    </Page>
  );
};
export default AboutPage;
