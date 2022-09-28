import Page from '@frontend/components/Page';
import Link from 'next/link';
import styles from './notfound.module.scss';

const NotFoundPage = () => {
  return (
    <Page title="Error" header={false} footer={false}>
      <div className={styles.doubleContent}>
        <div className={styles.sideImage}>
          <div className={styles.containerImage}>
            <h1>404</h1>
          </div>
        </div>
        <div className={styles.sideContent}>
          <h1>page not found</h1>
          <h3 aria-label="404 page not not found">
            Looks like this page doesn't exist
          </h3>
          <ul>
            <p>
              If you got to this page by clicking a link or button and ended up
              on this page please either:
            </p>
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
};

export default NotFoundPage;
