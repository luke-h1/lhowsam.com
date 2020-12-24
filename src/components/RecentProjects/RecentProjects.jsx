/* eslint-disable */
import React from 'react';
import { Button } from '../../helpers/Button/Button';
import { ThemeProvider } from 'styled-components';
import { 
ProjectCard,
ProjectContainer,
ProjectWrap,
ProjectFlex,
} from './RecentProjectsElements'; 


const RecentProjects = ({theme}) => { 
  return ( 
    <ThemeProvider theme={theme}>
    <>
    <ProjectWrap>
    <ProjectFlex>
      <ProjectContainer>
        <ProjectCard>
          <h1>
            Project title goes here
          </h1>
          <p>
            Project short description goes here 
          </p>
          <Button to='/project/slug'>Go to project</Button>
        </ProjectCard>
        <ProjectCard>
          <h1>
            Project title goes here
          </h1>
          <p>
            Project short description goes here 
          </p>
          <Button to='/project/slug'>Go to project</Button>
        </ProjectCard>
        
      </ProjectContainer>
      </ProjectFlex>
    </ProjectWrap>
    </>
    </ThemeProvider>

  )
}
export default RecentProjects;