/* eslint-disable */

import React from 'react';
import { Helmet } from 'react-helmet';

import CardItemLarge from '../../templates/CardItemLarge/CardItemLarge';
import Image4 from '../../assets/images/Projects/pattern-ahmad-dirini.jpeg';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { useDarkTheme } from '../../hooks/useDarkMode';
import { lightTheme, darkTheme } from '../../styles/Themes';
import { ThemeProvider } from 'styled-components';


const FormValidator = () => {
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
      <title>Projects - Form Validator</title>
      <meta name="description" content="Projects - Form Validator" />
    </Helmet>
    <Navbar />
    <CardItemLarge
      title="Form Validator"
      src={Image4}
      alt="Dark room with lights hanging from the ceiling"
      desc="In this project I built a form validator that uses built in
        javascript regular expressions to validate name, email, postcode
        & phone numbers. I also performed numerous automated and manual tests on the application to ensure that the regex functioned as expected."
      label="Vanilla JS"
      github="javascript-regex-validation-form"
      site="https://javascript-regex-validation-form.vercel.app/"
    />
    <Footer />
  </>
  </ThemeProvider>

);
}
export default FormValidator;
