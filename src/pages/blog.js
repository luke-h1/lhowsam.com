import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { theme } from '../styles/Theme';
import BlogPage from '../components/BlogPage/BlogPage';
const IndexPage = () => (
  <Layout>
    <SEO title='Blog' />
    <BlogPage theme={theme} />
  </Layout>
);

export default IndexPage;
