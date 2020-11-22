import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const BlogWrapper = styled.div`
  padding: 2.5rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export const BlogCardItem = styled.article`
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 670px;
  background: #fff;
  box-shadow: 0 0.1875rem 1.5rem #000;
  border-radius: 0.375rem;
  overflow: hidden;
  @media (max-width: 40rem) {
    /* flex-wrap: wrap; */
  }
`;

export const CardLink = styled(Link)`
  position: relative;
  display: block;
  color: inherit;
  text-decoration: none;
`;

export const PostTitle = styled.h3`
  font-size: 1.125rem;
  line-height: 1.4;
  color: 000;
  font-weight: 700;
  margin: 0 0 0.5rem 0;
  &:hover {
    transition: (color 0.3s ease);
  }
`;

export const PostImage = styled.img`
  display: block;
  width: 100%;

  object-fit: cover;
  &:hover {
    transition: opacity 0.3s ease;
    opacity: 0.9;
  }
  @media (max-width: 40rem) {
  }
`;

export const BlogDetails = styled.div`
  padding: 1.5rem;
`;

export const postCat = styled.h4`
  display: inline-block;
  text-transform: uppercase;
  font-size: 0.75rem;
  font-weight: 700;
  line-height: 1;
  letter-spacing: 0.0625rem;
  margin: 0 0 0.75rem 0;
  padding: 0 0 0.25rem 0;
  border-bottom: 0.125rem solid #000;
`;

export const Author = styled.p`
  font-size: 0.875rem;
  line-height: 1;
  margin: 1.125rem 0 0 0;
  padding: 1.125rem 0 0 0;
  border-top: 0.0625rem solid #000;
`;
