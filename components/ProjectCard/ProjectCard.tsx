import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const Card = styled.div`
  padding: 0.75rem;
  width: 500px;

  margin: 1rem 0 1rem 0;
  text-align: left;
  color: inherit;
  text-decoration: none;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;
  &:hover,
  &:focus,
  &:active {
    transition: all 0.5s;
    border-color: #0070f3; // do other stuff here
    cursor: pointer;
  }
  h3 {
    margin: 0 0 1rem 0;
    font-size: 1.5rem;
  }
  p {
    margin: 0;
    font-size: 1.25rem;
    line-height: 1.6;
  }
`;

const ProjectCard = ({ title, summary, slug, date }) => {
  return (
    <>
      <Link href={`/projects/${slug}`}>
        <a>
          <Card>
            <h3>{title}</h3>
            <p>{summary}</p>
          </Card>
        </a>
      </Link>
    </>
  );
};
export default ProjectCard;
