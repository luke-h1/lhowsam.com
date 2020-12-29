/* eslint-disable */
import React from 'react';
import SEO from '../seo';
import { ThemeProvider } from 'styled-components';
import { Button } from '../../helpers/Button/Button';
import useProjects from '../../hooks/useProjects';
import {
  ProjectContainer,
  ProjectFlex,
  ProjectGrid,
  ProjectIntro,
  ProjectCard,
  TechWrap,
  Links,
  GithubLink,
  SiteLink,
  ButtonWrap,
} from './ProjectsElements';

const Projects = ({ theme }) => {
  const projects = useProjects();

  return (
    <ThemeProvider theme={theme}>
      <>
      <SEO title="Projects" />

        <ProjectContainer>
          <ProjectIntro>
            <h1>Projects</h1>
          </ProjectIntro>
        </ProjectContainer>
        <ProjectFlex>
          <ProjectGrid>
            {projects.map((project) => (
              <ProjectCard key={project.id}>
                <h1 style={{ color: '#000' }}>{project.title}</h1>
                <ButtonWrap>
                  <Button to={project.slug}>Go to project</Button>
                </ButtonWrap>
                <TechWrap>
                  <p>Technologies used: </p>
                  <span>
                    {' '}
                    {project.technology}
                  </span>
                </TechWrap>
                <Links>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {project.githubLink ? <GithubLink /> : ''}
                  </a>
                  <a
                    href={project.siteLink}
                    rel="noreferrer"
                  >
                    {project.siteLink ? <SiteLink /> : ''}
                  </a>
                </Links>
              </ProjectCard>
            ))}
          </ProjectGrid>
        </ProjectFlex>
      </>
    </ThemeProvider>
  );
};
export default Projects;
