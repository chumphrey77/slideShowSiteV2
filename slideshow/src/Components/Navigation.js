import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import './ComponentCSS/ImageCSS.css';
const Navigation = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">Emily and Colten </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/Engagement">Engagement</Nav.Link>
            <Nav.Link href="/Wedding">Wedding</Nav.Link>
            <NavDropdown title="Year" id="basic-nav-dropdown">
              <NavDropdown.Item href="/Dec2018">2018</NavDropdown.Item>
              <NavDropdown.Item href="/Jan2019">2019</NavDropdown.Item>
              <NavDropdown.Item href="/Jan2020">2020</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
}
export default Navigation