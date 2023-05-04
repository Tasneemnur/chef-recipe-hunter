import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import React, { useContext } from "react";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
import person from "../../assets/user-2.png";
import { Button } from "react-bootstrap";
import { AuthContext } from "../../providers/AuthProvider";
const Header = () => {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout()
      .then((result) => {
        console.log("logout successfully");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <Navbar bg="light" expand="lg" className="my-4 border-bottom">
        <Container>
          <Navbar.Brand className="fw-bold fs-4" href="#home">
            Recipe <span className="text-danger">Zone</span>{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <NavLink
                to="/"
                style={(isActive) => ({
                  color: isActive ? "green" : "blue",
                })}
              >
                FAQs
              </NavLink>
              <Link
                to="/blog"
                className="text-decoration-none text-secondary me-3"
              >
                Blog
              </Link>
            </Nav>
          </Navbar.Collapse>
          {user ? (
            <div>
              <img
                src={person}
                alt=""
                srcset=""
                style={{ height: "50px", width: "50px" }}
              />
              <Button
                onClick={handleLogout}
                variant="danger"
                className="ms-4 fw-semibold"
              >
                Logout
              </Button>
            </div>
          ) : (
            <Link to="/login">
              <Button variant="danger" className="ms-4 fw-semibold">
                Login
              </Button>
            </Link>
          )}
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
