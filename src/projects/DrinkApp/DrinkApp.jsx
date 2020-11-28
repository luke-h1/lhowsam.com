/* eslint-disable */
import React from 'react';
import { Helmet } from 'react-helmet';
import CardItemLarge from '../../templates/CardItemLarge/CardItemLarge';
import Image2 from '../../assets/images/Projects/Drink-carson.jpeg';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { useDarkTheme } from '../../hooks/useDarkMode';
import { lightTheme, darkTheme } from '../../styles/Themes';
import { ThemeProvider } from 'styled-components';

const DrinkApp = () => {
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
      <title>Projects - Drink App</title>
      <meta name="description" content="Projects - Drink App" />
    </Helmet>
    <Navbar />
    <CardItemLarge
      title="Cocktail Recipe App"
      src={Image2}
      alt="lights"
      desc="In this app I made a Cocktail Recipe app using React hooks & SCSS that
        pulls data from the CocktailDB API. This was a really fun project to work on and was one of the first projects I converted to React JS (from vanilla JS)"
      label="React,SASS"
      github="https://github.com/luke-h1/cocktail-recipe-app "
      site="https://cocktail-recipe-app.vercel.app/"
    />
    <Footer />
  </>
  </ThemeProvider>

);
}
export default DrinkApp;
