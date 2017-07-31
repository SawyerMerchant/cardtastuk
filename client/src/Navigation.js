import React from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";


const NavLinks = () => {
  return (
    <Navbar.Collapse>
      <Nav pullRight>
        <LinkContainer activeClassName="active" to="/">
          <NavItem eventKey={1}>Home</NavItem>
        </LinkContainer>{" "}
        <LinkContainer activeClassName="active" to="/cards">
          <NavItem eventKey={2}>Cards</NavItem>
        </LinkContainer>
      </Nav>
    </Navbar.Collapse>
  );
};

const Navigation = ({ title }) => {
  return (
    <Navbar fluid>
      <Navbar.Header>
        <Navbar.Brand>
          <a>{title}</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <NavLinks />
    </Navbar>
  );
};

export default Navigation;