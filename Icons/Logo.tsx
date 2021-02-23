import styled from '@emotion/styled';
import Link from 'next/link';
import { FunctionComponent } from 'react';
import { GoBrowser } from 'react-icons/go';

const Logo = styled(GoBrowser)`
  color: #000;
  font-size: 22px;
  margin: 0 15px 0 15px;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    transition: scale 0.3s;
  }
`;

const Site: FunctionComponent = () => {
  return (
    <>
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>
    </>
  );
};
export default Site;
