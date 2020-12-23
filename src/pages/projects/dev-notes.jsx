import React from 'react';
import Layout from '../../components/layout';
import ProjectPage from '../../templates/ProjectPage/ProjectPage';
import SEO from '../../components/seo';

const developerNotes = () => (
  <Layout>
    <SEO title="Projects - Dev notes" />

    <ProjectPage
      title="Developer Notes"
      alt="lights"
      desc="In this app I made a Gatsby site which contains useful markdown files about different technologies & languages I have learned."
      github="https://github.com/luke-h1/developer-notes "
      site="https://dev-notes-mi.vercel.app/"
    />
  </Layout>
);
export default developerNotes;
