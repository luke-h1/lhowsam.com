import styled from 'styled-components';
import { lightTheme, darkTheme } from '../../styles/Themes';
export const HomeHeroSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${lightTheme.textColor};
  min-height: 50vh;
  min-width: 100vw;
  padding: 1rem;
  background-color: ${lightTheme.backgroundColor};
`;

export const GridContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  // box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 100vw;
  min-height: 50vh;
`;

export const IntroductionContainer = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 50%;
  margin-bottom: 0.5rem;
  @media (max-width: 850px) {
    max-width: 80%;
  }

  p {
    margin: 0.7rem 0 0.7rem 0;
    font-size: 20px;
    letter-spacing: 1.6;
    line-height: 1.98rem;
  }
`;

export const List = styled.ul`
  list-style-type: none;
  h3 {
    margin-top: 10px;
    text-align: center;
  }
`;

export const CollectionItem = styled.li`
  margin: 10px 0 10px 0;
  font-size: 20px;
`;

export const HeroImage = styled.img`
  padding-right: 0;
  max-width: 200px;
  border-radius: 20px;
  // filter: grayscale(100%);

  &:hover {
    transition-duration: 0.1s;
    filter: drop-shadow(10px 10px 35px rgba(110, 32, 209, 1));
    transition-property: opacity;
    background: rgb(2, 0, 36);
    transition: all ease 0.2s;
  }
  img {
    border: 0;
    max-width: 100%;
    vertical-align: middle;
    display: inline-block;
    animation: fadeIn ease-in 0.5s;
    -webkit-animation: fadeIn ease 0.5s;
    -moz-animation: fadeIn ease 0.5s;
    -o-animation: fadeIn ease 0.5s;
    -ms-animation: fadeIn ease 0.5s;
  }
`;
