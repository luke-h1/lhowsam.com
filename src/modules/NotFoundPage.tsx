import Page from '@src/components/Page';
import Image from 'next/image';
import Link from 'next/link';
import styles from './notfound.module.scss';

const NotFoundPage = () => {
  return (
    <Page title="Error" header={false} footer={false}>
      <div className={styles.doubleContent}>
        <div className={styles.sideContent}>
          <h1>404 page not found</h1>
          <h3 aria-label="404 page not not found">
            Looks like this page doesn't exist
          </h3>

          <ul>
            <p>If you typed the web address, check it's correct.</p>
            <p>
              If you cut and pasted the web address, check you copied the entire
              address.
            </p>{' '}
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
