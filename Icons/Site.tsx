import styled from '@emotion/styled';
import { FunctionComponent } from 'react';
import { GoBrowser } from 'react-icons/go';

const SiteIcon = styled(GoBrowser)`
  color: #000;
  font-size: 22px;
  margin: 0 15px 0 15px;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    transition: scale 0.3s;
  }
`;

interface Iprops {
  url: string;
}

const Site: FunctionComponent<Iprops> = ({ url }) => {
  return (
    <>
      <a href={url} target="_blank" rel="noreferrer">
        <SiteIcon />
      </a>
    </>
  );
};
export default Site;
