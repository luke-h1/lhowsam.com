/* eslint-disable no-unused-expressions */
/* eslint-disable */
import React from 'react';
import { Helmet } from 'react-helmet';
import CardItemLarge from '../../templates/CardItemLarge/CardItemLarge';
import Image6 from '../../assets/images/Projects/Shop-albert-renn.jpeg';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { useDarkTheme } from '../../hooks/useDarkMode';
import { lightTheme, darkTheme } from '../../styles/Themes';
import { ThemeProvider } from 'styled-components';

const Quotes = () => 
{
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
    <Navbar />
    <CardItemLarge
      title="Breaking Bad Quotes App"
      src={Image6}
      alt="Macbook in Dark room"
      desc=" In this project I built a quote app that uses React hooks to display random breaking bad quotes."
      github="https://github.com/luke-h1/breaking-bad-quotes-react"
      site="https://breaking-bad-quotes.vercel.app/"
    />
    <Footer />
  </>
  </ThemeProvider>

);
}
export default Quotes;
