import Page from '@frontend/components/Page/Page';
import PageHeader from '@frontend/components/PageHeader/PageHeader';
import Skills from '@frontend/components/Skills/Skills';
import Button from '@frontend/components/form/Button/Button';
import { Metadata } from 'next';
import Image from 'next/image';
import s from './About.module.scss';

export const metadata: Metadata = {
  title: 'About',
};

const AboutPage = async () => {
  return (
    <Page>
      <PageHeader
        title="About"
        description="Hey I'm Luke, a Software Engineer currently based in the UK."
      />
      <Image
        src="/images/luke-about.jpg"
        width={300}
        height={250}
        alt="Picture of me (luke howsam)"
        placeholder="blur"
        className={s.image}
        blurDataURL="/images/luke-about.jpg"
        priority
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
          , primarly working with React, TypeScript & testing technologies on
          large scale projects
        </p>
        <p>
          I'm comfortable with both frontend/backend technologies (React,
          Next.js, Python, GraphQL, Express.js, Node etc.) and I'm always keen
          to keep up with industry trends and new technologies.
        </p>
        <p>
          In my spare time I enjoy being outdoors, travelling, discovering new
          foods, finding new movies/tv-shows and reading
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
  );
};
export default AboutPage;