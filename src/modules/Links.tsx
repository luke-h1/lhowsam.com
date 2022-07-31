import Page from '@src/components/Page';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import styles from './Links.module.scss';

const LinkPage = () => {
  const router = useRouter();
  return (
    <>
      <NextSeo
        title="Links"
        canonical={`https://lhowsam.com${router.asPath}`}
        description="Affilate links"
        openGraph={{
          defaultImageWidth: 1200,
          defaultImageHeight: 630,
          url: `https://lhowsam.com${router.asPath}`,
          title: `Links | lhowsam.com`,
        }}
      />
      <Page title="Links">
        <div className={styles.main}>
          <h2 style={{ marginBottom: '2.5rem' }}>Affiliate links</h2>
          <p>
            This page is a collection of a few of my affiliate links I have
            where you can get things like free cloud credits.
          </p>
          <ul>
            <li>
              <a href="https://www.digitalocean.com/?refcode=d6c173cdcd43&utm_campaign=Referral_Invite&utm_medium=Referral_Program&utm_source=badge">
                100$ cloud credits from digital ocean
              </a>
            </li>
          </ul>
        </div>
      </Page>
    </>
  );
};

export default LinkPage;
