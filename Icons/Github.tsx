import styled from 'styled-components';
import React from 'react';
import { FiGithub } from 'react-icons/fi';


const External = styled.a`
    color: #000;
`

const GithubIcon = styled(FiGithub)`
  color: #000;
  margin: 0 15px 0 15px;
  font-size: 22px;
  &:hover { 
      cursor: pointer;
      color: '#6CCFF6';
      transform: scale(1.10);
      transition: scale 0.3s;
  }
`

const Github = ({url}) => { 
    return (
        <>
        <External href={url}>
            <GithubIcon /> 
        </External>
        </>

    )
}
export default Github;
