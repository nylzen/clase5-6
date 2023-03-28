import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  border-bottom: 1px solid rgba(250, 250, 250, 0.4);
  max-width: 1000px;
  margin: 0 auto;

  a {
    color: #fff;
    font-size: 2rem;
    font-weight: 800;
    text-decoration: none;
  }
`;

const Menu = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;

  li {
    cursor: pointer;
  }
`;

const Navbar = () => {
  return (
    <header>
      <Nav>
        <a href='#'>Logo</a>
        <Menu>
          <li>Home</li>
          <li>Contacto</li>
        </Menu>
      </Nav>
    </header>
  );
};
export default Navbar;
