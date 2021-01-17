import styled from 'styled-components';
import { Link } from 'gatsby';

export const BlogCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin: 0 auto;
  width: 550px;

  /* margin-bottom: 2.5rem; */
  /* margin-top: 0.3rem; */
  /* @media(max-width: ) */
`;

export const BlogItemWrapper = styled.div`
  border: 1px solid #011627;
  padding: 0.5rem;
  border-radius: 8px;
  &:hover {
    box-shadow: 0 1px 10px rgba(0, 0, 0, 0.1);
  }
`;

export const Excerpt = styled.p`
  color: #000;
  margin-top: 0.9rem;
  text-align: center;
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

export const BlogLink = styled(Link)`
  color: ${props => props.theme.darkTextColor};
  text-decoration: none;
`;
