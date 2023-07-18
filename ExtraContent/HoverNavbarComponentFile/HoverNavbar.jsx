import React, { useState } from "react";
import {Navbar,Nav,NavDropdown,Container,Form} from "react-bootstrap";
// import {Button} from "react-bootstrap";
import { HoverServiceDropdown,HoverProfileDropdown } from "./HoverNavbarDropdown";
import logo from "./images/tw1 (1).png";

export const HoverNavbarDemo = () => {
  const [showHomeDropdown, setShowHomeDropdown] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

  const handleHomeMouseEnter = () => {
    setShowHomeDropdown(true);
  };

  const handleHomeMouseLeave = () => {
    setShowHomeDropdown(false);
  };

  const handleProfileMouseEnter = () => {
    setShowProfileDropdown(true);
  };

  const handleProfileMouseLeave = () => {
    setShowProfileDropdown(false);
  };

  return (
    
    <Navbar className="NavBarSec bg-transparent d-flex justify-content-end" bg="light" expand="lg">
      <Container className="ContainerClass ">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          
        </Navbar.Brand>{" "}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> */}
          <Nav className=" d-flex flex-row-reverse">
            <NavDropdown
              title="MyLearning"
              id="home-nav-dropdown"
              show={showHomeDropdown}
              onMouseEnter={handleHomeMouseEnter}
              onMouseLeave={handleHomeMouseLeave}
            >
              <HoverServiceDropdown />
            </NavDropdown>

            <NavDropdown
              title="Profile"
              id="services-nav-dropdown"
              show={showProfileDropdown}
              onMouseEnter={handleProfileMouseEnter}
              onMouseLeave={handleProfileMouseLeave}
            >
              <HoverProfileDropdown />
              
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};



