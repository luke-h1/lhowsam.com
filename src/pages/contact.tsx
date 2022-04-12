import Page from '@src/components/Page';
import PageHeader from '@src/components/PageHeader';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import styles from './contact.module.scss';

const Contact = () => {
  const router = useRouter();

  return (
    <Page>
      <NextSeo
        title="Contact"
        canonical={`https://lhowsam.com${router.asPath}`}
        description="Contact"
        openGraph={{
          defaultImageWidth: 1200,
          defaultImageHeight: 630,
          url: `https://lhowsam.com${router.asPath}`,
          title: `Contact | lhowsam.com`,
        }}
      />
      <PageHeader
        title="Contact"
        description="Although I'm not currently looking for any new opportunities, my inbox is always open"
      >
        <p>There are a few ways you can get in touch:</p>
        <ul className={styles.list}>
          <li>
            <a
              href="mailto:luke.howsam54@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Email
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/lukehowsam/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/LukeH_1999"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </li>
        </ul>
      </PageHeader>
    </Page>
  );
};
export default Contact;
