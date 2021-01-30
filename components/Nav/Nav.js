import styled from 'styled-components';
import Link from 'next/link';
import data from './nav.json';

const Nav = styled.nav`
  height: 80px;
  background: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: #000;
`;

const StyledLink = styled.a`
  padding: 0rem 2rem;
  color: #000;
`;

const Navbar = () => {
  return (
    <Nav>
      <div>
        {data.map((item) => (
          <Link href={item.slug} passHref key={item.id}>
            <StyledLink>{item.name}</StyledLink>
          </Link>
        ))}
      </div>
    </Nav>
  );
};

export default Navbar;
