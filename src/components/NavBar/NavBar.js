import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg" className="enactus-navbar" fixed="top">
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="enactus-brand">
          Enactus IITB
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/" className="enactus-link">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/team" className="enactus-link">
              Team
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact" className="enactus-link">
              Contact
            </Nav.Link>
            <Nav.Link as={NavLink} to="/blogs" className="enactus-link">
              Blogs
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export { NavBar };
