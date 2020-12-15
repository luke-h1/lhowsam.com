import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../../components/layout';
import ProjectPage from '../../templates/ProjectPage/ProjectPage';
import SEO from '../../components/seo';

const developerNotes = () => {
  // eslint-disable-next-line no-unused-vars
  const { image } = useStaticQuery(graphql`
  query {
    image: file(relativePath: {eq: "project-images/Image7.jpeg"}) {
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
      <SEO title="Projects - Dev notes" />

      <ProjectPage
        title="Developer Notes"
        src={image.sharp.fluid.src}
        alt="lights"
        desc="In this app I made a Gatsby site which contains useful markdown files about different technologies & languages I have learned."
        github="https://github.com/luke-h1/developer-notes"
        site="https://dev-notes-mi.vercel.app/"
      />
    </Layout>
  );
};
export default developerNotes;
