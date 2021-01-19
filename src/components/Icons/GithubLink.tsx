import React from 'react';
import styled from 'styled-components';
import { FiGithub } from 'react-icons/fi';

const GhIcon = styled(FiGithub)`
  color: #000;
  font-size: 30px;
  margin: 0 15px 0 15px;
`;

const GithubLink = ({ link }) => (
  <>
    <a href={link}>
      <GhIcon />
    </a>
  </>
);
export default GithubLink;
