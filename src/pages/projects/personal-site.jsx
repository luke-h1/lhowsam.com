import React from 'react';
import Layout from '../../components/layout';
import ProjectPage from '../../templates/ProjectPage/ProjectPage';
import Image1 from '../../../content/assets/project-images/Image2.jpeg';
import SEO from '../../components/seo';

const Automation = () => (
  <Layout>
    <SEO title="Projects - Personal Site" />

    <ProjectPage
      title="Personal Site (This one!)"
      src={Image1}
      alt="Neon sign that says: Coffee"
      desc="This is a project I've worked on since I started learning web development. It has been through many iterations (Vanilla javascript to React, React to Gatsby,  CSS to SASS and SASS to styled components to name a few...) and it has helped me challenge myself and learn a lot about web development in general. I've really enjoyed spending time improving this site and thinking of new features I can add to this site."
      label="Javascript, React,CSS, SCSS, styled-components"
      github="https://github.com/luke-h1/lhowsam.com"
      site="https://lhowsam.com"
    />
  </Layout>
);

export default Automation;
