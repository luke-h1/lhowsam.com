import styled from '@emotion/styled';

export const SectionTitle = styled.h1``;

export const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(min(15rem, 100%), 1fr));
  gap: 1rem;

  @media (max-width: 910px) {
    grid-template-columns: repeat(2, minmax(min(15rem, 100%), 1fr));
  }

  @media (max-width: 500px) {
    grid-template-columns: repeat(2, minmax(min(7rem, 100%), 1fr));
  }
`;

export const SkillList = styled.ul`
  display: flex;
  flex-direction: column;
  header {
    h1 {
      font-size: clamp(1.1rem, 6vw, 1.5rem);
      font-weight: bold;
    }
  }

  li {
    list-style-type: none;
  }

  p {
    margin-bottom: 0.2rem;
    font-size: 1.1rem;
  }
`;

export const SkillItem = styled.div`
  display: flex;
  flex-direction: column;
  header {
    h1 {
      font-size: clamp(1.1rem, 6vw, 1.5rem);
      font-weight: bold;
    }
  }

  li {
    list-style-type: none;
  }

  p {
    margin-bottom: 0.2rem;
    font-size: 1.1rem;
  }
`;
