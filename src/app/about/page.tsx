import Hero from '@frontend/components/Hero/Hero';
import Page from '@frontend/components/Page';
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
    </Page>
  );
};
export default AboutPage;
