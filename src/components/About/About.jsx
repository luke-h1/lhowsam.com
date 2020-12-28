/* eslint-disable */
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import SEO from '../seo';
import { ThemeProvider } from 'styled-components';
import {
  AboutContainer,
  AboutFlex,
  AboutIntro,
  AboutSection,
  Container,
  Col,
  Col2,
  Row,
  TextWrapper,
  TopLine,
  Heading,
  SubTitle,
  ImgWrapper,
  Image,
} from './AboutElements';

const About = ({ theme }) => {
  const { image } = useStaticQuery(graphql`
  query {
    image: file(relativePath: {eq: "luke.png"}) {
      sharp: childImageSharp {
        fluid(grayscale: true) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
  
  `);
  return (
    <ThemeProvider theme={theme}>
      <>
      <SEO title="About" />

        <AboutContainer>
          <AboutIntro>
            <h1>About</h1>
          </AboutIntro>
        </AboutContainer>
        <AboutFlex>
          <AboutSection>
            <Container>
              <Row>
                <Col>
                  <TextWrapper>
                    <TopLine />
                    <Heading>
                      Hi, I'm luke. I enjoy working with React, Node & various testing technologies.
                      <br />
                      <br />
                      I'm passionate about various web technologies and making the web fast & accesible to everyone. I strive to write clean, robust & reusable code.
                    </Heading>
                    <SubTitle />
                  </TextWrapper>
                </Col>
                <Col2>
                  <ImgWrapper>
                    <Image src={image.sharp.fluid.src} alt='My profile Image'/>
                  </ImgWrapper>
                </Col2>
              </Row>
            </Container>
          </AboutSection>
        </AboutFlex>
      </>
    </ThemeProvider>
  );
};
export default About;
