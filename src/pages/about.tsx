import Page from '@frontend/components/Page/Page';
import PageHeader from '@frontend/components/PageHeader/PageHeader';
import Skills from '@frontend/components/Skills/Skills';
import Button from '@frontend/components/form/Button/Button';
import { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import s from './About.module.scss';

const AboutPage: NextPage = () => {
  const me = '/images/luke-about.jpg';
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
        <PageHeader
          title="About"
          description="Hey I'm Luke, a Software Engineer currently based in the UK."
        />
        <Image
          src={me}
          width={300}
          height={250}
          alt="Picture of me (luke howsam)"
          placeholder="blur"
          className={s.image}
          blurDataURL={me}
          priority
          loading="eager"
        />
        <div className={s.text}>
          <p>
            Right now I'm working at{' '}
            <a
              href="https://hiveit.co.uk"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hive IT
            </a>
            , primarly working with React, TypeScript & testing technologies.
          </p>
          <p>
            I'm comfortable with both frontend/backend technologies (React,
            Next.js, Python, GraphQL, Express.js, Node etc.) and I'm always keen
            to keep up with industry trends and new technologies.
          </p>
          <p>
            In my spare time I enjoy being outdoors, travelling, discovering new
            foods, & finding new movies/tv-shows and read
          </p>
        </div>
        <Button type="button" href="mailto:luke.howsam54@gmail.com">
          Get in touch
        </Button>
        <div style={{ marginTop: '1rem' }}>
          <Button type="button" href="/static/cv.pdf">
            Resume
          </Button>
        </div>
        <div className={s.skills}>
          <h3>Skills</h3>
          <Skills />
        </div>
      </Page>
    </>
  );
};
export default AboutPage;
