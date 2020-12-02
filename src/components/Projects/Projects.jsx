/* eslint-disable */
import React from 'react';
import Image1 from '../../../static/Coffee-jon-tyson.jpeg';
import Image2 from '../../../static/Drink-carson.jpeg';
import Image3 from '../../../static/pink-pattern-pawel.jpeg';
import Image4 from '../../../static/pattern-ahmad-dirini.jpeg';
import Image5 from '../../../static/Shop-albert-renn.jpeg';
import CardItem from '../../templates/CardItem/CardItem';

import {
  ProjectWrapper,
  CardWrap,
  ProjectTitle,
  CardContainer,
} from './ProjectsElements';


// TODO: CONVERT THIS TO USE GRAPHQL INSTEAD OF PROPS 

const Projects = () => {
  return (
  <>
    <ProjectWrapper>
      <ProjectTitle>My Projects</ProjectTitle>
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
);
}
export default Projects;
