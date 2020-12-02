import React from 'react';
import PropTypes from 'prop-types';
import { FaGithub } from 'react-icons/fa';
import { IoMdBrowsers } from 'react-icons/io';
import {
  ProjectWrapper,
  Card,
  ItemTitle,
  Container,
  SiteLink,
  ProjectLgLink,
  GithubLink,
  ProjectSecondLink,
} from './ProjectElements';

const CardItem = (props) => {
  const {
    src, alt, title, site, desc, github,
  } = props;
  return (
    <>
      <ProjectWrapper>
        <Card>
          <ItemTitle>{title}</ItemTitle>
          <Container>
            <img src={src} alt={alt} />
            <div>
              <GithubLink
                href={github}
                target="_blank"
                rel="noreferrer"
                aria-label="Github"
              >
                {github ? <FaGithub /> : null}
              </GithubLink>
              <SiteLink
                className="site-link"
                href={site}
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
      </ProjectWrapper>
    </>
  );
};

CardItem.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  site: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
};
export default CardItem;
