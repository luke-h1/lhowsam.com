import Button from '@src/components/Button';
import Page from '@src/components/Page';
import PageHeader from '@src/components/PageHeader';
import Head from 'next/head';

const NotFoundPage = () => {
  return (
    <Page>
      <Head>
        <title>404 | lhowsam.com</title>
      </Head>
      <PageHeader
        title="404 - Page not found"
        description="The page you are looking for does not exist 🤔"
      >
        <Button href="/">Home</Button>
      </PageHeader>
    </Page>
  );
};
export default NotFoundPage;
