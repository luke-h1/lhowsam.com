import Nav from '@src/components/Nav';
import Head from 'next/head';
import { useRouter } from 'next/router';

interface Props {
  children: React.ReactNode;
  className?: string;
  ogImage?: string;
}

const Page = ({ children, ogImage, className = 'container' }: Props) => {
  const router = useRouter();
  return (
    <div className={className}>
      <Head>
        <meta
          name="twitter:site"
          content={`${process.env.NEXT_PUBLIC_SITE_URL}${router.asPath}`}
        />

        <meta name="twitter:card" content="summary_large_image" />
        {ogImage && (
          <>
            <meta name="twitter:image" content={ogImage} />
            <meta property="og:image" content={ogImage} />
          </>
        )}
      </Head>
      <Nav />
      {children}
    </div>
  );
};
export default Page;
