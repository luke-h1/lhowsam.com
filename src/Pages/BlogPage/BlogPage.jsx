/* eslint-disable no-unused-expressions */
import React from 'react';
import { Helmet } from 'react-helmet';
import { ThemeProvider } from 'styled-components';
import BlogItem from '../../components/BlogItem/BlogItem';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { useDarkTheme } from '../../hooks/useDarkMode';
import { lightTheme, darkTheme } from '../../styles/Themes';

const BlogPage = () => {
  const [theme, setTheme] = useDarkTheme(
    (typeof window !== 'undefined' && window.localStorage.getItem('theme')) || 'light',
  );

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <Helmet>
          <title>Blog</title>
          <meta name="description" content="Blog page" />
        </Helmet>
        <Navbar theme={theme} toggleTheme={themeToggler} />
        <BlogItem theme={theme} />
        <Footer theme={theme} />
      </>
    </ThemeProvider>
  );
};
export default BlogPage;
