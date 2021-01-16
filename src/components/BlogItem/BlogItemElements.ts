import styled from 'styled-components';

// BlogCard, CardTitle, CardBody, CardFinePrint

export const BlogCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 750px;
  margin-bottom: 2.5rem;
  margin-top: 0.3rem;
  /* @media(max-width: ) */
`;

export const CardTitle = styled.h1`
  text-align: left;
  font-size: clamp(1rem, 8vw, 1.6rem);
  margin: 0 0 1rem 0;

`;

export const CardBody = styled.div`
  p {
    line-height: 1.6;
    color: ${props => props.theme.greyTextColor};
    font-size: 18px;
  }
`;

export const CardFinePrint = styled.p`
  color: ${props => props.theme.greyTextColor};
  text-align: center;
  margin-left: 1rem;
`;

export const TitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`;
