import { FC } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import data from './nav.json';

const Nav = styled.nav`
  height: 80px;
  background: #fff;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  color: #000;
`;

const StyledLink = styled.a`
  padding: 0rem 2rem;
  color: #000;
`;

const Wrap = styled.div`
  max-width: 800px;
  @media(max-width: 400px){
    max-width: 600px;
    margin: 0 auto;
  }
`;
interface NavProps {
 slug: string;
 name: string;
 id: number;
}

const Navbar: FC = () => {
  return (
    <Nav>
      <Wrap>
        {data.map((item: NavProps) => (
          <Link href={item.slug} passHref key={item.id}>
            <StyledLink>{item.name}</StyledLink>
          </Link>
        ))}
      </Wrap>
    </Nav>
  );
};

export default Navbar;
