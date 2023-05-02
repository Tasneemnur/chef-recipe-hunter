import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import person from '../../assets/user-2.png'
const Header = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg" className='my-4 d-flex align-items-center border-bottom'>
        <Container>
          <Navbar.Brand className='fw-bold fs-4' href="#home">Recipe <span className='text-danger'>Zone</span> </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" >
            <Nav className="mx-auto">
              <Link to="/" className='text-decoration-none text-secondary me-3'>Home</Link>
              <Link to="/blog" className='text-decoration-none text-secondary me-3'>Blog</Link>
            </Nav>
          </Navbar.Collapse>
          <div>
            <img src={person} alt="" srcset="" style={{height: "50px"}}/>
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
