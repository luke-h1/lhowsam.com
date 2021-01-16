import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Intro from '../components/Intro/Intro';
import { theme } from '../styles/Theme';
const IndexPage = () => (
  <Layout>
    <SEO title='Home' />
    <Intro theme={theme} />
  </Layout>
);

export default IndexPage;
