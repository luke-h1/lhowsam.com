/* eslint-disable */
import styled from "styled-components"
export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  padding-left: 1.5rem;

  background: ${props => props.theme.BlueBackgroundColor};
  min-height: 65vh;
  h1 {
    font-size: clamp(1rem, 8vw, 2.7rem);
    color: ${props => props.theme.lightTextColor};
    text-align: left;
    font-weight: 700;
    margin-top: 10rem;
  }
`

export const AboutIntro = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
`

export const AboutFlex = styled.div`
  min-height: 55vh;
  background: ${props => props.theme.secondaryBackgroundColor};

`

export const AboutSection = styled.div`
  color: ${props => props.theme.textColor};
  padding: 160px 0;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`

export const Row = styled.div`
  align-items: center;
  display: flex;
  margin-right: -15px;
  margin-bottom: -15px;
  margin-left: -15px;
  flex-wrap: wrap;
  align-content: stretch;
`

export const Col = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
  }
`

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`

export const TopLine = styled.div``

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${props => props.theme.textColor};
`

export const SubTitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
`

export const Col2 = styled.div``

export const ImgWrapper = styled.div`
  max-width: 555px;
`

export const Image = styled.img`
  max-width: 75%;
  border-radius: 20px;
  margin-top: 0;
  margin-right: 0;
  margin-left: 20px;
  padding-right: 0;
  img {
    border: 0;
    max-width: 55%;
    vertical-align: middle;
    display: inline-block;
  }
`

