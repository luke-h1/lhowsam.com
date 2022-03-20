import Document, { Html, Head, Main, NextScript } from 'next/document';

const keywords = [
  'Luke Howsam',
  'Developer',
  'Software Tester',
  'React',
  'Node',
  'Typescript',
  'Javascript',
  'GraphQL',
  'QA',
  'Automated & manual testing',
  'Sheffield',
  'United Kingdom',
] as const;

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="keywords" content={[...keywords].join(', ')} />

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
          <link rel="manifest" href="/manifest.json" />
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
            content="Luke Howsam is a QA engineer and software developer who specializes in Javascript, Typescript, GraphQL, cloud technologies & automated + manual testing"
          />

          <script
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', "${process.env.NEXT_PUBLIC_GA_TRACKING_ID}");  
              `,
            }}
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
