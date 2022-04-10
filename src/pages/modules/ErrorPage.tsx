import Page from '@src/components/Page';
import PageHeader from '@src/components/PageHeader';
import { AxiosError } from 'axios';
import { NextPageContext } from 'next';
import NotFoundPage from './NotFoundPage';

interface Props {
  // eslint-disable-next-line react/no-unused-prop-types
  error?: NextPageContext['err'];
  statusCode: number;
}

const ErrorPage = ({ statusCode }: Props) => {
  switch (statusCode) {
    case 404:
      return <NotFoundPage />;

    default:
      return (
        <Page>
          <PageHeader title="There's a problem with the site">
            <p>Try again later</p>
            <p>
              In the meantime, feel free to create a{' '}
              <a
                href="https://github.com/luke-h1/lhowsam.com"
                style={{ color: '#3867d6;' }}
              >
                PR{' '}
              </a>
              for this site if you spot a bug or mistake
            </p>
          </PageHeader>
        </Page>
      );
  }
};

ErrorPage.getInitialProps = ({ res, err: error }: NextPageContext): Props => {
  let statusCode = res?.statusCode;

  if (error) {
    const axiosError = error as AxiosError;

    if (axiosError.isAxiosError) {
      statusCode = axiosError.response?.status;
    }
  }
  return {
    error,
    statusCode: statusCode ?? 500,
  };
};
export default ErrorPage;
