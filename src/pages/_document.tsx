import siteConfig from '@frontend/config/site';
import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="keywords" content={siteConfig.keywords.join(', ')} />
          <link rel="icon" href="/favicon.ico" />
          <link href="/icons/favicon-16x16.png" rel="icon" />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/icons/maskable.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/icons/favicon-16x16.png"
          />
          <link
            rel="preload"
            href="/fonts/inter-var-latin.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <meta name="theme-color" content="#ffffff" />
          <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
          <meta content="#ffffff" name="theme-color" />
          <meta content="#ffffff" name="msapplication-TileColor" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta
            content="VXnRb79aLIbpTSPg8tRVx5KMcECv8hLJPYW0f3X4KKI"
            name="google-site-verification"
          />
          <meta
            name="description"
            content="Luke Howsam is a software engineer and software developer who specializes in Javascript, Typescript, GraphQL, cloud technologies & automated + manual testing"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
