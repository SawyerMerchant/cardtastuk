import React from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const NavLinks = ({ cart, user, onLogout }) => {
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
        {user.email
          ? <NavItem onClick={onLogout}>
              {user.email} (Logout)
            </NavItem>
          : <LinkContainer activeClassName="active" to="/auth">
              <NavItem>Log In</NavItem>
            </LinkContainer>}
      </Nav>
    </Navbar.Collapse>
  );
};

const Navigation = ({ title, cart, user, onLogout }) => {
  return (
    <Navbar fluid>
      <Navbar.Header>
        <Navbar.Brand>
          <a>{title}</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <NavLinks cart={cart} user={user} onLogout={onLogout} />
    </Navbar>
  );
};

export default Navigation;
