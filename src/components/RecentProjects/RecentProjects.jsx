import React from 'react';
import {
  ShowCaseWrapper,
  ShowCaseContainer,
  ShowCaseTitle,
  Small,
  ProjectLink,
} from './RecentProjectsElements';
import CardItem from '../../templates/CardItem/CardItem';
import Image1 from '../../../static/Coffee-jon-tyson.jpeg';
import Image2 from '../../../static/Drink-carson.jpeg';
import Image3 from '../../../static/pink-pattern-pawel.jpeg';

const RecentProjects = () => (
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
export default RecentProjects;
