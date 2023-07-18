import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import Dropdown from 'react-bootstrap/Dropdown';
import NavItem from 'react-bootstrap/NavItem';
import NavLink from 'react-bootstrap/NavLink';
import Button from 'react-bootstrap/Button';
import logo from './images/logo.svg';
import './NavbarDemo.css';
// import Responsive from './CardsCarousel';



function NavbarDemo() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{" "}
                    Tuition World
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className=" flex justify-content-end" activeKey="/home">

                        <Nav.Item className='FirstUlList' >
                            <Dropdown as={NavItem}>
                                <Dropdown.Toggle as={NavLink}>Courses</Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item>Hello there!</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Nav.Item>
                        <Nav.Item className='SecUlList'>
                            <Dropdown as={NavItem}>
                                <Dropdown.Toggle as={NavLink}>Courses for Kids</Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item>Hello there!</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Nav.Item>
                        <Nav.Item className='SecUlList'>
                            <Dropdown as={NavItem}>
                                <Dropdown.Toggle as={NavLink}>Free study material</Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item>hello..</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Nav.Item>
                        <Nav.Item className='SecUlList'>
                            <Dropdown as={NavItem}>
                                <Dropdown.Toggle as={NavLink}>Free Live Classes</Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item>Hello there!</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Nav.Item>
                        <Nav.Item className='SecUlList'>
                            <Dropdown as={NavItem}>
                                <Dropdown.Toggle as={NavLink}>More</Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item>Hello there!</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Nav.Item>


                        <Button className='SigninButton' variant="light">Sign In</Button>{' '}
                    </Nav>

                    {/* <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav> */}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarDemo;
