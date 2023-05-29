import { theme } from '@frontend/styles/theme.css';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { GitHub, Linkedin, Twitter } from 'react-feather';
import Box from '../(components)/Box/Box';
import Connect from '../(components)/Connect/Connect';
import Heading from '../(components)/Heading/Heading';
import Skills from '../(components)/Skills/Skills';
import Spacer from '../(components)/Spacer/Spacer';
import Text from '../(components)/Text/Text';
import * as styles from './about.css';

export const metadata: Metadata = {
  title: 'About',
};

const AboutPage = async () => {
  return (
    <>
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
        <Box as="section" marginX="auto">
          <Image
            src="/images/luke-about.jpg"
            alt="Luke Howsam"
            width={225}
            height={200}
            priority
            blurDataURL="/images/luke-about.jpg"
            className={styles.image}
            loading="eager"
            quality={75}
          />
        </Box>
        <Box
          as="section"
          maxWidth={{ md: 'text' }}
          marginX="auto"
          textAlign="left"
        >
          <Text fontSize={{ xs: 'lg', sm: 'xl' }} color="foregroundNeutral">
            Hey, I'm Luke. I'm a Software Engineer currently based in the UK.
            I'm comfortable with both frontend/backend technologies (React,
            Next.js, Python, GraphQL, Express.js, Node etc.) and I'm always keen
            to keep up with industry trends and new technologies.
          </Text>
          <Spacer height="xxxl" />
          <Text fontSize={{ xs: 'lg', sm: 'xl' }} color="foregroundNeutral">
            When I'm not coding, I like to travel, discover new foods, find new
            movies/tv-shows and read
          </Text>

          <Box as="div" style={{ marginBottom: '3rem', marginTop: '2rem' }}>
            {/* TODO: consolidate links via site config */}
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

            <Link href="https://twitter.com/LukeH_1999">
              <Twitter
                size={20}
                style={{
                  marginLeft: '1rem',
                }}
              />
            </Link>

            <Box as="div" marginTop="md">
              <Text>
                <Link href="/static/cv.pdf">Resume</Link>
              </Text>
            </Box>
          </Box>
          <Box style={{ marginBottom: '2rem' }} />
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
      <Connect />
    </>
  );
};
export default AboutPage;
