/* eslint-disable no-unused-expressions */
import React from 'react';
import { Helmet } from 'react-helmet';
import { ThemeProvider } from 'styled-components';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import Projects from '../../components/Projects/Projects';
import { useDarkTheme } from '../../hooks/useDarkMode';
import { lightTheme, darkTheme } from '../../styles/Themes';

const ProjectPage = () => {
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
          <title>Projects</title>
          <meta name="description" content="Project page" />
        </Helmet>
        <Navbar theme={theme} toggleTheme={themeToggler} />
        <Projects theme={theme} />
        <Footer theme={theme} />
      </>
    </ThemeProvider>
  );
};
export default ProjectPage;
