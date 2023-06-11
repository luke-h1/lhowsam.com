import { useMounted } from '@frontend/hooks/useMounted';
import Head from 'next/head';
import Page from './Page/Page';
import PageHeader from './PageHeader/PageHeader';
import Button from './form/Button/Button';

interface Props {
  statusCode: number;
}

const ErrorContent = ({ statusCode }: Props) => {
  const { isMounted } = useMounted();
  const title =
    statusCode === 404 ? '404 - Page not found' : '500 - Something went wrong';
  const description =
    statusCode === 404
      ? 'This page does not exists, maybe you clicked an old link or misspelled. Please try again…'
      : 'Something went wrong, please try again later…';

  if (!isMounted) {
    return null;
  }

  return (
    <Page>
      <Head>
        <title>{statusCode} | lhowsam.com</title>
      </Head>
      <PageHeader title={title} description={description}>
        <Button href="/" type="button">
          Return home
        </Button>
      </PageHeader>
    </Page>
  );
};
export default ErrorContent;
