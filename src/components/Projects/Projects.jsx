/* eslint-disable react/require-default-props */
/* eslint-disable react/default-props-match-prop-types */
import React from 'react';
import { IconContext } from 'react-icons/lib';
import PropTypes from 'prop-types';
import useProjectDetails from '../../hooks/useProjectDetails';
import CardItem from '../../templates/CardItem/CardItem';

import {
  ProjectWrapper,
  CardWrap,
  ProjectTitle,
  CardContainer,
} from './ProjectsElements';

const Projects = ({ title }) => {
  const projects = useProjectDetails();

  return (
    <IconContext.Provider value={{ color: '#fff', size: 64 }}>
      <>
        <ProjectWrapper>
          <ProjectTitle>{title}</ProjectTitle>
          <CardContainer>
            <CardWrap>
              {projects.map((project) => (
                <CardItem
                  src={project.image.sharp.fluid.src}
                  text={project.title}
                  label={project.label}
                  path={project.slug}
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
Projects.defaultProps = {
  title: 'My Projects',
};

Projects.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Projects;
