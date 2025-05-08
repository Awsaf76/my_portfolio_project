import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  background: #222;
  padding: 1rem;
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 16px;

  &:hover {
    color: #00bcd4;
  }
`;

function Navbar() {
  return (
    <Nav>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/about">About</StyledLink>
      <StyledLink to="/projects">Projects</StyledLink>
      <StyledLink to="/education">Education</StyledLink>
      <StyledLink to="/resume">Resume</StyledLink>
      <StyledLink to="/services">Services</StyledLink>
      <StyledLink to="/contact">Contact</StyledLink>
    </Nav>
  );
}

export default Navbar;
