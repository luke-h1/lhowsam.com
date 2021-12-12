/* eslint-disable @typescript-eslint/no-unused-vars */
import { GA_TRACKING_ID } from '@src/utils/gtag';
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

const keywords = [
  'Luke Howsam',
  'Developer',
  'Software Tester',
  'React.js',
  'Node.js',
  'Next.js',
  'Automated & manual testing',
  'Sheffield',
  'United Kingdom',
];

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });
      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
  
  render() {
    return (
      <Html lang="en">
        <Head>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <meta
            name="keywords"
            content={[...(keywords as string[])].join(', ')}
          />
          <script
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
            }}
          />
          <link href="/icons/favicon-16x16.png" rel="shortcut icon" />
          <link href="site.webmanifest" rel="manifest" />
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
          <link rel="manifest" href="/site.webmanifest" />
          <meta name="theme-color" content="#ffffff" />
          <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
          <meta content="#ffffff" name="theme-color" />
          <meta content="#ffffff" name="msapplication-TileColor" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const blockingSetInitialColorMode = `(function() {
	${setInitialColorMode.toString()}
	setInitialColorMode();
	${setIsMobileLayout.toString()}
	setIsMobileLayout();
})()
`;

function setInitialColorMode() {
  function getInitialColorMode() {
    const persistedColorPreference = typeof window !== 'undefined' && window.localStorage.getItem('theme');
    const hasPersistedPreference = typeof persistedColorPreference === 'string';

    if (hasPersistedPreference) {
      return persistedColorPreference;
    }

    const mql = typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)');
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const hasMediaQueryPreference = typeof mql.matches === 'boolean';

    if (hasMediaQueryPreference) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
      return mql.matches ? 'dark' : 'light';
    }

    return 'light';
  }

  const colorMode = getInitialColorMode();
  const root = document.documentElement;
  root.style.setProperty('--initial-color-mode', colorMode);

  if (colorMode === 'dark')
    document.documentElement.setAttribute('data-theme', 'dark');
}

function setIsMobileLayout() {
  function getIsMobileLayout() {
    const mql = window.matchMedia(`(min-width: ${768}px)`);
    const hasResult = typeof mql.matches === 'boolean';

    if (hasResult) {
      return mql.matches ? 'false' : 'true';
    }
    return 'false';
  }

  const isMobileLayout = getIsMobileLayout();
  const root = document.documentElement;
  root.style.setProperty('--is-mobile-layout', isMobileLayout);
}
