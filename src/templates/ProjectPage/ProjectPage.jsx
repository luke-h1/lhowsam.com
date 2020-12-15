/* eslint-disable */
import React from 'react';
import { graphql } from 'gatsby'
import { FaGithub } from 'react-icons/fa';
import { IoMdBrowsers } from 'react-icons/io';
import useProjectDetails from '../../hooks/useProjectDetails';
import Layout from '../../components/layout';
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

export const query = graphql`
query {
  allProjectDataJson {
    edges {
      node {
        id
        title
        slug
        label
        githubLink
        siteLink
        image {
          sharp: childImageSharp {
            fluid {
             src
            }
          }
        }
      }
    }
  }
}
`



const ProjectPage = ({ data: { project } }) => (
  <>
    <Layout>
      <CardLgWrapper>
        <Card>
          <ItemTitle>{project.title}</ItemTitle>
          <Container>
            <img src={image} alt={title} />
            <div>
              <GithubLink
                href={githubLink}
                target="_blank"
                rel="noreferrer"
                aria-label="Github"
              >
                {githubLink && <FaGithub />}
              </GithubLink>
              <SiteLink
                className="site-link"
                href={siteLink}
                target="_blank"
                rel="noreferrer"
                aria-label="Live site link"
              >
                {siteLink && <IoMdBrowsers />}
              </SiteLink>
            </div>
            <p>{description && description}</p>
          </Container>
          <ProjectLgLink to="/projects" className="project-large-link">
            Back to projects
          </ProjectLgLink>
          <ProjectSecondLink to="/" className="project-large-link">
            Back to Home
          </ProjectSecondLink>
        </Card>
      </CardLgWrapper>
    </Layout>
  </>
);

export default ProjectPage;
