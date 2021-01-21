import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/Theme';
import { Card, ProjectTitle, ProjectExcerpt } from './ProjectItemStyles';

const ProjectItem = () => (
  <ThemeProvider theme={theme}>
    <Card>
      <ProjectTitle>Hello</ProjectTitle>
      <ProjectExcerpt>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, atque blanditiis adipisci ipsum dolor odit quas fugit
        reiciendis
      </ProjectExcerpt>
    </Card>
  </ThemeProvider>
);
export default ProjectItem;
