import Box from '@frontend/components/Box/Box';
import Heading from '@frontend/components/Heading/Heading';
import Link from '@frontend/components/Link/Link';
import Skills from '@frontend/components/Skills/Skills';
import Spacer from '@frontend/components/Spacer/Spacer';
import Text from '@frontend/components/Text/Text';
import { theme } from '@frontend/styles/theme.css';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
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
            <Text
              style={{
                marginTop: '1rem',
              }}
            >
              <Link href="/static/cv-latest.pdf" variant="highlight">
                Resume
              </Link>
            </Text>
          </Box>
          <Box style={{ marginBottom: '2rem' }}>
            <Text
              fontSize={{ xs: 'lg', sm: 'xl' }}
              color="foregroundNeutral"
              style={{
                maxWidth: 'text',
                textAlign: 'left',
                marginBottom: '0.75rem',
              }}
            >
              Right now, I'm working as a Software Engineer. I'm comfortable
              with both frontend/backend (React, Node, Next.js, Python, Django
              etc.) & devops tech stacks (Azure, AWS, digitalocean, Ansible
              etc.). I'm always keen to keep up with industry trends and new
              technologies.
            </Text>
          </Box>
          <Box as="div">
            <Heading
              fontSize={{ xs: 'xxl', sm: 'xxxl' }}
              as="h3"
              style={{
                textAlign: 'left',
                marginBottom: '2rem',
              }}
            >
              Skills
            </Heading>
            <Skills />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default AboutPage;
