import React from 'react';

import logo from '../assets/img/logoSpa.png';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

function CollapsibleExample() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/home"><img src={logo} alt="logo" width="100px"/></Navbar.Brand>
        
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              
              
              <Nav.Link href="/Pruebas">Pruebas</Nav.Link>
              <NavDropdown title="Provincias" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/Andalucia">Andalucía</NavDropdown.Item>
                <NavDropdown.Item href="/Madrid">
                  Madrid
                </NavDropdown.Item>
                <NavDropdown.Item href="/Bilbao">Bilbao</NavDropdown.Item>
               
                
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="/Login">Log in</Nav.Link>
              <Nav.Link eventKey={2} href="/Registro">
                Register
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  
  export default CollapsibleExample;