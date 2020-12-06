/* eslint-disable react/default-props-match-prop-types */
/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
// import profileImage from '../../../static/luke.jpeg';
import {
  HomeHeroSection,
  GridContainer,
  IntroductionContainer,
  List,
  CollectionItem,
  HeroImage,
} from './HeroElements';

const Hero = ({ title, introduction }) => {
  const { image } = useStaticQuery(graphql`
  query {
    image: file(relativePath: {eq: "luke.jpeg"}) {
      sharp: childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
  
  `);
  return (
    <>
      <HomeHeroSection>
        <GridContainer>
          <h1>{title}</h1>
          <IntroductionContainer>
            <p>{introduction}</p>
            <hr />
            <List>
              <h3>More About Me</h3>
              <CollectionItem>
                🌱 I’m currently learning ... Javascript & React
              </CollectionItem>
              <CollectionItem>
                {' '}
                💚 I enjoying working on ... React, Testing methodologies and
                frameworks (following best practices, unit testing), Automation
                technologies (Ansible, bash ) & OOS projects
              </CollectionItem>
            </List>
          </IntroductionContainer>
          <HeroImage src={image.sharp.fluid.src} alt="" />
        </GridContainer>
      </HomeHeroSection>
    </>
  );
};
Hero.defaultProps = {
  title: "Hi I'm Luke 👋",
  introduction:
    "I'm passionate about various web technologies and making the web fast & accesible to everyone. I strive to write clean, robust & reusable code.",
};

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  introduction: PropTypes.string.isRequired,
};

export default Hero;
