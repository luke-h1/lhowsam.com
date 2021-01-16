import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { theme } from '../styles/Theme';
import ProjectPage from '../components/ProjectPage/ProjectPage';
const IndexPage = () => (
  <Layout>
    <SEO title='Blog' />
    <ProjectPage theme={theme} />
  </Layout>
);

export default IndexPage;
