import { FC } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import data from './nav.json';

const Nav = styled.nav`
  height: 80px;
  background: #fff;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  color: #000;
  @media(max-width: 420px){
    div {
      margin-left: 2.5rem;
    }
  }
`;

const StyledLink = styled.a`
  padding: 0rem 2rem;
  color: #000;
`;

interface NavProps {
 slug: string;
 name: string;
 id: number;
}

const Navbar: FC = () => {
  return (
    <Nav>
      <div>
        {data.map((item: NavProps) => (
          <Link href={item.slug} passHref key={item.id}>
            <StyledLink>{item.name}</StyledLink>
          </Link>
        ))}
      </div>
    </Nav>
  );
};

export default Navbar;
