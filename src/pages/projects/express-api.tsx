import React from 'react';
import Layout from '../../components/layout';
import Project from '../../templates/Project';

const automation = () => (
  <>
    <Layout>
      <Project
        title="Express api"
        descriptionOne="In this project I build an Express / Node API proxy in order to hide my API keys + secrets on the frontend. This API fetches whether based on city. Try it below !"
        ghLink="https://github.com/luke-h1/weather-api"
        siteLink="https://github-api-react-express-node.herokuapp.com/"
      />
    </Layout>
  </>
);
export default automation;
