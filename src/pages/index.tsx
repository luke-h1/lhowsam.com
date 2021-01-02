/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/Hero/Hero';
import { theme } from '../styles/Themes';
import RecentBlogPosts from '../components/RecentBlogPosts/RecentBlogPosts';
import RecentProjects from '../components/RecentProjects/RecentProjects';

const index = ({ location, siteTitle }) => (
  <Layout location={location} title={siteTitle}>
    <SEO title="Home" />
    <Hero theme={theme} />
    <RecentBlogPosts theme={theme} />
    <RecentProjects theme={theme} />
  </Layout>
);
export default index;
export const pageQuery = graphql`
  query { 
    site { 
      siteMetadata { 
        title
      }
    }
  }
`;
