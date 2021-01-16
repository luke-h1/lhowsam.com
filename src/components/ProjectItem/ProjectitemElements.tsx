import styled from 'styled-components';

export const Card = styled.div`
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
  width: 750px;
  height: 150px;
  margin-bottom: 1em;
  margin-top: 1em;
  text-align: center;
`;

export const ProjectTitle = styled.h3`
  text-align: left;
  margin-left: 1rem;
  font-size: clamp(1rem, 8vw, 1.6rem);
`;

export const ProjectExcerpt = styled.p`
  text-align: left;
  color: ${props => props.theme.greyTextColor};
  margin-top: 1rem;
  padding-left: 2rem;
  padding-right: 2rem;
  font-size: 18px;
`;
