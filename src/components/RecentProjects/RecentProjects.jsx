import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import {
  ShowCaseWrapper,
  ShowCaseContainer,
  ShowCaseTitle,
  Small,
  ProjectLink,
} from './RecentProjectsElements';
import CardItem from '../../templates/CardItem/CardItem';
import Image1 from '../../../content/assets/project-images/Image1.jpeg';
import Image2 from '../../../content/assets/project-images/Image2.jpeg';
import Image3 from '../../../content/assets/project-images/Image3.jpeg';

const RecentProjects = () => {
  const data = useStaticQuery(graphql`
  query  {
    allFile(filter: {extension: {regex: "/(jpg)|(jpeg)|(png)/"}, relativeDirectory: {eq: "project-images"}}) {
      edges {
        node {
          id
          name
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
  `);
  return (
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
};
export default RecentProjects;
