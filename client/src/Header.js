import React, { Component } from 'react';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import darkLogo from './assets/GitHub-Mark-32px.png';
import lightLogo from './assets/GitHub-Mark-Secondary-32px.png';
import './Header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { hovered: false };
    this.handleOver = this.handleOver.bind(this);
    this.handleOut = this.handleOut.bind(this);
  }

  handleOver() {
    this.setState({
      hovered: true
    });
  }

  handleOut() {
    this.setState({
      hovered: false
    });
  }

  render() {
    const hovered = this.state.hovered;
    return (
      <Navbar bg="light" expand="lg">
        <Nav className="me-auto">
          <Nav.Link id="title" href='/'>this-or-that</Nav.Link>
        </Nav>
        <Navbar.Brand 
          onMouseOver={ this.handleOver } 
          onMouseOut={ this.handleOut } 
          href="https://github.com/deniselezi" 
          target="_blank"
        >
          <img src={ hovered ? lightLogo : darkLogo } alt='GitHub' />
        </Navbar.Brand>
      </Navbar>
    );
  }

}

export default Header;