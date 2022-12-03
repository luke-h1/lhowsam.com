import Page from '@frontend/components/Page/Page';
import { AxiosError } from 'axios';
import { NextPageContext } from 'next';
import Link from 'next/link';
import NotFoundPage from './NotFoundPage';
import styles from './notfound.module.scss';

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
        <Page title="Error" header={false} footer={false}>
          <div className={styles.doubleContent}>
            <div className={styles.sideImage}>
              <div className={styles.containerImage}>
                <h1>{statusCode}</h1>
              </div>
            </div>
            <div className={styles.sideContent}>
              <h1>There's a problem with the site</h1>
              <ul>
                <p>If this issue persists please either:</p>
                <li>
                  <a href="https://github.com/luke-h1/lhowsam.com/issues/new">
                    Raise a Github issue
                  </a>
                </li>
                <li>
                  <a href="https://github.com/luke-h1/lhowsam.com/compare">
                    Create a PR to fix the issue
                  </a>{' '}
                </li>
              </ul>
              <br />
              <Link href="/">
                <a className={styles.button}>Home</a>
              </Link>
            </div>
          </div>
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
