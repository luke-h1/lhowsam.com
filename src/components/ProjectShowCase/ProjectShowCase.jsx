import React from 'react';
import {
  ShowCaseWrapper,
  ShowCaseContainer,
  ShowCaseTitle,
} from './ProjectShowCaseElements';

import CardItem from '../CardItem/CardItem';
import Image1 from '../../images/Projects/Coffee-jon-tyson.jpeg';
import Image2 from '../../images/Projects/Drink-carson.jpeg';
import Image3 from '../../images/Projects/pink-pattern-pawel.jpeg';
const ProjectShowCase = () => {
  return (
    <>
      <ShowCaseWrapper>
        <ShowCaseTitle>Recent Projects</ShowCaseTitle>

        <ShowCaseContainer>
          <CardItem
            src={Image1}
            text="Personal Site"
            label="React, Vanilla JS, SCSS, CSS"
            path="personal-site"
            loading="lazy"
          />
          <CardItem
            src={Image2}
            text="Cocktail Recipe App"
            label="React Hooks, SASS"
            path="drink-app"
            loading="lazy"
          />
          <CardItem
            src={Image3}
            text="Automation"
            label="Ansible, Bash, CI"
            path="Automation"
            loading="lazy"
          />
        </ShowCaseContainer>
      </ShowCaseWrapper>
    </>
  );
};
export default ProjectShowCase;
