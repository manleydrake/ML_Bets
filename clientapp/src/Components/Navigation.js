import React,{Component} from 'react';
import {Test} from '../Test'
import {Navbar, Nav} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

const header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <LinkContainer to="/">
  <Navbar.Brand>ML Bets</Navbar.Brand>
  </LinkContainer>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
        <LinkContainer to="/Odds">
            <Nav.Link>Odds</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/Picks">
            <Nav.Link>Picks</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/Stats">
            <Nav.Link>Stats</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/Documentation">
      <Nav.Link>Documentation</Nav.Link>
      </LinkContainer>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    )
}

export default header