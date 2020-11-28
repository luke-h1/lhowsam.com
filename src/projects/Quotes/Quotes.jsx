/* eslint-disable no-unused-expressions */
import React from 'react';
import { Helmet } from 'react-helmet';
import { ThemeProvider } from 'styled-components';
import CardItemLarge from '../../templates/CardItemLarge/CardItemLarge';
import Image6 from '../../assets/images/Projects/Shop-albert-renn.jpeg';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { useDarkTheme } from '../../hooks/useDarkMode';
import { lightTheme, darkTheme } from '../../styles/Themes';

const Quotes = () => {
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
          <title>Projects - Quotes</title>
          <meta name="description" content="Projects - Quotes" />
        </Helmet>
        <Navbar theme={theme} toggleTheme={themeToggler} />
        <CardItemLarge
          title="Breaking Bad Quotes App"
          src={Image6}
          alt="Macbook in Dark room"
          desc=" In this project I built a quote app that uses React hooks to display random breaking bad quotes."
          github="https://github.com/luke-h1/breaking-bad-quotes-react"
          site="https://breaking-bad-quotes.vercel.app/"
        />
        <Footer theme={theme} />
      </>
    </ThemeProvider>

  );
};
export default Quotes;
