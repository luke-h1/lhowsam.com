import { ThemeProvider } from '@emotion/react';
import React from 'react';
import ProjectItem from '../ProjectItem/ProjectItem';
import { Wrapper, Title } from './ShowCaseProjectElements';

const ShowCaseProject = ({ theme }) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Wrapper>
          <Title>Projects</Title>
          <ProjectItem />
          <ProjectItem />
          <ProjectItem />

        </Wrapper>
      </>
    </ThemeProvider>
  );
};
export default ShowCaseProject;
