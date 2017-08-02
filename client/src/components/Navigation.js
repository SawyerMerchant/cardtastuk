import React from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const NavLinks = ({cart}) => {
  return (
    <Navbar.Collapse>
      <Nav pullRight>
        <LinkContainer activeClassName="active" exact to="/">
          <NavItem>Home</NavItem>
        </LinkContainer>{" "}
        <LinkContainer activeClassName="active" to="/cards">
          <NavItem>Cards</NavItem>
        </LinkContainer>
        <LinkContainer activeClassName="active" to="/cart">
          <NavItem>Your Cart ({cart.length})</NavItem>
        </LinkContainer>
      </Nav>
    </Navbar.Collapse>
  );
};

const Navigation = ({ title, cart }) => {
  return (
    <Navbar fluid>
      <Navbar.Header>
        <Navbar.Brand>
          <a>{title}</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <NavLinks cart={cart} />
    </Navbar>
  );
};

export default Navigation;
