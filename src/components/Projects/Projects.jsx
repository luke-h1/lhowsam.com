/* eslint-disable react/require-default-props */
/* eslint-disable react/default-props-match-prop-types */
import React from 'react';
import { IconContext } from 'react-icons/lib';
import PropTypes from 'prop-types';
import Image1 from '../../assets/images/Projects/Coffee-jon-tyson.jpeg';
import Image2 from '../../assets/images/Projects/Drink-carson.jpeg';
import Image3 from '../../assets/images/Projects/pink-pattern-pawel.jpeg';
import Image4 from '../../assets/images/Projects/pattern-ahmad-dirini.jpeg';
import Image5 from '../../assets/images/Projects/Shop-albert-renn.jpeg';
import CardItem from '../CardItem/CardItem';

import {
  ProjectWrapper,
  CardWrap,
  ProjectTitle,
  CardContainer,
} from './ProjectElements';

const Projects = ({ title }) => (
  <IconContext.Provider value={{ color: '#fff', size: 64 }}>
    <>
      <ProjectWrapper>
        <ProjectTitle>{title}</ProjectTitle>
        <CardContainer>
          <CardWrap>
            <CardItem
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
            />
          </CardWrap>
        </CardContainer>
      </ProjectWrapper>
    </>
  </IconContext.Provider>
);

Projects.defaultProps = {
  title: 'My Projects',
};

Projects.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Projects;
