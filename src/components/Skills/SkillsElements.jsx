/* eslint-disable */
import styled from 'styled-components';
import { lightTheme, darkTheme } from '../../styles/Themes';

export const SkillWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  white-space: nowrap;
  align-items: center;
  min-height: 22vh;
  margin: 0 auto;
  background-color: ${(props) => props.theme.primaryBackgroundColor}; 
`;

export const Title = styled.h1`
  font-size: 30px;
  text-align: center;
  color: ${(props) => props.theme.primaryTitleColor}

`;

export const SkillBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const SkillTitleH3 = styled.h3`
  text-align: center;
`;

export const SkillsHeader = styled.div`
  align-items: center;
`;

export const Skill = styled.p`
  background-color: ${(props) => props.theme.primaryHoverColor}; 
  color: ${(props) => props.theme.textColor}; 
  text-align: center;
  padding: 8px;
  border-radius: 8px;
  margin: 0 8px 8px 8px;
`;
