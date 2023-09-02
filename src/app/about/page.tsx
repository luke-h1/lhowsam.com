import Box from '@frontend/components/Box/Box';
import Heading from '@frontend/components/Heading/Heading';
import { Image } from '@frontend/components/Image/Image';
import Link from '@frontend/components/Link/Link';
import { List } from '@frontend/components/List/List';
import Page from '@frontend/components/Page';
import Spacer from '@frontend/components/Spacer/Spacer';
import Text from '@frontend/components/Text/Text';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import * as styles from './about.css';

const Skills = dynamic(() => import('@frontend/components/Skills/Skills'), {
  ssr: true,
});

export const metadata: Metadata = {
  title: 'About',
};

const AboutPage = () => {
  return (
    <Page
      heading="About"
      description="Hey I'm Luke, a Software Engineer currently based in the UK."
    >
      <div className={styles.root}>
        <Image
          src="/luke-1.png"
          alt="Luke Howsam"
          width={220}
          height={300}
          rounded
          placeholder="blur"
          blurDataURL="/luke-1.png"
        />
        <Spacer height="xxxxl" />
        <Box as="section" maxWidth={{ md: 'text' }} marginX="auto">
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
          {/* <Text
            color="foregroundAction"
            style={{
              marginBottom: '0.5rem',
            }}
          >
            <a href="mailto:luke.howsam54@gmail.com">Get in touch</a>
          </Text>
          <Text color="foregroundAction">
            <Link href="/static/cv.pdf">CV</Link>
          </Text> */}
             <Box as="section" maxWidth="text" marginX="auto">
        <header>
          <Heading fontSize="xl">Connect</Heading>
        </header>
        <Spacer height="xxl" />
        <List.Item>
            <Text>
              <Link href={`${process.env.NEXT_PUBLIC_URL}/static/cv.pdf`}>
                CV
              </Link>
            </Text>
          </List.Item>
        <List>
        <List.Item>
            <Text>
              <Link href="https://www.linkedin.com/in/lukehowsam">
                LinkedIn
              </Link>
            </Text>
          </List.Item>
          <List.Item>
            <Text>
              <Link href="https://github.com/luke-h1">Github</Link>
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
        <Spacer height="xxxxl" />
        <Box as="section" maxWidth={{ md: 'text' }} marginX="auto">
          <Heading as="h2" fontSize="xl">
            Skills
          </Heading>
          <Skills />
        </Box>
      </div>
    </Page>
  );
};
export default AboutPage;
