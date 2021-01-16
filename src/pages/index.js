import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Intro from '../components/Intro/Intro';
import { theme } from '../styles/Theme';
import ProjectItem from '../components/ProjectItem/ProjectItem';
import ShowCaseProject from '../components/ShowCaseProject/ShowCaseProject';
const IndexPage = () => (
  <Layout>
    <SEO title='Home' />
    <Intro theme={theme} />
    <ShowCaseProject theme={theme} />
  </Layout>
);

export default IndexPage;
