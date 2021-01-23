import React from "react";
import styled from "styled-components";

const Card = styled.div`
  padding: 0.4rem;
  width: 500px;
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

const ProjectCard = ({ title, excerpt }) => {
  return (
    <>
      <Card>
        <h3>title</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio quo
          veniam minima aliquid qui, ipsam, quaerat quibusdam delectus nostrum,
          minus a nobis perferendis eos dicta dolorum. Illum ratione nam
          possimus.
        </p>
      </Card>
    </>
  );
};
export default ProjectCard;
