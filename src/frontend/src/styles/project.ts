import styled from 'styled-components';

export const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(350px, 100%), 1fr));
  gap: 1rem;
`;

export const ProjectItem = styled.div`
  padding: 1rem;
  color: #fff;
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
`;

export const ProjectItemHeader = styled.header`
  font-size: clamp(1.5rem, 7vw, 2rem);
`;

export const ProjectItemBody = styled.div`
  font-size: clamp(1rem, 4vw, 1.1rem);
`;

export const ProjectItemFooter = styled.footer`
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

export const ProjectWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  margin-top: 30px;
  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
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
      cursor: pointer;
    }
  }
`;
