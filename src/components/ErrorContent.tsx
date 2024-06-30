'use client';

import Box from './Box/Box';
import Link from './Link/Link';
import { List } from './List/List';
import Page from './Page';
import { Spacer } from './Spacer/Spacer';

interface Props {
  title: string;
  statusCode: '404' | '500';
}

const ErrorContent = ({ statusCode, title }: Props) => {
  return (
    <Page heading={title} showFooter={false}>
      <Box
        as="header"
        textAlign={{ md: 'center' }}
        // maxWidth="container"
        marginX="auto"
      >
        <Spacer height="xl" />

        <Box textAlign="left">
          <List>
            {statusCode === '404' ? (
              <>
                <List.Item>
                  If you typed the web address, check it's correct.
                </List.Item>
                <List.Item>
                  If you copied and pasted the web address, check you copied the
                  entire address.
                </List.Item>
                <List.Item>
                  If the web address is correct or you clicked a link or button
                  and ended up on this page, please raise a{' '}
                  <Link
                    href="https://github.com/luke-h1/lhowsam.com/issues"
                    variant="highlight"
                  >
                    GitHub issue
                  </Link>
                </List.Item>
              </>
            ) : (
              <List.Item>
                It looks like something went wrong. Please try again later. In
                the meantime, please raise a{' '}
                <Link href="https://github.com/luke-h1/lhowsam.com/issues">
                  GitHub issue
                </Link>
              </List.Item>
            )}
          </List>
        </Box>
        <Spacer height="xxl" />
        <Box textAlign="left">
          <Link href="/">Go Home</Link>
        </Box>
      </Box>
    </Page>
  );
};
export default ErrorContent;
