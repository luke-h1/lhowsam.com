import styled from "styled-components";
import React from "react";
import { GoBrowser } from "react-icons/go";

const SiteIcon = styled(GoBrowser)`
  color: #000;
  font-size: 22px;
  margin: 0 15px 0 15px;
  &:hover { 
      cursor: pointer;
      transform: scale(1.10);
      transition: scale 0.3s;
  }


`;

const Site = ({ url }) => {
  return (
    <>
      <a href={url}>
        <SiteIcon />
      </a>
    </>
  );
};
export default Site;
