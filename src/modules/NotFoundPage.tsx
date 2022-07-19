import Page from '@src/components/Page';
import PageHeader from '@src/components/PageHeader';
import Head from 'next/head';
import Link from 'next/link';

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
        <Link href="/">Home</Link>
      </PageHeader>
    </Page>
  );
};
export default NotFoundPage;
