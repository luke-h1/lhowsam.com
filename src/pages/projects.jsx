/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable no-unused-vars */
import React from 'react';
import SEO from '../components/seo';
import Layout from '../components/layout';

const projects = ({ theme, data, location }) => {
  const siteTitle = data.site.siteMetadata.title || 'Luke H - Projects';

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Projects" />

    </Layout>
  );
};
