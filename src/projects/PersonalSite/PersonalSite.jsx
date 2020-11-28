/* eslint-disable no-unused-expressions */
import React from 'react';
import { Helmet } from 'react-helmet';

import { ThemeProvider } from 'styled-components';
import CardItemLarge from '../../templates/CardItemLarge/CardItemLarge';
import Image1 from '../../assets/images/Projects/Coffee-jon-tyson.jpeg';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { useDarkTheme } from '../../hooks/useDarkMode';
import { lightTheme, darkTheme } from '../../styles/Themes';

const PersonalSite = () => {
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
          <title>Projects - Personal Site</title>
          <meta name="description" content="Projects - Personal Site" />
        </Helmet>
        <Navbar theme={theme} toggleTheme={themeToggler} />
        <CardItemLarge
          title="Personal Site (This one!)"
          src={Image1}
          alt="Neon sign that says: Coffee"
          desc="This is a project I've worked on since I started learning web development. It has been through many iterations (Vanilla javascript to React, CSS to SASS and SASS to styled components to name a few...) and it has helped me challenge myself and learn a lot about web development in general. I've really enjoyed spending time improving this site and thinking of new features I can add to this site. I plan on remaking this site into a gatsby site and integrate GraphQL to simplify querying for data"
          label="Javascript, React,CSS, SCSS, styled-components"
          github="https://github.com/luke-h1/lhowsam.com"
          site="https://lhowsam.com"
        />
        <Footer theme={theme} />
      </>
    </ThemeProvider>

  );
};
export default PersonalSite;
