/* eslint-disable */
import React from "react"
import { Button } from "../../helpers/Button/Button"
import { ThemeProvider } from "styled-components"
import {
  ProjectCard,
  ProjectContainer,
  ProjectWrap,
  ProjectFlex,
  ProjectTitle,
  Links,
  TechWrap,
  GithubLink,
  SiteLink,
  ButtonWrap,

} from "./RecentProjectsElements"
import { useStaticQuery, graphql } from "gatsby"

const RecentProjects = ({ theme }) => {
 

  return (
    <ThemeProvider theme={theme}>
      <>
        <ProjectWrap>
          <ProjectTitle>Recent Projects</ProjectTitle>
          <ProjectFlex>
            <ProjectContainer>
              {data.allProjectDataJson.edges.map(project => (
                 <ProjectCard key={project.node.id}>
                 <h1>{project.node.title}</h1>
                 <p>{project.node.excerpt}</p>
                 <ButtonWrap>
                 <Button to={project.node.slug}>Go to project</Button>
                 </ButtonWrap>
                 <TechWrap>
                   <p>Technologies used: </p>
                   <span> {project.node.technology}</span>
                 </TechWrap>
                 <Links>
                   <a
                     href={project.node.githubLink}
                     target="_blank"
                     referrer="noreferrer noopener"
                   >
                     {project.node.githubLink ? <GithubLink /> : ""}
                   </a>
                   <a
                     href={project.node.siteLink}
                     target="_blank"
                     referrer="noreferrer noopener"
                   >
                     {project.node.siteLink ? <SiteLink /> : ""}
                   </a>
                 </Links>
               </ProjectCard>
              ))}
            </ProjectContainer>
          </ProjectFlex>
        </ProjectWrap>
      </>
    </ThemeProvider>
  )
}
export default RecentProjects
