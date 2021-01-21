import { ThemeProvider } from 'styled-components';
import React from 'react';
import ProjectItem from '../ProjectItem/ProjectItem';
import { Wrapper, Title, TitleWrap } from './ShowCaseProjectStyles';

const ShowCaseProject = ({ theme }) => (
  <ThemeProvider theme={theme}>
    <>
      <TitleWrap>
        <Title>Projects</Title>
      </TitleWrap>
      <Wrapper>
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
      </Wrapper>
    </>
  </ThemeProvider>
);
export default ShowCaseProject;
