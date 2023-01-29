import Box from '@frontend/components/Box/Box';
import Heading from '@frontend/components/Heading/Heading';
import Link from '@frontend/components/Link/Link';
import Spacer from '@frontend/components/Spacer/Spacer';
import Text from '@frontend/components/Text/Text';
import { theme } from '@frontend/styles/theme.css';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import { GitHub, Linkedin } from 'react-feather';
import Balancer from 'react-wrap-balancer';

const AboutPage = () => {
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
      <Box
        as="header"
        textAlign={{ md: 'center' }}
        maxWidth="container"
        marginX="auto"
      >
        <Heading fontSize={{ xs: 'xxl', sm: 'xxxl' }} as="h1">
          About
        </Heading>
        <Spacer height="md" />
        {/* <Box as="section" marginX="auto">
          <Image
            src="/images/luke.jpeg"
            alt="Luke Howsam"
            width={175}
            height={200}
            className={styles.image}
          />
        </Box> */}
        <Box as="section" maxWidth={{ md: 'text' }} marginX="auto">
          <Text
            fontSize={{ xs: 'lg', sm: 'xl' }}
            color="foregroundNeutral"
            style={{
              display: 'inline-flex',
              marginBottom: '1rem',
            }}
          >
            <Balancer ratio={0.25}>
              Hey 👋, I'm Luke. I'm a Software Engineer currently based in
              Sheffield, UK{' '}
            </Balancer>
          </Text>
          <Box as="div" style={{ marginBottom: '2rem' }}>
            <Link href="https://www.linkedin.com/in/lukehowsam">
              <Linkedin
                size={20}
                color={theme.color.foreground}
                style={{
                  marginRight: '1rem',
                }}
              />
            </Link>
            <Link href="https://github.com/luke-h1">
              <GitHub size={20} />
            </Link>
          </Box>
          <Text
            fontSize={{ xs: 'lg', sm: 'xl' }}
            color="foregroundNeutral"
            style={{
              maxWidth: 'text',
              textAlign: 'left',
            }}
          >
            Right now, I'm working as a Software Engineer. I'm comfortable with
            both frontend/backend (React, Node, Next.js, Python, Django etc.) &
            devops tech stacks (Azure, AWS, digitalocean, Ansible etc.). I'm
            always keen to keep up with industry trends and new technologies.
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default AboutPage;
