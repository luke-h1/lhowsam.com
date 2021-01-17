import React from 'react';
import styled from 'styled-components';
import SiteLink from '../components/Icons/SiteLink';
import GithubLink from '../components/Icons/GithubLink';

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

const Project = () => (
  <>
    <ProjectWrapper>
      <ProjectTitle>title of project</ProjectTitle>
      <ProjectLinks>
        <GithubLink link="https://github.com" />
        <SiteLink link="http://localhost:3000" />
      </ProjectLinks>
      <ProjectBody>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam laborum obcaecati perferendis harum iure, eaque similique eius
        quam eveniet accusantium reprehenderit laudantium et voluptas esse ea, minima odio veniam aliquam.
      </ProjectBody>
      <ProjectBody>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam laborum obcaecati perferendis harum iure, eaque similique eius
        quam eveniet accusantium reprehenderit laudantium et voluptas esse ea, minima odio veniam aliquam.
      </ProjectBody>
      <ProjectBody>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam laborum obcaecati perferendis harum iure, eaque similique eius
        quam eveniet accusantium reprehenderit laudantium et voluptas esse ea, minima odio veniam aliquam.
      </ProjectBody>
    </ProjectWrapper>
  </>
);
export default Project;
