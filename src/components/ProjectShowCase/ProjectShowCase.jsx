import React from 'react';
import {
  ShowCaseWrapper,
  ShowCaseContainer,
  ShowCaseTitle,
  Small,
  ProjectLink,
} from './ProjectShowCaseElements';
import CardItem from '../../templates/CardItem/CardItem';
import Image1 from '../../assets/images/Projects/Coffee-jon-tyson.jpeg';
import Image2 from '../../assets/images/Projects/Drink-carson.jpeg';
import Image3 from '../../assets/images/Projects/pink-pattern-pawel.jpeg';

const ProjectShowCase = () => (
  <>
    <ShowCaseWrapper>
      <ShowCaseTitle>Recent Projects</ShowCaseTitle>
      <Small>
        <ProjectLink to="/projects">See more projects</ProjectLink>
      </Small>
      <ShowCaseContainer>
        <CardItem
          src={Image1}
          text="Personal Site"
          label="React, Vanilla JS, SCSS, CSS"
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
      </ShowCaseContainer>
    </ShowCaseWrapper>
  </>
);
export default ProjectShowCase;
