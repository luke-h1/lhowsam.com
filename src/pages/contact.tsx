/* eslint-disable react/prop-types */
import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Contact from '../components/Contact/Contact';
import { theme } from '../styles/Themes';

const ContactPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title || 'Contact';

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Contact" />
      <Contact theme={theme} />
    </Layout>
  );
};

export default ContactPage;

export const pageQuery = graphql`
  query { 
    site { 
      siteMetadata { 
        title
      }
    }
  }
`;
