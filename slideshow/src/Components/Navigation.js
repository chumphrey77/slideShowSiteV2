import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
const Navigation = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Emily and Colten </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#engagement">Engagement</Nav.Link>
            <Nav.Link href="#wedding">Wedding</Nav.Link>
            <Nav.Link href='#calendar'>Calendar
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
}
export default Navigation