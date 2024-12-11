import Box from '@frontend/components/Box';
import ExperienceItem from '@frontend/components/ExperienceItem';
import Heading from '@frontend/components/Heading';
import Page from '@frontend/components/Page';
import Skills from '@frontend/components/Skills';
import Spacer from '@frontend/components/Spacer';
import Text from '@frontend/components/Text';
import companies from '@frontend/config/jobs';
import { buttonStyles } from '@frontend/styles/button.css';
import { parseDate } from '@frontend/utils/date';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import * as styles from './about.css';

export const metadata: Metadata = {
  title: 'About',
};

// Sort companies by the most recent job's end date in descending order
const sortedCompanies = companies.sort((a, b) => {
  const aMostRecentJob = a.jobs.reduce((latest, job) => {
    const jobEndDate = job.endDate ? parseDate(job.endDate) : new Date();
    return jobEndDate > latest ? jobEndDate : latest;
  }, new Date(0));

  const bMostRecentJob = b.jobs.reduce((latest, job) => {
    const jobEndDate = job.endDate ? parseDate(job.endDate) : new Date();
    return jobEndDate > latest ? jobEndDate : latest;
  }, new Date(0));

  return bMostRecentJob.getTime() - aMostRecentJob.getTime();
});

export default async function AboutPage() {
  return (
    <Page>
      <header className={styles.header}>
        <div className={styles.imageContainer}>
          <Image
            src="/luke-1.png"
            width="200"
            height="200"
            alt=""
            className={styles.image}
            style={{
              maxWidth: '100%',
              height: 'auto',
            }}
          />
        </div>
        <div className={styles.textContainer}>
          <Text
            fontSize={{ xs: 'lg', md: 'xl' }}
            gradient
            fontFamily="mono"
            testId="AboutPage-intro"
          >
            Hey, I'm Luke. I'm a Software Engineer interested in DevOps, React,
            Python, TypeScript and AWS.
          </Text>
          <Spacer height="lg" />
          <Text color="foregroundNeutral" fontSize={{ xs: 'sm', md: 'md' }}>
            I'm comfortable with both frontend and backend technologies (React,
            Next.js, Python, GraphQL, Express.js, Node etc.) and I'm always keen
            to keep up with industry trends and new technologies.
          </Text>
          <Spacer height="lg" />

          <Text color="foregroundNeutral" fontSize={{ xs: 'sm', md: 'md' }}>
            In my spare time I enjoy being outdoors, travelling, discovering new
            foods, finding new movies/tv-shows and reading
          </Text>
          <Spacer height="lg" />
          <Link
            href="/static/cv.pdf"
            className={buttonStyles({ type: 'highContrast' })}
          >
            Read CV
          </Link>
        </div>
      </header>
      <Link href="#experience">
        <Box as="section">
          <Heading as="h3" fontSize="xl">
            Experience
          </Heading>
          <Spacer height="md" />
          {sortedCompanies.map(company => (
            <ExperienceItem company={company} key={company.id} />
          ))}
        </Box>
      </Link>
      <Spacer height="xxxxl" />
      <Box as="section">
        <Heading as="h3" fontSize="xl">
          Skills
        </Heading>
        <Skills />
      </Box>
    </Page>
  );
}
