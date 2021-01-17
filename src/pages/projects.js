import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { theme } from '../styles/Theme';
import ProjectPage from '../components/ProjectPage/ProjectPage';
import Project from '../templates/Project';
const IndexPage = () => (
  <Layout>
    <SEO title="Blog" />
    {/* <ProjectPage theme={theme} />  */}
    <Project /> 
  </Layout>
);

export default IndexPage;
