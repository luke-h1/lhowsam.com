import React from 'react';
import Layout from '../../components/layout';
import ProjectPage from '../../templates/ProjectPage/ProjectPage';
import Image4 from '../../../content/assets/project-images/Image4.jpeg';

import SEO from '../../components/seo';

const Automation = () => (
  <Layout>
    <SEO title="Projects - Quotes App" />

    <ProjectPage
      title="Breaking Bad Quotes App"
      src={Image4}
      alt="Macbook in Dark room"
      desc=" In this project I built a quote app that uses React hooks to display random breaking bad quotes."
      github="https://github.com/luke-h1/breaking-bad-quotes-react"
      site="https://breaking-bad-quotes.vercel.app/"
    />
  </Layout>
);

export default Automation;
