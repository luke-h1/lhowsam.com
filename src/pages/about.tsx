import Heading from '@frontend/components/Heading/Heading';
import Page from '@frontend/components/Page/Page';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

const AboutPage = () => {
  const router = useRouter();
  return (
    <Page>
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
      <Heading as="h1">About</Heading>
    </Page>
  );
};
export default AboutPage;
