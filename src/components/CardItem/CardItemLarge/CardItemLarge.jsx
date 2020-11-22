import React from 'react';
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
} from './CardItemLgElements';

const CardItem = (props) => {
  return (
    <>
      <CardLgWrapper>
        <Card>
          <ItemTitle>{props.title}</ItemTitle>
          <Container>
            <img
              src={props.src}
              alt={props.alt}
              // className="project-large-image"
            />

            <div>
              <GithubLink
                href={props.github}
                target="_blank"
                rel="noreferrer"
                aria-label="Github"
              >
                {props.github ? <FaGithub /> : null}
              </GithubLink>
              <SiteLink
                className="site-link"
                href={props.site}
                target="_blank"
                rel="noreferrer"
                aria-label="Live site link"
              >
                {props.site ? <IoMdBrowsers /> : null}
              </SiteLink>
            </div>
            <p>{props.desc}</p>
          </Container>
          <ProjectLgLink to="/projects" className="project-large-link">
            Back to projects
          </ProjectLgLink>
          <ProjectLgLink to="/" className="project-large-link">
            Back to Home
          </ProjectLgLink>
        </Card>
      </CardLgWrapper>
    </>
  );
};
export default CardItem;
