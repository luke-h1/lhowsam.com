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
            src="/images/luke-ab-1.png"
            width="200"
            height="200"
            alt=""
            placeholder="blur"
            blurDataURL="/images/luke-ab-1.png"
            className={styles.image}
          />
        </div>
        <div className={styles.textContainer}>
          <Text
            fontSize={{ xs: 'lg', md: 'xl' }}
            gradient
            fontFamily="mono"
            testId="AboutPage-intro"
          >
            Luke, Software Engineer
          </Text>
          <Spacer height="lg" />
          <Text color="foregroundNeutral" fontSize={{ xs: 'sm', md: 'md' }}>
            Hey I'm Luke 👋, I'm a SWE currently focused on React-Native, Cloud
            (AWS, Azure) and automation (Terraform etc.) along with a handful of
            other tech (Next.js, Python etc.)
          </Text>
          <Spacer height="lg" />
          <Text color="foregroundNeutral" fontSize={{ xs: 'sm', md: 'md' }}>
            I have experience across both frontend and backend development,
            working with technologies like React, Next.js, Python, GraphQL,
            Express.js, and Node.js. I'm always eager to explore new industry
            trends and emerging technologies.
          </Text>
          <Spacer height="lg" />
          <Text color="foregroundNeutral" fontSize={{ xs: 'sm', md: 'md' }}>
            Outside of work, I love traveling, music, building side projects,
            and diving into fiction books.
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
      <Spacer height="xxl" />
      <Link href="#experience">
        <Heading as="h3" fontSize="xl" color="highlight" underlined>
          Experience
        </Heading>
        <Spacer height="xxl" />
        {sortedCompanies.map(company => (
          <ExperienceItem company={company} key={company.id} />
        ))}
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
