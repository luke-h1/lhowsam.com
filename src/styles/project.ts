import styled from '@emotion/styled';

export const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(350px, 100%), 1fr));
  gap: 1rem;
`;

export const StyledProjectItem = styled.div`
  padding: 1rem;
  color: #fff;
  background: var(--secondary);
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 2px 4px 0 rgb(22, 27, 34, 0.3);
  transition: box-shadow 200ms, transform 200ms;
  cursor: default;
  &:focus-within {
    box-shadow: 0 8px 16px 0 rgb(22, 27, 34, 0.3);
    transform: translateY(-0.2rem);
  }
  @media (hover: hover) {
    &:hover {
      box-shadow: 0 8px 16px 0 rgb(22, 27, 34, 0.3);
      transform: translateY(-0.2rem);
    }
  }

  header {
    margin-bottom: 2rem;
    font-size: 24px;
  }
`;

export const ProjectHeader = styled.header`
  font-size: clamp(1.5rem, 7vw, 3rem);
`;

export const ProjectContent = styled.div`
  font-size: clamp(1rem, 4vw, 1.1rem);
  p {
    margin-bottom: 1.3rem;
    text-align: left;
    font-size: 20px;
  }
`;

export const ProjectFooter = styled.footer`
  margin-top: 1.5rem;
  display: flex;

  a {
    margin-right: 0.5rem !important;
    font-weight: 600;
  }

  @media (max-width: 400px) {
    flex-direction: column;

    a {
      margin-bottom: 0.5rem;
    }
  }
`;
