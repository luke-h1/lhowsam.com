/* eslint-disable */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Button } from '../../helpers/Button/Button';
import {
  ProjectContainer,
  ProjectFlex,
  ProjectGrid,
  ProjectIntro,
  ProjectCard,
} from './ProjectsElements'; 
const Projects = ({theme}) => { 
  return ( 
    <ThemeProvider theme={theme}>
    <>
    <ProjectContainer>
      <ProjectIntro>
        <h1>Projects</h1>
      </ProjectIntro>
     
    </ProjectContainer>
    <ProjectFlex>
        <ProjectGrid>
        <ProjectCard>
          <h1>
            Project title goes here
          </h1>
          <p>
            Project short description goes here 
          </p>
          <Button to='/project/slug'>Go to project</Button>
        </ProjectCard>
        </ProjectGrid>
      </ProjectFlex>
    </>
    </ThemeProvider>
  )
}
export default Projects;