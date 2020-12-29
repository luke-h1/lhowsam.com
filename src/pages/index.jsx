/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */

import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/Hero/Hero';
import { theme } from '../styles/Themes';
import RecentBlogPosts from '../components/RecentBlogPosts/RecentBlogPosts';
import RecentProjects from '../components/RecentProjects/RecentProjects';

const index = () => (
  <Layout>
    <SEO title="Home" />
    <Hero theme={theme} />
    <RecentBlogPosts theme={theme} />
    <RecentProjects theme={theme} />
  </Layout>
);
export default index;
