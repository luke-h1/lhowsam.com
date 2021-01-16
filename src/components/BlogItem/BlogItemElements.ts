import styled from 'styled-components';

// BlogCard, CardTitle, CardBody, CardFinePrint

export const BlogCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 750px;
  margin-bottom: 1rem;
  margin-top: 0.3rem;
`;

export const CardTitle = styled.h1`
  text-align: left;
  font-size: clamp(1rem, 8vw, 1.6rem);
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
  text-align: left;
  margin-left: 1rem;
`;

export const TitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 600px;
  margin: 0;
`;
