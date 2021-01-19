/* eslint-disable */
import React from 'react';
import styled from 'styled-components';
import SiteLink from '../components/Icons/SiteLink';
import GithubLink from '../components/Icons/GithubLink';
import SEO from '../components/seo';

const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 30vh;
  max-width: 1000px;
  margin: 0 auto;
`;

const ProjectTitle = styled.h1`
  font-size: clamp(1rem, 8vw, 2.6rem);
`;

const ProjectLinks = styled.div`
  margin-bottom: 1.5rem;
`;

const ProjectBody = styled.p`
  margin: 0.7rem 0 0.7rem 0;
  font-size: 19px;
`;

const Project = props => (
  <>
    <SEO title={props.title} description={props.descriptionOne} />
    <ProjectWrapper>
      <ProjectTitle>{props.title}</ProjectTitle>
      <ProjectLinks>
        <GithubLink link={props.ghLink} />
        {props.siteLink ? <SiteLink link={props.siteLink} /> : ''}
      </ProjectLinks>
      <ProjectBody>{props.descriptionOne}</ProjectBody>
      <ProjectBody>{props.descriptionTwo}</ProjectBody>
    </ProjectWrapper>
  </>
);
export default Project;
