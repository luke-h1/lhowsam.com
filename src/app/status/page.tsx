import Box from '@frontend/components/Box';
import Page from '@frontend/components/Page';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Status',
};

const StatusPage = () => {
  return (
    <Page>
      <Box>
        <iframe
          title="Status"
          src="https://status.jamstack.org/"
          width="100%"
          height="1000px"
        />
      </Box>
    </Page>
  );
};
export default StatusPage;
