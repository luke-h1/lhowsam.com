/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
import React from 'react';
import { Link, graphql } from 'gatsby';

import { ThemeProvider } from 'styled-components';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { useDarkTheme } from '../hooks/useDarkMode';
import { lightTheme, darkTheme } from '../styles/Themes';
import Hero from '../components/Hero/Hero';
import RecentProjects from '../components/RecentProjects/RecentProjects';

const index = ({ data, location }) => {
  const [theme, setTheme] = useDarkTheme(
    (typeof window !== 'undefined' && window.localStorage.getItem('theme')) || 'light',
  );

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>

      <Layout>
        <SEO title="Home" />
        <Hero theme={theme} />
        <RecentProjects theme={theme} />
      </Layout>
    </ThemeProvider>

  );
};
export default index;
