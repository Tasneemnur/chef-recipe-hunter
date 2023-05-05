import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import React, { useContext } from "react";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
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
                style={({ isActive }) => {
                  return {
                    fontWeight: isActive ? "bold" : "",
                    color: isActive ? "red" : "gray",
                    marginRight: isActive ? "22px" : "22px",
                    textDecoration: isActive ? "none" : "none",
                  };
                }}
              >
                Home
              </NavLink>
              <NavLink
                to="/blog"
                style={({ isActive }) => {
                  return {
                    fontWeight: isActive ? "bold" : "",
                    color: isActive ? "red" : "gray",
                    marginRight: isActive ? "22px" : "22px",
                    textDecoration: isActive ? "none" : "none",
                  };
                }}
              >
                Blog
              </NavLink>
            </Nav>
            {user ? (
              <div className="mt-3 mt-md-0">
                <img
                  src={user.photoURL}
                  alt=""
                  srcset=""
                  className="rounded-circle text-danger"
                  title={user.displayName}
                  style={{ height: "60px", width: "60px" }}
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
              <div className="mt-3 mt-md-0">
                <Link to="/login">
                  <Button variant="danger" className="fw-semibold">
                    Login
                  </Button>
                </Link>
              </div>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
