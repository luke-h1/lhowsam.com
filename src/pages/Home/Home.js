import React, { Fragment } from 'react';
import Cards from '../../components/Cards/Cards';
import HeroSection from '../../components/HeroSection/HeroSection';
import Skills from '../../components/Skills/Skills';
const Home = () => {
  return (
    <Fragment>
      <HeroSection />
      <Skills />
      <Cards />
    </Fragment>
  );
};
export default Home;
