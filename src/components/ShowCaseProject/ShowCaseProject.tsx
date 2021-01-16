import { ThemeProvider } from '@emotion/react';
import React from 'react';
import ProjectItem from '../ProjectItem/ProjectItem';
import { Wrapper } from './ShowCaseProjectElements';

const ShowCaseProject = ({ theme }) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Wrapper>
          <ProjectItem />
        </Wrapper>
      </>
    </ThemeProvider>
  );
};
export default ShowCaseProject;
