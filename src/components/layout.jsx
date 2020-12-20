/* eslint-disable no-unused-expressions */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import { GlobalStyle } from '../styles/GlobalStyles';
import { useDarkTheme } from '../hooks/useDarkMode';
import { lightTheme, darkTheme } from '../styles/Themes';

const Layout = ({ children }) => {
  const [theme, setTheme] = useDarkTheme(
    (typeof window !== 'undefined' && window.localStorage.getItem('theme')) || 'light',
  );

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>

      <>
        <GlobalStyle />
        <Navbar theme={theme} toggleTheme={themeToggler} />
        {children}
        <Footer theme={theme} />
      </>
    </ThemeProvider>

  );
};
export default Layout;
