import React from 'react';
import { ThemeProvider } from 'styled-components';
import Footer from '../../components/Footer/Footer';
import Hero from '../../components/Hero/Hero';
import Navbar from '../../components/Navbar/Navbar';
import ProjectShowCase from '../../components/ProjectShowCase/ProjectShowCase';
import { GlobalStyles, darkTheme, lightTheme, light } from '../../styles'
const Home = () => {

  return (
    <ThemeProvider theme={usedarkTheme ? darkTheme : lightTheme}>
      <>
        <Navbar />
        <Hero />
        <ProjectShowCase />
        <Footer />
      </>
    </ThemeProvider>
  );
};
export default Home;
