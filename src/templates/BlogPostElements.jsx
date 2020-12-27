/* eslint-disable */
import { Link } from "gatsby"
import styled from "styled-components"
import { DiGithubBadge } from "react-icons/di"
import { IoIosBrowsers } from "react-icons/io"

export const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  background: ${props => props.theme.primaryBackgroundColor};
  align-items: center;
  min-width: 70vw;
  max-width: 70vw;
`
export const StyledHeader = styled.header`
  margin: 0 0 2rem 0;
`

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    padding: 0.5rem;
    font-size: 20px;
    font-weight: 500;
  }
`

export const StyledLink = styled(Link)`
  color: ${props => props.theme.textColor};

  margin: 0 5px 0 5px;
  font-weight: 700;
  &:hover {
    transform: scale(1.15);
    transition: scale 0.2s ease;
    color: ${props => props.theme.PrimaryHoverColor};
  }
`

export const IconWrapper = styled.div`
  display: flex;
  flex-direction: space-between;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.textColor};
  a  { 
    margin: 0 10px 0 10px;
  }
`

export const GithubLink = styled(DiGithubBadge)`
  color: ${props => props.theme.textColor};
  font-size: 35px;
  &:hover { 
    color: ${props => props.theme.PrimaryHoverColor};
  }
`

export const SiteLink = styled(IoIosBrowsers)`
  color: ${props => props.theme.textColor};
  &:hover { 
    color: ${props => props.theme.PrimaryHoverColor};
  }
  font-size: 35px;
`

export const StyledA = styled.a`
  color: ${(props) => props.theme.textColor};
`
export const StyledP = styled.p`
  color: ${(props) => props.theme.textColor};
  font-size: clamp(1rem, 8vw, 2.0rem);
`
export const StyledH1 = styled.h1`
  font-size: clamp(1rem, 8vw, 2.7rem);
  color: ${(props) => props.theme.textColor};
  font-weight: 700;
  text-align: center;
`;