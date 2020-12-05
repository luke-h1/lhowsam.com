import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const index = ({ data, location }) => (
  <Layout>
    <SEO title="Home" />
      <Projecs theme={theme}/>
  </Layout>
);

export default index;
