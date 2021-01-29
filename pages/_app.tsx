import React from 'react';
import Layout from '../components/Layout/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>

    </>
  );
}

export default MyApp;
