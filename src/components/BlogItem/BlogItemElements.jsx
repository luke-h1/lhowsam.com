import styled from 'styled-components';

export const BlogContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 2rem;
  grid-gap: 10px;
  @media (max-width: 1180px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const BlogCard = styled.div`
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  width: 370px;
  height: 300px;
`;

export const BlogH1 = styled.h1`
  text-align: center;
`;
export const ShortDesc = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BlogP = styled.p`
  margin-top: 15px;
  font-size: 17px;
  text-align: center;
  width: 80%;
`;

export const BlogWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
