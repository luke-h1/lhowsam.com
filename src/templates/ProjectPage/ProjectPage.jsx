import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { IoMdBrowsers } from 'react-icons/io';
import useProjectDetails from '../../hooks/useProjectDetails';
import {
  CardLgWrapper,
  Card,
  ItemTitle,
  Container,
  SiteLink,
  ProjectLgLink,
  GithubLink,
  ProjectSecondLink,
} from './ProjectPageElements';

const ProjectPage = () => {
  const project = useProjectDetails();

  return (
    <>
      <CardLgWrapper>
        <Card>
          <ItemTitle>{project.title}</ItemTitle>
          <Container>
            <img src={project.image} alt={project.title} />

            <div>
              <GithubLink
                href={project.githubLink}
                target="_blank"
                rel="noreferrer"
                aria-label="Github"
              >
                {project.githubLink && <FaGithub />}
              </GithubLink>
              <SiteLink
                className="site-link"
                href={project.siteLink}
                target="_blank"
                rel="noreferrer"
                aria-label="Live site link"
              >
                {project.siteLink && <IoMdBrowsers />}
              </SiteLink>
            </div>
            <p>{project.description && project.description}</p>
          </Container>
          <ProjectLgLink to="/projects" className="project-large-link">
            Back to projects
          </ProjectLgLink>
          <ProjectSecondLink to="/" className="project-large-link">
            Back to Home
          </ProjectSecondLink>
        </Card>
      </CardLgWrapper>
    </>
  );
};

export default ProjectPage;
