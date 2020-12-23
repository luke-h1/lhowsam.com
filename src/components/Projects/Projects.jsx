import React from 'react';
import { IconContext } from 'react-icons/lib';
import useProjectDetails from '../../hooks/useProjectDetails';
import CardItem from '../../templates/CardItem/CardItem';

import {
  ProjectWrapper,
  CardWrap,
  ProjectTitle,
  CardContainer,
} from './ProjectsElements';

const Projects = () => {
  const projects = useProjectDetails();

  return (
    <IconContext.Provider value={{ color: '#fff', size: 64 }}>
      <>
        <ProjectWrapper>
          <ProjectTitle>Projects</ProjectTitle>
          <CardContainer>
            <CardWrap>
              {projects.map((project) => (
                <CardItem
                  text={project.title}
                  label={project.label}
                  path={project.slug}
                  key={project.id}
                  loading="lazy"
                />
              ))}
            </CardWrap>
          </CardContainer>
        </ProjectWrapper>
      </>
    </IconContext.Provider>
  );
};

export default Projects;
