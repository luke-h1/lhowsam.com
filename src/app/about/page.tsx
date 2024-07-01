import Box from '@frontend/components/Box/Box';
import Hero from '@frontend/components/Hero/Hero';
import { Image } from '@frontend/components/Image/Image';
import Page from '@frontend/components/Page';
import { Spacer } from '@frontend/components/Spacer/Spacer';
import { Text } from '@frontend/components/Text/Text';
import { buttonStyles } from '@frontend/styles/button.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
};

const AboutPage = async () => {
  return (
    <Page>
      <Hero />
    </Page>
  );
};
export default AboutPage;
