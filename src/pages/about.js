import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../prototypes/Hero';
import { theme } from '../styles/Theme';

const IndexPage = () => (
  <Layout>
    <SEO title="About" />
    <h1>About page</h1>
  </Layout>
);

export default IndexPage;
