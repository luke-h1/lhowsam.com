import React from 'react';
import PropTypes from 'prop-types';
import { FaGithub } from 'react-icons/fa';
import { IoMdBrowsers } from 'react-icons/io';
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

const ProjectPage = (props) => {
  const {
    src, alt, title, site, desc, githubLink, siteLink,
  } = props;
  return (
    <>
      <CardLgWrapper>
        <Card>
          <ItemTitle>{title}</ItemTitle>
          <Container>
            <img src={src} alt={alt} />

            <div>
              <GithubLink
                href={githubLink}
                target="_blank"
                rel="noreferrer"
                aria-label="Github"
              >
                {githubLink ? <FaGithub /> : null}
              </GithubLink>
              <SiteLink
                className="site-link"
                href={siteLink}
                target="_blank"
                rel="noreferrer"
                aria-label="Live site link"
              >
                {site ? <IoMdBrowsers /> : null}
              </SiteLink>
            </div>
            <p>{desc}</p>
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

ProjectPage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  site: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  githubLink: PropTypes.string.isRequired,
  siteLink: PropTypes.string.isRequired,

};
export default ProjectPage;
