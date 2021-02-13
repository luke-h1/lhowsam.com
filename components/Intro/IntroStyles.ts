import styled from '@emotion/styled';

export const IntroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 4rem;
`;

export const HighLight = styled.strong`
  font-weight: 700;
  text-align: center;
  color: ${(props) => props.theme.colors.PrimaryHoverColor};
`;

export const DescWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    text-align: center;
    width: 50%;
    font-size: 20px;
    line-height: 1.4;
    color: ${(props) => props.theme.colors.greyTextColor};
    @media (max-width: 450px) {
      width: 80%;
    }
  }
`;

export const Title = styled.h1`
  font-size: clamp(1rem, 8vw, 2.7rem);
  color: ${(props) => props.theme.colors.darkTextColor};
  text-align: center;
`;
