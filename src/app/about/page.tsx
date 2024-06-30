import Box from '@frontend/components/Box/Box';
import Page from '@frontend/components/Page';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
};

const AboutPage = async () => {
  return (
    <Page>
      <Box as="section" paddingX="md" marginY="xxl">
        <Box
          position="relative"
          style={{
            height: '280px',
            width: '100%',
          }}
        >
          img
        </Box>
      </Box>
    </Page>
  );
};
export default AboutPage;
