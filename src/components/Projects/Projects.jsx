/* eslint-disable */
import React from "react"
import { ThemeProvider } from "styled-components"
import { Button } from "../../helpers/Button/Button"
import useProjects from "../../hooks/useProjects"
import {
  ProjectContainer,
  ProjectFlex,
  ProjectGrid,
  ProjectIntro,
  ProjectCard,
  TechWrap,
} from "./ProjectsElements"
const Projects = ({ theme }) => {
  const projects = useProjects()

  return (
    <ThemeProvider theme={theme}>
      <>
        <ProjectContainer>
          <ProjectIntro>
            <h1>Projects</h1>
          </ProjectIntro>
        </ProjectContainer>
        <ProjectFlex>
          <ProjectGrid>
            {projects.map(project => (
              <ProjectCard>
                <h1>{project.title}</h1>
                <p>{project.excerpt}</p>
                <Button to={project.slug}>Go to project</Button>
                <TechWrap>
                  <p>Technologies used: </p>
                  <span> {project.technology}</span>
                </TechWrap>
                <Links>
                <GithubLink /> 
                <SiteLink />
                </Links>
              </ProjectCard>
            ))}
          </ProjectGrid>
        </ProjectFlex>
      </>
    </ThemeProvider>
  )
}
export default Projects
