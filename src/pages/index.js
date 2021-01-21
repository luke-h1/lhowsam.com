import React from 'react';
import { ThemeProvider } from 'styled-components';
import Layout from '../components/layout';
import SEO from '../components/seo';
import ShowCaseProject from '../components/ShowCaseProject/ShowCaseProject';
import ShowCaseBlog from '../components/ShowCaseBlog/ShowCaseBlog';
import Intro from '../components/Intro/Intro';
import { theme } from '../styles/Theme';

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <ThemeProvider theme={theme}>
      <Layout theme={theme}>
        <Intro theme={theme} />
        <ShowCaseProject theme={theme} />
        <ShowCaseBlog theme={theme} />
      </Layout>
    </ThemeProvider>
  </>
);

export default IndexPage;
