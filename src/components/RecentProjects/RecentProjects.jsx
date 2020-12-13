import React from 'react';
import useRecentProjects from '../../hooks/useRecentProjects';
import {
  ShowCaseWrapper,
  ShowCaseContainer,
  ShowCaseTitle,
  Small,
  ProjectLink,
} from './RecentProjectsElements';
import CardItem from '../../templates/CardItem/CardItem';

const RecentProjects = () => {
  const Recent = useRecentProjects();
  return (
    <>
      <ShowCaseWrapper>
        <ShowCaseTitle>Recent Projects</ShowCaseTitle>
        <Small>
          <ProjectLink to="/projects">See more projects</ProjectLink>
        </Small>
        <ShowCaseContainer>
          {Recent && Recent.map((project) => (
            <CardItem
              src={project.image.sharp.fluid.src}
              text={project.title}
              label={project.label}
              path={project.slug}
              loading="lazy"
              key={project.slug}
            />
          ))}
        </ShowCaseContainer>
      </ShowCaseWrapper>
    </>
  );
};
export default RecentProjects;
