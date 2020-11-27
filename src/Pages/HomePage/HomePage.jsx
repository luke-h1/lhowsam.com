import React from 'react';
import Helmet from 'react-helmet';
import Footer from '../../components/Footer/Footer';
import Hero from '../../components/Hero/Hero';
import Navbar from '../../components/Navbar/Navbar';
import ProjectShowCase from '../../components/ProjectShowCase/ProjectShowCase';
import Skills from '../../components/Skills/Skills';

const Home = () => (
  <>
    <Helmet>
      <title>Luke H - Home</title>
      <meta name="description" content="Home page" />
    </Helmet>
    <Navbar />
    <Hero />
    <Skills />
    <ProjectShowCase />
    <Footer />
  </>
);
export default Home;
