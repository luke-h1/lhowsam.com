import Box from '@frontend/components/Box';
import Heading from '@frontend/components/Heading';
import * as List from '@frontend/components/List';
import Page from '@frontend/components/Page';
import Spacer from '@frontend/components/Spacer';
import Text from '@frontend/components/Text';
import WorkItem from '@frontend/components/WorkItem';
import workService from '@frontend/services/workService';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Work',
};

export default async function WorkPage() {
  const works = await workService.getWorks();

  return (
    <Page>
      <Box as="section">
        <Heading fontSize="xxl" as="h1">
          Work
        </Heading>
        <Spacer height="xxs" />
        <Text color="foregroundNeutral" fontSize="lg">
          Projects I've contribute to at work
        </Text>
      </Box>
      <Spacer height="xxxl" />
      <Box as="section">
        <List.Container>
          {works &&
            works.map(work => (
              <List.Item key={work._id}>
                <WorkItem work={work} key={work._id} />
              </List.Item>
            ))}
        </List.Container>
      </Box>
    </Page>
  );
}
