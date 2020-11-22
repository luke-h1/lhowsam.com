import React from 'react';
import Footer from '../../components/Footer/Footer';
import Hero from '../../components/Hero/Hero';
import Navbar from '../../components/Navbar/Navbar';
import ProjectShowCase from '../../components/ProjectShowCase/ProjectShowCase';
import Skills from '../../components/Skills/Skills';
const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <ProjectShowCase />
      <Footer />
    </>
  );
};
export default Home;
