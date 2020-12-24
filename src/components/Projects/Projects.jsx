/* eslint-disable */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import {
  ProjectContainer,
  ProjectFlex,
  ProjectGrid,
  ProjectIntro,
} from './ProjectsElements'; 
const Projects = ({theme}) => { 
  return ( 
    <ThemeProvider theme={theme}>
    <>
    <ProjectContainer>
      <ProjectIntro>
        <h1>Projects</h1>
      </ProjectIntro>
      <ProjectFlex>
        <ProjectGrid>
          {/* project cards go here */}
        </ProjectGrid>
      </ProjectFlex>
    </ProjectContainer>
    </>
    </ThemeProvider>
  )
}
export default Projects;