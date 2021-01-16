import { ThemeProvider } from '@emotion/react';
import React from 'react';
import ProjectItem from '../ProjectItem/ProjectItem';
import { Wrapper, Title, TitleWrap } from './ShowCaseProjectElements';

const ShowCaseProject = ({ theme }) => {
  return (
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
};
export default ShowCaseProject;
