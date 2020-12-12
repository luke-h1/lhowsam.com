import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../../components/layout';
import ProjectPage from '../../templates/ProjectPage/ProjectPage';
import SEO from '../../components/seo';

const DrinkApp = () => {
  // eslint-disable-next-line no-unused-vars
  const { image } = useStaticQuery(graphql`
  query {
    image: file(relativePath: {eq: "project-images/Image1.jpeg"}) {
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
      <SEO title="Projects - Drink App" />

      <ProjectPage
        title="Cocktail Recipe App"
        src={image.sharp.fluid.src}
        alt="lights"
        desc="In this app I made a Cocktail Recipe app using React hooks & SCSS that
   pulls data from the CocktailDB API. This was a really fun project to work on and was one of the first projects I converted to React JS (from vanilla JS)"
        label="React,SASS"
        github="https://github.com/luke-h1/cocktail-recipe-app "
        site="https://cocktail-recipe-app.vercel.app/"
      />
    </Layout>
  );
};
export default DrinkApp;
