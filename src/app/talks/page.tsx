import Box from '@frontend/components/Box/Box';
import Heading from '@frontend/components/Heading/Heading';
import { List } from '@frontend/components/List/List';
import Page from '@frontend/components/Page';
import Spacer from '@frontend/components/Spacer/Spacer';
// eslint-disable-next-line import/no-cycle
import TalkItem from '@frontend/components/TalkItem/TalkItem';
import Text from '@frontend/components/Text/Text';
import useFeatureFlag from '@frontend/hooks/useFeatureFlag';
import { Metadata } from 'next';
import { redirect } from 'next/navigation';

export interface Talk {
  id: string;
  title: string;
  date: string;
  location: string;
  image: string;
  description: string;
  slideUrl: string;
}

const talks: Talk[] = [
  {
    id: '1',
    title: 'test talk',
    date: '05/06/1999',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    location: 'San francisco',
    slideUrl: 'https://nowplaying.lhowsam.com',
    image: 'https://cataas.com/cat',
  },
  {
    id: '2',
    title: 'test talk',
    date: '05/06/1999',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    location: 'San francisco',
    slideUrl: 'https://nowplaying.lhowsam.com',
    image: 'https://cataas.com/cat',
  },
  {
    id: '3',
    title: 'test talk',
    date: '05/06/1999',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    location: 'San francisco',
    slideUrl: 'https://nowplaying.lhowsam.com',
    image: 'https://cataas.com/cat',
  },
];

const TalksContent = () => {
  'use client';

  const talksEnabled = useFeatureFlag('talks');

  if (!talksEnabled) {
    return redirect('/');
  }
  return (
    <>
      <Box
        as="header"
        textAlign={{ md: 'center' }}
        maxWidth="container"
        marginX="auto"
      >
        <Box display="inline-flex" gap="xs">
          <Heading fontSize={{ xs: 'xxl', sm: 'xxxl' }} as="h1">
            Talks
          </Heading>
          <Box flexShrink={0} color="foregroundAction">
            <svg
              width="1.25em"
              viewBox="0 0 24 24"
              aria-label="Verified account"
              role="img"
            >
              <g>
                <path
                  fill="currentColor"
                  d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.66-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91c-1.31.67-2.2 1.91-2.2 3.34s.89 2.67 2.2 3.34c-.46 1.39-.21 2.9.8 3.91s2.52 1.26 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.68-.88 3.34-2.19c1.39.45 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.36-6.2 6.77z"
                />
              </g>
            </svg>
          </Box>
        </Box>
        <Spacer height="sm" />
        <Text
          fontSize={{ xs: 'lg', sm: 'xl' }}
          color="foregroundNeutral"
          style={{
            display: 'inline-flex',
          }}
        >
          Talks I've given at meetups and events
        </Text>
      </Box>

      <Spacer height="xxxxl" />

      <Box as="section" maxWidth={{ md: 'text' }} marginX={{ md: 'auto' }}>
        <List>
          {talks &&
            talks.map(talk => (
              <List.Item key={talk.id}>
                <TalkItem talk={talk} />
              </List.Item>
            ))}
        </List>
      </Box>
    </>
  );
};
export const metadata: Metadata = {
  title: 'Talks',
  description: 'Talks I have given at meetups and events',
};

const TalksPage = () => {
  return (
    <Page>
      <TalksContent />
    </Page>
  );
};
export default TalksPage;
