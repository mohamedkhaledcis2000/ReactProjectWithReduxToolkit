import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
export default function Mynav() {
  const card = useSelector(state => state.card)
  return (
    <>
    <Navbar fixed='top' expand="lg" className="bg-body-tertiary">
      <Container>
        <Link className='navbar-brand' to="/">React-Bootstrap</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className='nav-link' to="/">Home</Link>
            <Link className='nav-link' to="/products">Products</Link>
            <Link className='nav-link' to="/card">Card - {card.length}</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>

  );


  }

