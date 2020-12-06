import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import {
  HomeHeroSection,
  GridContainer,
  IntroductionContainer,
  List,
  CollectionItem,
  HeroImage,
} from './HeroElements';

const Hero = () => {
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
          <h1>Hi I'm Luke 👋</h1>
          <IntroductionContainer>
            <p>
              I'm passionate about various web technologies and making the web fast &
              accesible to everyone. I strive to write clean, robust & reusable code.
            </p>
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

export default Hero;
