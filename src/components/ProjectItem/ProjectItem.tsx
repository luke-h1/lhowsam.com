import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/Theme';
import { Card, ProjectTitle, ProjectExcerpt } from './ProjectitemElements';

const ProjectItem = (props) => (
  <ThemeProvider theme={theme}>
    <Card>
      <ProjectTitle>{props.title}</ProjectTitle>
      <ProjectExcerpt>
        {props.excerpt}
      </ProjectExcerpt>
    </Card>
  </ThemeProvider>
);
export default ProjectItem;
