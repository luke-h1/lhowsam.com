import styled from 'styled-components';

export const IntroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

export const HighLight = styled.strong`
  font-weight: 700;
  text-align: center;
  color: ${props => props.theme.blueTextColor};
`;

export const DescWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    text-align: center;
    width: 60%;
    font-size: 20px;
    line-height: 1.4;
    color: ${(props) => props.theme.greyTextColor}
  }
`;

export const Title = styled.h1`
  font-size: clamp(1rem, 8vw, 2.7rem);
  color: ${props => props.theme.darkTextColor};
  text-align: center;
`;
