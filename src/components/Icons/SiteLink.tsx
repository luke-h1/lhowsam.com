import React from 'react';
import styled from 'styled-components';
import { GoBrowser } from 'react-icons/go';

const Site = styled(GoBrowser)`
  color: #000;
  font-size: 30px;
  margin: 0 15px 0 15px;
`;

const SiteLink = ({ link }) => {
  return (
    <>
      <a href={link}>
        <Site />
      </a>
    </>
  );
};
export default SiteLink;
