/* eslint-disable */
import React from 'react';
import Helmet from 'react-helmet';
import { ThemeProvider } from 'styled-components';
import Footer from '../../components/Footer/Footer';
import Hero from '../../components/Hero/Hero';
import Navbar from '../../components/Navbar/Navbar';
import ProjectShowCase from '../../components/ProjectShowCase/ProjectShowCase';
import Skills from '../../components/Skills/Skills';
import { useDarkTheme } from '../../hooks/useDarkMode';
import { lightTheme, darkTheme } from '../../styles/Themes';

const Home = () => {
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
          <title>Luke H - Home</title>
          <meta name="description" content="Home page" />
        </Helmet>
        <Navbar theme={theme} toggleTheme={themeToggler}/>
        <Hero theme={theme} />
        <Skills theme={theme} />
        <ProjectShowCase theme={theme} />
        <Footer theme={theme} />
      </>
    </ThemeProvider>
  );
};
export default Home;
