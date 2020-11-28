/* eslint-disable */
import React from 'react';
import Helmet from 'react-helmet';
import Contact from '../../components/Contact/Contact';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import { useDarkTheme } from '../../hooks/useDarkMode';
import { lightTheme, darkTheme } from '../../styles/Themes';
import { ThemeProvider } from 'styled-components';

const ContactPage = () =>{
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
      <title>Contact</title>
      <meta name="description" content="Contact page" />
    </Helmet>
    <Navbar theme={theme} toggleTheme={themeToggler}/>
    <Contact theme={theme} />
    <Footer theme={theme} />
  </>
  </ThemeProvider>
);
}
export default ContactPage;
