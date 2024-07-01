import ExperienceItem from '@frontend/components/ExperienceItem/ExperienceItem';
import Hero from '@frontend/components/Hero/Hero';
import Page from '@frontend/components/Page';
import jobs from '@frontend/data/jobs';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
};

const AboutPage = async () => {
  return (
    <Page
      heading="About"
      description="Hey I'm Luke, a Software Engineer currently based in the UK."
    >
      <Hero />
      <ExperienceItem jobs={jobs} />
    </Page>
  );
};
export default AboutPage;
