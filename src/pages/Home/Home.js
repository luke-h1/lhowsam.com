import React, { Fragment } from 'react';
import Cards from '../../components/Cards/Cards';
import HeroSection from '../../components/HeroSection/HeroSection';
import Skills from '../../components/Skills/Skills';
import Contact from '../../components/Contact/Contact';
const Home = () => {
  return (
    <Fragment>
      <HeroSection />
      <Skills />
      <Cards />
      <Contact />
    </Fragment>
  );
};
export default Home;
