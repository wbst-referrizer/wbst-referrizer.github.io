import React, { useState } from "react";
import { Nav, Navbar, NavDropdown, Form, Button } from "react-bootstrap";
import { Link } from "gatsby";
import logo from "../../images/header/logo.svg";
import search from "../../images/header/search.svg";
import closeicon from "../../images/header/close.svg";
import "./header.css";

const Header = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="header-wrapper">
      <div className="header">
        <div className="container">
          <Navbar collapseOnSelect expand="lg">
            <Navbar.Brand>
              <div className="logo">
                <Link to="/">
                  <img src={logo} alt="" />
                </Link>
              </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link to="/">Pricing</Nav.Link>
                <NavDropdown title="Solutions" id="collasible-nav-dropdown">
                  <NavDropdown.Item to="/">Action</NavDropdown.Item>
                  <NavDropdown.Item to="/">Something</NavDropdown.Item>
                  <NavDropdown.Item to="/">Click</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link to="/">Testimonials</Nav.Link>
              </Nav>
            </Navbar.Collapse>

            <div className="header-buttons">
              <Link to="/">Log in</Link>
              <Link to="/">Sign Up for Free</Link>
            </div>
          </Navbar>
        </div>
      </div>
      <div className="sub-header">
        <div className="container">
          <Nav className="me-auto">
            <Nav.Link className="active" to="/">
              All Topics
            </Nav.Link>
            <Nav.Link to="/">Contacts</Nav.Link>
            <Nav.Link to="/">Inbox</Nav.Link>
            <Nav.Link to="/">Offers & Referrals</Nav.Link>
            <Nav.Link to="/">Reputation</Nav.Link>
            <Nav.Link to="/">Campaigns</Nav.Link>
            <Nav.Link to="/">Loyalty</Nav.Link>
            <Nav.Link to="/">Wi-Fi</Nav.Link>
            <Nav.Link to="/">Partner up</Nav.Link>
            <NavDropdown title="Others" id="collasible-nav-dropdown">
              <NavDropdown.Item to="/">Landing Page</NavDropdown.Item>
              <NavDropdown.Item to="/">Quick Connect</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <div
            className="search-icon"
            onClick={() => setShow(!show)}
            role="presentation"
          >
            {show ? (
              <img src={closeicon} alt="" />
            ) : (
              <img src={search} alt="" />
            )}
          </div>
        </div>
      </div>

      {show ? (
        <div className="search-container">
          <div className="container">
            <Form>
              <Form.Control type="email" placeholder="Email" />
              <Button variant="primary">
                <img src={search} alt="" />
              </Button>
            </Form>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Header;
