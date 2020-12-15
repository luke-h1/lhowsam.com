import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../../components/layout';
import ProjectPage from '../../templates/ProjectPage/ProjectPage';

import SEO from '../../components/seo';

const Automation = () => {
  // eslint-disable-next-line no-unused-vars
  const { image } = useStaticQuery(graphql`
  query {
    image: file(relativePath: {eq: "project-images/Image4.jpeg"}) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO title="Projects - Quotes App" />

      <ProjectPage
        title="Breaking Bad Quotes App"
        src={image.sharp.fluid.src}
        alt="Macbook in Dark room"
        desc=" In this project I built a quote app that uses React hooks to display random breaking bad quotes."
        github="https://github.com/luke-h1/breaking-bad-quotes-react"
        site="https://breaking-bad-quotes.vercel.app/"
      />
    </Layout>
  );
};
export default Automation;
