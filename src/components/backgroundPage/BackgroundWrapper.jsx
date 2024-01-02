import styled from "styled-components";

const AppContainer = styled.div`
  font-family: Arial, sans-serif;
  height: 100vh;
`;
const Content = styled.div`
  padding-top: 60px; /* Ensure content is below the fixed navbar */
`;

const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #333;
  color: #fff;
  padding: 20px 0;
  text-align: center;
  z-index: 1000;
`;

const NavItem = styled.a`
  color: #fff;
  text-decoration: none;
  margin: 0 20px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
export { AppContainer, Content, NavbarContainer, NavItem };
