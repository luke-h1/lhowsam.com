import React from 'react';
import Layout from '../../components/layout';
import Project from '../../templates/Project';

const devNotes = () => (
  <>
    <Layout>
      <Project
        title="dev notes"
        descriptionOne="In this app I made a Gatsby site which contains useful markdown files about different technologies & languages I have learned.
        "
        ghLink="https://github.com/luke-h1/developer-notes"
        siteLink="https://dev-notes-mi.vercel.app/"
      />
    </Layout>
  </>
);
export default devNotes;
