import React from 'react';
import { Helmet } from 'react-helmet';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import Projects from '../../components/Projects/Projects';

const ProjectPage = () => (
  <>
    <Helmet>
      <title>Projects</title>
      <meta name="description" content="Project page" />
    </Helmet>
    <Navbar />
    <Projects />
    <Footer />
  </>
);
export default ProjectPage;
