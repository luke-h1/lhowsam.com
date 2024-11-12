import * as List from '@frontend/components/List';
import { buttonStyles } from '@frontend/styles/button.css';
import Box from './Box';
import Heading from './Heading';
import Link from './Link';
import Spacer from './Spacer';

interface Props {
  title: string;
  statusCode: '404' | '500';
}

const ErrorContent = ({ statusCode, title }: Props) => {
  return (
    <Box
      as="header"
      textAlign={{ md: 'center' }}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Spacer height="xl" />
      <Box textAlign="left">
        <Heading as="h1" fontSize="xxl">
          {title}
        </Heading>

        <List.Container>
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
                  variant="underline"
                >
                  GitHub issue
                </Link>
              </List.Item>
            </>
          ) : (
            <List.Item>
              It looks like something went wrong. Please try again later. In the
              meantime, please raise a{' '}
              <Link
                href="https://github.com/luke-h1/lhowsam.com/issues"
                variant="underline"
              >
                GitHub issue
              </Link>
            </List.Item>
          )}
        </List.Container>
      </Box>
      <Spacer height="xxl" />
      <Box textAlign="left">
        <Link href="/" className={buttonStyles({ type: 'highContrast' })}>
          Go Home
        </Link>
      </Box>
    </Box>
  );
};
export default ErrorContent;
