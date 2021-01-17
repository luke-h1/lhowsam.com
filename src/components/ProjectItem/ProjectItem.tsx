import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/Theme';
import { Card, ProjectTitle, ProjectExcerpt,CardLink } from './ProjectitemElements';

const ProjectItem = props => (
  <ThemeProvider theme={theme}>
    <CardLink to={props.slug}>
      <Card>
        <ProjectTitle>{props.title}</ProjectTitle>
        <ProjectExcerpt>{props.excerpt}</ProjectExcerpt>
      </Card>
    </CardLink>
  </ThemeProvider>
);
export default ProjectItem;
