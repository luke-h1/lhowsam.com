/* eslint-disable */
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const HeroSection = styled.div`
  padding: 0 60px;
  color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 1100px) {
    padding: 30px;
  }
`;

const HeroWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 820px;
  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
  @media (max-width: 468px) {
    grid-template-rows: 600px;
  }
`;

const ColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  p {
    font-size: 16px;
    line-height: 2.3;
  }
  h1 {
    font-size: 48px;
    @media (max-width: 1100px) {
      font-size: 80px;
    }
    @media (max-width: 468px) {
      h1 {
        font-size: 32px;
      }
    }
  }
`;

const ColumnRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledImage = styled.img`
  width: 60%;
  height: 60%;
  @media (max-width: 1100px) {
    width: 40%;
    height: 40%;
  }
`;

const Hero = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "luke.png" }) {
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
      <HeroSection>
        <HeroWrapper>
          <ColumnLeft>
            <h1>Hey, I do xyz and lorem ipsum dolor amet stuff</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur similique iure, fugit dolore libero delectus sint sapiente
              accusamus mollitia dolorum earum omnis odit repellat voluptatibus nostrum! Nobis blanditiis doloremque cupiditate.
            </p>
          </ColumnLeft>
          <ColumnRight>
            <StyledImage src={image.sharp.fluid.src} />
          </ColumnRight>
        </HeroWrapper>
      </HeroSection>
    </>
  );
};
export default Hero;
