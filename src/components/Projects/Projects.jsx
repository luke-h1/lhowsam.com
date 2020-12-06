/* eslint-disable react/require-default-props */
/* eslint-disable react/default-props-match-prop-types */
/* eslint-disable */
import React from 'react';
import { IconContext } from 'react-icons/lib';
import { graphql, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import Image1 from '../../../content/assets/project-images/Image1.jpeg';
import Image2 from '../../../content/assets/project-images/Image2.jpeg';
import Image3 from '../../../content/assets/project-images/Image3.jpeg';
import Image4 from '../../../content/assets/project-images/Image4.jpeg';
import Image5 from '../../../content/assets/project-images/Image5.jpeg';
import useProjectDetails from '../../hooks/useProjectDetails';
import CardItem from '../../templates/CardItem/CardItem';
// import ProjectData from '../../data/ProjectData';

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
            {projects.map((project) =>  (
                <CardItem
                src={Image1}
                text={project.title}
                label={project.label}
                path={project.slug}
                loading="lazy"
              />
            ))}
            {/* <CardItem
              src={Image1}
              text="Personal Site"
              label="React, Vanilla JS, SCSS, CSS, styled-components"
              path="/projects/personal-site"
              loading="lazy"
            />
            <CardItem
              src={Image2}
              text="Cocktail Recipe App"
              label="React Hooks, SASS"
              path="/projects/drink-app"
              loading="lazy"
            />
            <CardItem
              src={Image3}
              text="Automation"
              label="Ansible, Bash, CI"
              path="/projects/Automation"
              loading="lazy"
            />
            <CardItem
              src={Image4}
              text="Form Validator"
              label="Vanilla JS"
              path="/projects/form-validator"
              loading="lazy"
            />
            <CardItem
              src={Image5}
              text="Quotes App"
              label="React, SCSS"
              path="/projects/quotes-app"
              loading="lazy"
            /> */}
          </CardWrap>
        </CardContainer>
      </ProjectWrapper>
    </>
  </IconContext.Provider>
);
}
Projects.defaultProps = {
  title: 'My Projects',
};

Projects.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Projects;
