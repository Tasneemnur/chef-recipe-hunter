import React from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-dark">
      <Container>
        <footer className="legal-footer text-white mt-5 py-5">
          <div className="row row-cols-2 row-cols-md-3">
            <div className="border-end">
              <h5 className="text-danger fw-bold mb-4">Subscribe</h5>
              <p>
              Subscribe for our latest & Articles. We Won't Give You Spam Mails
              </p>
              <form role="search">
                <div className="d-flex">
                  <input
                    className="form-control me-2"
                    type="email"
                    placeholder="Your Email Address"
                    aria-label="email"
                  />
                  <div>
                    <Button className="bg-danger border-0" type="email">
                      Subscribe
                    </Button>
                  </div>
                </div>
              </form>
            </div>
            <div className="border-end px-5">
              <h5 className="text-danger fw-bold mb-4">Explore</h5>
              <ul className="list-group">
                <Link to="/" className="text-white text-decoration-none">
                  Home
                </Link>
                <Link to="/blog" className="text-white text-decoration-none">
                  Blog
                </Link>
                <Link to="/login" className="text-white text-decoration-none">
                  Login
                </Link>
              </ul>
            </div>
            <div className="px-5">
              <h5 className="text-danger fw-bold mb-4">Contact</h5>
              <p>787 Mark View Street, New Town, California</p>
              <p>666 888 0000</p>
              <p>info@gmail.com</p>
            </div>
          </div>
        </footer>
      </Container>
    </div>
  );
};

export default Footer;
