import styled from 'styled-components';
import { lightTheme, darkTheme } from '../../styles/Themes';

export const SkillWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  white-space: nowrap;
  align-items: center;
  min-height: 45vh;
  margin: 0 auto;
  background-color: ${lightTheme.backgroundColor};
`;

export const Title = styled.h1`
  font-size: 30px;
  text-align: center;
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
  background-color: ${lightTheme.hoverColor};
  color: ${lightTheme.textColor};
  text-align: center;
  padding: 8px;
  border-radius: 8px;
  margin: 0 8px 8px 8px;
`;
