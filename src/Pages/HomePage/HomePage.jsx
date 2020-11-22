import React, { useState } from 'react';
import Footer from '../../components/Footer/Footer';
import Hero from '../../components/Hero/Hero';
import Navbar from '../../components/Navbar/Navbar';
import ProjectShowCase from '../../components/ProjectShowCase/ProjectShowCase';
const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ProjectShowCase />
      <Footer />
    </>
  );
};
export default Home;
