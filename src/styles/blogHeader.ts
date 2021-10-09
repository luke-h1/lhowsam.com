import styled from '@emotion/styled';

export const StyledBlogHeader = styled.header`
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 0.5rem;
  border-bottom: 0.1rem solid var(--text-color);
`;

export const LeftContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const BlogTitle = styled.h1`
  font-size: 1.7rem;
  margin-bottom: 0;
`;

export const BlogDate = styled.h2`
  font-size: 1.1rem;
  margin: 0;
  font-weight: normal;
  opacity: 0.9;
`;
