import Box from '../Box/Box';
import { Heading } from '../Heading/Heading';
import { Image } from '../Image/Image';
import Link from '../Link/Link';
import { List } from '../List/List';
import { Spacer } from '../Spacer/Spacer';
import { Text } from '../Text/Text';
import * as styles from './Hero.css';

const Hero = () => {
  return (
    <div className={styles.root}>
      <Image
        src="/luke-1.png"
        alt="Luke Howsam"
        width={220}
        height={300}
        priority
        fetchPriority="high"
        quality={100}
        rounded
        placeholder="blur"
        blurDataURL="/luke-1.png"
      />
      <Spacer height="xxl" />
      <Box as="section" maxWidth={{ md: 'text' }} marginX="auto">
        <Text color="foregroundNeutral" style={{ marginBottom: '2rem' }}>
          Right now I'm working as a Software Engineer at{' '}
          <a
            style={{
              textDecoration: 'underline',
            }}
            href="https://www.flutter.com/our-brands/sky-betting-gaming/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Sky Betting & Gaming
          </a>
          , primarily working with React, Next.js, GraphQL, Node.js and AWS.
        </Text>
        <Text
          color="foregroundNeutral"
          style={{
            marginBottom: '2rem',
          }}
        >
          I'm comfortable with both frontend/backend technologies (React,
          Next.js, Python, GraphQL, Express.js, Node etc.) and I'm always keen
          to keep up with industry trends and new technologies.
        </Text>
        <Text
          color="foregroundNeutral"
          style={{
            marginBottom: '2rem',
          }}
        >
          In my spare time I enjoy being outdoors, travelling, discovering new
          foods, finding new movies/tv-shows and reading
        </Text>
        <Box as="section" maxWidth="text" marginX="auto">
          <header>
            <Heading fontSize="xl">Connect</Heading>
          </header>
          <Spacer height="xxl" />
          <List>
            <List.Item>
              <Text>
                <Link href="/static/cv.pdf">CV</Link>
              </Text>
            </List.Item>
            <List.Item>
              <Text>
                <Link href="https://www.linkedin.com/in/lukehowsam">
                  LinkedIn
                </Link>
              </Text>
            </List.Item>
            <List.Item>
              <Text>
                <Link href="https://github.com/luke-h1">GitHub</Link>
              </Text>
            </List.Item>
            <List.Item>
              <Text>
                <Link href="https://twitter.com/LukeH_1999">Twitter</Link>
              </Text>
            </List.Item>
          </List>
        </Box>
      </Box>
      <Spacer height="xxl" />
      <Box as="section" maxWidth={{ md: 'text' }} marginX="auto">
        <Heading as="h2" fontSize="xl">
          Skills
        </Heading>
        {/* <Skills /> */}
      </Box>
    </div>
  );
};

export default Hero;
