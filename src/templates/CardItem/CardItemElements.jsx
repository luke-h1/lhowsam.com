/* eslint-disable */
import styled from 'styled-components';
import { Link } from 'gatsby';
import { lightTheme, darkTheme } from '../../styles/Themes';

export const CardItem1 = styled.div`
  display: flex;
  flex: 1;
  margin: 0 1rem;
  border-radius: 10px;
  background: #fff;
  max-width: 250px;
  min-width: 250px;
`;

export const CardImage = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: block;
  width: 100%;
  max-width: 100%;
  height: 100%;
  max-height: 100%;
  object-fit: cover;
  transition: all 0.2s linear;
  &:hover {
    transform: scale(1.1);
  }
`;

export const CardLink = styled(Link)`
  color: #000;

  display: flex;
  flex-direction: column;
  width: 100%;
  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.17);
  -webkit-filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));
  filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));
  border-radius: 10px;
  overflow: hidden;
  text-decoration: none;
`;

export const CardFigure = styled.figure`
  position: relative;
  width: 100%;
  padding-top: 67%;
  overflow: hidden;
  &::after {
    content: attr(data-category);
    position: absolute;
    color: #000;

    bottom: 0;
    margin-left: 10px;
    padding: 6px 8px;
    max-width: calc((100%) - 60px);
    font-size: 12px;
    font-weight: 700;
    background-color: ${(props) => props.theme.primaryHoverColor}; 
    box-sizing: border-box;
  }
`;

export const CardItemInfo = styled.div`
  padding: 20px 30px 30px;
`;

export const CardText = styled.h5`
  color: ${(props) => props.theme.darkTextColor}; 
  font-size: 18px;
  line-height: 24px;
`;
