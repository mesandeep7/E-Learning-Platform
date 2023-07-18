import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import Dropdown from "react-bootstrap/Dropdown";
import NavItem from "react-bootstrap/NavItem";
import NavLink from "react-bootstrap/NavLink";
import Button from "react-bootstrap/Button";
import logo from '../images/tw1.png';
import "./NavbarTuition.css";
// import DropdownMenu from "react-bootstrap/esm/DropdownMenu";

export default function NavbarSection() {
    return (
        <Navbar className="nav" expand="lg">
            <Container className="navbarContainerSec">
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src={logo}
                        width="140"
                        // height="80"
                        height="100"
                        className="d-inline-block align-top brandImageSec"
                    />
                    {/* <h4 className="brandClass">
                        Tuition World
                        <br /> <span className="spansection">Learning App</span>
                    </h4> */}
                    {/* <p>Learning App</p> */}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggleClass" />
                <Navbar.Collapse id="basic-navbar-nav" className="collapseClass">
                    {/* <Nav
                        className=" MenuBarOne d-flex justify-content-end"
                        activeKey="/home"
                    > */}
                    <Nav
                        className=" MenuBarOne d-flex justify-content-start"
                        activeKey="/home"
                    >
                        <Nav.Item className="FirstUlList">
                            <div>

                                <Dropdown as={NavItem}>

                                    <Dropdown.Toggle className="menuItemsDrop" as={NavLink}>Courses</Dropdown.Toggle>
                                    <Dropdown.Menu className="Firstdrop">
                                        <div className="scrollbarSec">
                                            <div className="scrollbar">
                                                <Dropdown.Item>
                                                    <a href="#longterm">
                                                        <strong className="item1">
                                                            <i class="fa-regular fa-book"></i>Long Term courses
                                                        </strong>
                                                    </a>
                                                    <p className="menuitem3">
                                                        Guaranteed improvement in marks
                                                        <br />
                                                        or get your fees back
                                                    </p>
                                                </Dropdown.Item>
                                                <hr />
                                                <Dropdown.Item>
                                                    <a href="#onetoone">
                                                        <strong className="item1">
                                                            <i class="fa-solid fa-shield"></i>One-to-one LIVE
                                                            classes
                                                        </strong>
                                                    </a>
                                                    <p className="menuitem3">
                                                        Learn one-to-one with a<br />
                                                        teacher for a personalised experience
                                                    </p>
                                                </Dropdown.Item>
                                                <hr />
                                                <Dropdown.Item>
                                                    <a href="#topicspecific">
                                                        <strong className="item1">
                                                            <i class="fa-sharp fa-solid fa-user-plus"></i>Topic
                                                            Specific Courses
                                                        </strong>
                                                    </a>
                                                    <p className="menuitem3">
                                                        Master any topic <br />
                                                        at just $1
                                                    </p>
                                                </Dropdown.Item>
                                                <hr />
                                                <h5>
                                                    <i class="fa-solid fa-star-of-life"></i>Courses for kids
                                                </h5>
                                                <Dropdown.Item>
                                                    <i class="fa-solid fa-book-open"></i>
                                                    <a href="#english" className="item">
                                                        English superstar
                                                    </a>
                                                    <br></br>
                                                    <div className="drop">
                                                        <span className="menuitem3">Age 4-8</span>
                                                        <p className="menuitem3">
                                                            Level based holistic English program
                                                        </p>
                                                    </div>
                                                </Dropdown.Item>
                                                <Dropdown.Item>
                                                    <i class="fa-regular fa-language"></i>
                                                    <a href="#spokenenglish" className="item">
                                                        Spoken English
                                                    </a>
                                                    <br></br>
                                                    <div className="drop">
                                                        <span className="menuitem3">Age 3-5</span>
                                                        <p className="menuitem3">
                                                            See your child speak fluently
                                                        </p>
                                                    </div>
                                                </Dropdown.Item>
                                                <Dropdown.Item>
                                                    <i class="fa-solid fa-calculator"></i>
                                                    <a href="#learnmaths" className="item">
                                                        Learn Maths
                                                    </a>
                                                    <br></br>
                                                    <div className="drop">
                                                        <span className="menuitem3">Class1 and 2</span>
                                                        <p className="menuitem3">
                                                            Turn your child into a math wizard{" "}
                                                        </p>
                                                    </div>
                                                </Dropdown.Item>
                                            </div>
                                            <div className="scrollbar1">
                                                <Dropdown.Item>
                                                    <strong>
                                                        <i class="fa-solid fa-book"></i>Find courses by class
                                                    </strong>
                                                    <br />
                                                    <br />
                                                </Dropdown.Item>
                                                <Dropdown.Item>
                                                    <a href="#learnmaths" className="item2">
                                                        Repeater
                                                    </a>
                                                    <br />
                                                </Dropdown.Item>
                                                <Dropdown.Item>
                                                    <a href="#learnmaths" className="item2">
                                                        Class 12
                                                    </a>
                                                    <br />
                                                    <div className="drop2">
                                                        <p className="menuitem3">Science PCM </p>
                                                    </div>
                                                </Dropdown.Item>
                                                <Dropdown.Item>
                                                    <a href="#learnmaths" className="item2">
                                                        Class 12
                                                    </a>
                                                    <br />
                                                    <div className="drop2">
                                                        <p className="menuitem3">Science PCB</p>
                                                    </div>
                                                </Dropdown.Item>
                                                <Dropdown.Item>
                                                    <a href="#learnmaths" className="item2">
                                                        Class 12
                                                    </a>
                                                    <br />
                                                    <div className="drop2">
                                                        <p className="menuitem3">Commerce</p>
                                                    </div>
                                                </Dropdown.Item>
                                                <Dropdown.Item>
                                                    <a href="#learnmaths" className="item2">
                                                        Class 11
                                                    </a>
                                                    <br />
                                                    <div className="drop2">
                                                        <p className="menuitem3">Science PCM</p>
                                                    </div>
                                                </Dropdown.Item>
                                                <Dropdown.Item>
                                                    <a href="#learnmaths" className="item2">
                                                        Class 11
                                                    </a>
                                                    <br />
                                                    <div className="drop2">
                                                        <p className="menuitem3">Science PBM</p>
                                                    </div>
                                                </Dropdown.Item>
                                                <Dropdown.Item>
                                                    <a href="#learnmaths" className="item2">
                                                        Class 11
                                                    </a>
                                                    <br />
                                                    <div className="drop2">
                                                        <p className="menuitem3">Commerce</p>
                                                    </div>
                                                </Dropdown.Item>
                                                <Dropdown.Item>
                                                    <a href="#learnmaths" className="item2">
                                                        Class 10
                                                    </a>
                                                    <br />
                                                    <br />
                                                </Dropdown.Item>
                                                <Dropdown.Item>
                                                    <a href="#learnmaths" className="item2">
                                                        Class 9
                                                    </a>
                                                    <br />
                                                    <br />
                                                </Dropdown.Item>
                                                <Dropdown.Item>
                                                    <a href="#learnmaths" className="item2">
                                                        Class 8
                                                    </a>
                                                    <br />
                                                    <br />
                                                </Dropdown.Item>
                                                <Dropdown.Item>
                                                    <a href="#learnmaths" className="item2">
                                                        Class 7
                                                    </a>
                                                    <br />
                                                    <br />
                                                </Dropdown.Item>
                                                <Dropdown.Item>
                                                    <a href="#learnmaths" className="item2">
                                                        Class 6
                                                    </a>
                                                    <br />
                                                    <br />
                                                </Dropdown.Item>
                                                <Dropdown.Item>
                                                    <a href="#learnmaths" className="item2">
                                                        Class 5
                                                    </a>
                                                    <br />
                                                    <br />
                                                </Dropdown.Item>
                                                <Dropdown.Item>
                                                    <a href="#learnmaths" className="item2">
                                                        Class 4
                                                    </a>
                                                    <br />
                                                    <br />
                                                </Dropdown.Item>
                                                <Dropdown.Item>
                                                    <a href="#learnmaths" className="item2">
                                                        Class 3
                                                    </a>
                                                    <br />
                                                    <br />
                                                </Dropdown.Item>
                                                <Dropdown.Item>
                                                    <a href="#learnmaths" className="item2">
                                                        Class 2
                                                    </a>
                                                    <br />
                                                    <br />
                                                </Dropdown.Item>
                                                <Dropdown.Item>
                                                    <a href="#learnmaths" className="item2">
                                                        Class 1
                                                    </a>
                                                    <br />
                                                    <br />
                                                </Dropdown.Item>
                                                <Dropdown.Item>
                                                    <a href="#learnmaths" className="item2">
                                                        UKG
                                                    </a>
                                                    <br />
                                                    <br />
                                                </Dropdown.Item>
                                                <Dropdown.Item>
                                                    <a href="#learnmaths" className="item2">
                                                        LKG
                                                    </a>
                                                    <br />
                                                    <br />
                                                </Dropdown.Item>
                                            </div>
                                            <div className="scrollbar2">
                                                <Dropdown.Item>
                                                    <strong>
                                                        <i class="fa-solid fa-book"></i>Find courses by target
                                                    </strong>
                                                    <br />
                                                    <br />
                                                </Dropdown.Item>
                                                <div className="dropdown1">
                                                    <a href="#schoolTuition">
                                                        <Dropdown as={NavItem}>
                                                            <Dropdown.Toggle
                                                                className="TuitionDrop"
                                                                as={NavLink}
                                                            >
                                                                School tuition
                                                            </Dropdown.Toggle>
                                                            <div className="section">
                                                                <Dropdown.Menu className="SchoolTuitionDrop">
                                                                    <Dropdown.Item>
                                                                        <a href="#learnmaths" className="itemdrop">
                                                                            CBSE
                                                                        </a>
                                                                        <br />
                                                                        <div className="drop2">
                                                                            <p className="menu">For class 6-12</p>
                                                                        </div>
                                                                    </Dropdown.Item>
                                                                    <Dropdown.Item>
                                                                        <a href="#learnmaths" className="itemdrop">
                                                                            ICSE
                                                                        </a>
                                                                        <br />
                                                                        <div className="drop2">
                                                                            <p className="menu">For class 6-10</p>
                                                                        </div>
                                                                    </Dropdown.Item>
                                                                </Dropdown.Menu>
                                                            </div>
                                                        </Dropdown>
                                                    </a>
                                                    <br />
                                                </div>
                                                <Dropdown.Item>
                                                    <a href="#learnmaths" className="item3">
                                                        JEE
                                                    </a>
                                                    <br />
                                                    <div className="drop2">
                                                        <p className="menuitem4">For class 11-13</p>
                                                    </div>
                                                </Dropdown.Item>
                                                <Dropdown.Item>
                                                    <a href="#learnmaths" className="item3">
                                                        NEET
                                                    </a>
                                                    <br />
                                                    <div className="drop2">
                                                        <p className="menuitem4">For class 11-13</p>
                                                    </div>
                                                </Dropdown.Item>
                                                <Dropdown.Item>
                                                    <a href="#learnmaths" className="item3">
                                                        BITSAT
                                                    </a>
                                                    <br />
                                                    <div className="drop2">
                                                        <p className="menuitem4">For class 12 & 13</p>
                                                    </div>
                                                </Dropdown.Item>
                                                <div className="dropdown1">
                                                    <a href="#ncertsolutions">
                                                        <Dropdown as={NavItem}>
                                                            <Dropdown.Toggle
                                                                className="TuitionDrop"
                                                                as={NavLink}
                                                            >
                                                                JEE/NEET Foundation
                                                            </Dropdown.Toggle>
                                                            <div className="section">
                                                                <Dropdown.Menu className="SchoolTuitionDrop1">
                                                                    <Dropdown.Item>
                                                                        <a href="#learnmaths" className="itemdrop">
                                                                            Class 10
                                                                        </a>
                                                                        <br />
                                                                    </Dropdown.Item>
                                                                    <Dropdown.Item>
                                                                        <a href="#learnmaths" className="itemdrop">
                                                                            Class 9
                                                                        </a>
                                                                        <br />
                                                                    </Dropdown.Item>
                                                                    <Dropdown.Item>
                                                                        <a href="#learnmaths" className="itemdrop">
                                                                            Class 8
                                                                        </a>
                                                                        <br />
                                                                    </Dropdown.Item>
                                                                </Dropdown.Menu>
                                                            </div>
                                                        </Dropdown>
                                                    </a>
                                                    <br />
                                                </div>

                                                <Dropdown.Item>
                                                    <a href="#learnmaths" className="item3">
                                                        Olympaid Courses
                                                    </a>
                                                    <br />
                                                    <div className="drop2">
                                                        <p className="menuitem4">For class 7-12</p>
                                                    </div>
                                                </Dropdown.Item>
                                            </div>
                                        </div>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </Nav.Item>
                        <Nav.Item className="SecUlList">
                            <Dropdown as={NavItem}>
                                <Dropdown.Toggle className="menuItemsDrop" as={NavLink}>Courses for Kids</Dropdown.Toggle>
                                <Dropdown.Menu className="menuitem1">
                                    <Dropdown.Item>
                                        <i class="fa-solid fa-book-open"></i>
                                        <a href="#english" className="item">
                                            English superstar
                                        </a>
                                        <br></br>
                                        <div className="drop">
                                            <span className="menuitem3">Age 4-8</span>
                                            <p className="menuitem3">
                                                Level based holistic English program
                                            </p>
                                        </div>
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        <i class="fa-regular fa-language"></i>
                                        <a href="#spokenenglish" className="item">
                                            Spoken English
                                        </a>
                                        <br></br>
                                        <div className="drop">
                                            <span className="menuitem3">Age 3-5</span>
                                            <p className="menuitem3">See your child speak fluently</p>
                                        </div>
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        <i class="fa-solid fa-calculator"></i>
                                        <a href="#learnmaths" className="item">
                                            Learn Maths
                                        </a>
                                        <br></br>
                                        <div className="drop">
                                            <span className="menuitem3">Class1 and 2</span>
                                            <p className="menuitem3">
                                                Turn your child into a math wizard{" "}
                                            </p>
                                        </div>
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Nav.Item>
                        <Nav.Item className="SecUlList">
                            <Dropdown as={NavItem}>
                                <Dropdown.Toggle className="menuItemsDrop" as={NavLink}>
                                    Free study material
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <div className="Scrollbar2">
                                        <div className="dropdown1">
                                            <a href="#schoolTuition">
                                                <Dropdown as={NavItem}>
                                                    <Dropdown.Toggle className="TuitionDrop" as={NavLink}>
                                                        NCERT Solutions
                                                    </Dropdown.Toggle>
                                                    <div className="section">
                                                        <Dropdown.Menu className="SchoolTuition1">
                                                            <Dropdown.Item>
                                                                <a href="#learnmaths" className="itemdrop">
                                                                    Class 12 NCERT Solutions
                                                                </a>
                                                                <br />
                                                            </Dropdown.Item>
                                                            <Dropdown.Item>
                                                                <a href="#learnmaths" className="itemdrop">
                                                                    Class 11 NCERT Solutions
                                                                </a>
                                                                <br />
                                                            </Dropdown.Item>
                                                            <Dropdown.Item>
                                                                <a href="#learnmaths" className="itemdrop">
                                                                    Class 10 NCERT Solutions
                                                                </a>
                                                                <br />
                                                            </Dropdown.Item>
                                                            <Dropdown.Item>
                                                                <a href="#learnmaths" className="itemdrop">
                                                                    Class 9 NCERT Solutions
                                                                </a>
                                                                <br />
                                                            </Dropdown.Item>
                                                            <Dropdown.Item>
                                                                <a href="#learnmaths" className="itemdrop">
                                                                    Class 8 NCERT Solutions
                                                                </a>
                                                                <br />
                                                            </Dropdown.Item>
                                                            <Dropdown.Item>
                                                                <a href="#learnmaths" className="itemdrop">
                                                                    Class 7 NCERT Solutions
                                                                </a>
                                                                <br />
                                                            </Dropdown.Item>
                                                            <Dropdown.Item>
                                                                <a href="#learnmaths" className="itemdrop">
                                                                    Class 6 NCERT Solutions
                                                                </a>
                                                                <br />
                                                            </Dropdown.Item>
                                                            <Dropdown.Item>
                                                                <a href="#learnmaths" className="itemdrop">
                                                                    Class 5 NCERT Solutions
                                                                </a>
                                                                <br />
                                                            </Dropdown.Item>
                                                            <Dropdown.Item>
                                                                <a href="#learnmaths" className="itemdrop">
                                                                    Class 4 NCERT Solutions
                                                                </a>
                                                                <br />
                                                            </Dropdown.Item>
                                                            <Dropdown.Item>
                                                                <a href="#learnmaths" className="itemdrop">
                                                                    Class 3 NCERT Solutions
                                                                </a>
                                                                <br />
                                                            </Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </div>

                                                </Dropdown>
                                            </a>
                                        </div>
                                        <div className="dropdown1">
                                            <a href="#ncertsolutions">
                                                <Dropdown as={NavItem}>
                                                    <Dropdown.Toggle className="TuitionDrop" as={NavLink}>
                                                        Popular book solutions
                                                    </Dropdown.Toggle>
                                                    <div className="section">
                                                        <Dropdown.Menu className="SchoolTuition2">
                                                            <Dropdown.Item>
                                                                <a href="#learnmaths" className="itemdrop">
                                                                    Class 12 NCERT Solutions
                                                                </a>
                                                                <br />
                                                            </Dropdown.Item>
                                                            <Dropdown.Item>
                                                                <a href="#learnmaths" className="itemdrop">
                                                                    Class 11 NCERT Solutions
                                                                </a>
                                                                <br />
                                                            </Dropdown.Item>
                                                            <Dropdown.Item>
                                                                <a href="#learnmaths" className="itemdrop">
                                                                    Class 10 NCERT Solutions
                                                                </a>
                                                                <br />
                                                            </Dropdown.Item>
                                                            <Dropdown.Item>
                                                                <a href="#learnmaths" className="itemdrop">
                                                                    Class 9 NCERT Solutions
                                                                </a>
                                                                <br />
                                                            </Dropdown.Item>
                                                            <Dropdown.Item>
                                                                <a href="#learnmaths" className="itemdrop">
                                                                    Class 8 NCERT Solutions
                                                                </a>
                                                                <br />
                                                            </Dropdown.Item>
                                                            <Dropdown.Item>
                                                                <a href="#learnmaths" className="itemdrop">
                                                                    Class 7 NCERT Solutions
                                                                </a>
                                                                <br />
                                                            </Dropdown.Item>
                                                            <Dropdown.Item>
                                                                <a href="#learnmaths" className="itemdrop">
                                                                    Class 6 NCERT Solutions
                                                                </a>
                                                                <br />
                                                            </Dropdown.Item>
                                                            <Dropdown.Item>
                                                                <a href="#learnmaths" className="itemdrop">
                                                                    Class 5 NCERT Solutions
                                                                </a>
                                                                <br />
                                                            </Dropdown.Item>
                                                            <Dropdown.Item>
                                                                <a href="#learnmaths" className="itemdrop">
                                                                    Class 4 NCERT Solutions
                                                                </a>
                                                                <br />
                                                            </Dropdown.Item>
                                                            <Dropdown.Item>
                                                                <a href="#learnmaths" className="itemdrop">
                                                                    Class 3 NCERT Solutions
                                                                </a>
                                                                <br />
                                                            </Dropdown.Item>

                                                            <Dropdown.Item>
                                                                <a href="#learnmaths" className="itemdrop">
                                                                    Class 10
                                                                </a>
                                                                <br />
                                                            </Dropdown.Item>
                                                            <Dropdown.Item>
                                                                <a href="#learnmaths" className="itemdrop">
                                                                    Class 9
                                                                </a>
                                                                <br />
                                                            </Dropdown.Item>
                                                            <Dropdown.Item>
                                                                <a href="#learnmaths" className="itemdrop">
                                                                    Class 8
                                                                </a>
                                                                <br />
                                                            </Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </div>
                                                </Dropdown>
                                            </a>
                                        </div>
                                        <div className="dropdown1">
                                            <a href="#ncertsolutions">
                                                <Dropdown as={NavItem}>
                                                    <Dropdown.Toggle className="TuitionDrop" as={NavLink}>
                                                        CBSE
                                                    </Dropdown.Toggle>
                                                    <div className="section">
                                                        <Dropdown.Menu className="SchoolTuition3">
                                                            <Dropdown.Item>
                                                                <a href="#learnmaths" className="itemdrop">
                                                                    Class 12 NCERT Solutions
                                                                </a>
                                                                <br />
                                                            </Dropdown.Item>
                                                            <Dropdown.Item>
                                                                <a href="#learnmaths" className="itemdrop">
                                                                    Class 11 NCERT Solutions
                                                                </a>
                                                                <br />
                                                            </Dropdown.Item>
                                                            <Dropdown.Item>
                                                                <a href="#learnmaths" className="itemdrop">
                                                                    Class 10 NCERT Solutions
                                                                </a>
                                                                <br />
                                                            </Dropdown.Item>
                                                            <Dropdown.Item>
                                                                <a href="#learnmaths" className="itemdrop">
                                                                    Class 9 NCERT Solutions
                                                                </a>
                                                                <br />
                                                            </Dropdown.Item>
                                                            <Dropdown.Item>
                                                                <a href="#learnmaths" className="itemdrop">
                                                                    Class 8 NCERT Solutions
                                                                </a>
                                                                <br />
                                                            </Dropdown.Item>
                                                            <Dropdown.Item>
                                                                <a href="#learnmaths" className="itemdrop">
                                                                    Class 7 NCERT Solutions
                                                                </a>
                                                                <br />
                                                            </Dropdown.Item>
                                                            <Dropdown.Item>
                                                                <a href="#learnmaths" className="itemdrop">
                                                                    Class 6 NCERT Solutions
                                                                </a>
                                                                <br />
                                                            </Dropdown.Item>
                                                            <Dropdown.Item>
                                                                <a href="#learnmaths" className="itemdrop">
                                                                    Class 5 NCERT Solutions
                                                                </a>
                                                                <br />
                                                            </Dropdown.Item>
                                                            <Dropdown.Item>
                                                                <a href="#learnmaths" className="itemdrop">
                                                                    Class 4 NCERT Solutions
                                                                </a>
                                                                <br />
                                                            </Dropdown.Item>
                                                            <Dropdown.Item>
                                                                <a href="#learnmaths" className="itemdrop">
                                                                    Class 3 NCERT Solutions
                                                                </a>
                                                                <br />
                                                            </Dropdown.Item>

                                                            <Dropdown.Item>
                                                                <a href="#learnmaths" className="itemdrop">
                                                                    Class 10
                                                                </a>
                                                                <br />
                                                            </Dropdown.Item>
                                                            <Dropdown.Item>
                                                                <a href="#learnmaths" className="itemdrop">
                                                                    Class 9
                                                                </a>
                                                                <br />
                                                            </Dropdown.Item>
                                                            <Dropdown.Item>
                                                                <a href="#learnmaths" className="itemdrop">
                                                                    Class 8
                                                                </a>
                                                                <br />
                                                            </Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </div>
                                                </Dropdown>
                                            </a>
                                        </div>
                                        <div className="dropdown1">
                                            <a href="#ncertsolutions">
                                                <Dropdown as={NavItem}>
                                                    <Dropdown.Toggle className="TuitionDrop" as={NavLink}>
                                                        ICSE
                                                    </Dropdown.Toggle>
                                                    <div className="section">
                                                        <Dropdown.Menu className="SchoolTuition4">
                                                            <Dropdown.Item>
                                                                <a href="#learnmaths" className="itemdrop">
                                                                    Class 12 NCERT Solutions
                                                                </a>
                                                                <br />
                                                            </Dropdown.Item>
                                                            <Dropdown.Item>
                                                                <a href="#learnmaths" className="itemdrop">
                                                                    Class 11 NCERT Solutions
                                                                </a>
                                                                <br />
                                                            </Dropdown.Item>
                                                            <Dropdown.Item>
                                                                <a href="#learnmaths" className="itemdrop">
                                                                    Class 10 NCERT Solutions
                                                                </a>
                                                                <br />
                                                            </Dropdown.Item>
                                                            <Dropdown.Item>
                                                                <a href="#learnmaths" className="itemdrop">
                                                                    Class 9 NCERT Solutions
                                                                </a>
                                                                <br />
                                                            </Dropdown.Item>
                                                            <Dropdown.Item>
                                                                <a href="#learnmaths" className="itemdrop">
                                                                    Class 8 NCERT Solutions
                                                                </a>
                                                                <br />
                                                            </Dropdown.Item>
                                                            <Dropdown.Item>
                                                                <a href="#learnmaths" className="itemdrop">
                                                                    Class 7 NCERT Solutions
                                                                </a>
                                                                <br />
                                                            </Dropdown.Item>
                                                            <Dropdown.Item>
                                                                <a href="#learnmaths" className="itemdrop">
                                                                    Class 6 NCERT Solutions
                                                                </a>
                                                                <br />
                                                            </Dropdown.Item>
                                                            <Dropdown.Item>
                                                                <a href="#learnmaths" className="itemdrop">
                                                                    Class 5 NCERT Solutions
                                                                </a>
                                                                <br />
                                                            </Dropdown.Item>
                                                            <Dropdown.Item>
                                                                <a href="#learnmaths" className="itemdrop">
                                                                    Class 4 NCERT Solutions
                                                                </a>
                                                                <br />
                                                            </Dropdown.Item>
                                                            <Dropdown.Item>
                                                                <a href="#learnmaths" className="itemdrop">
                                                                    Class 3 NCERT Solutions
                                                                </a>
                                                                <br />
                                                            </Dropdown.Item>

                                                            <Dropdown.Item>
                                                                <a href="#learnmaths" className="itemdrop">
                                                                    Class 10
                                                                </a>
                                                                <br />
                                                            </Dropdown.Item>
                                                            <Dropdown.Item>
                                                                <a href="#learnmaths" className="itemdrop">
                                                                    Class 9
                                                                </a>
                                                                <br />
                                                            </Dropdown.Item>
                                                            <Dropdown.Item>
                                                                <a href="#learnmaths" className="itemdrop">
                                                                    Class 8
                                                                </a>
                                                                <br />
                                                            </Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </div>
                                                </Dropdown>
                                            </a>
                                        </div>
                                        <div className="dropdown1">
                                            <a href="#ncertsolutions">
                                                <Dropdown as={NavItem}>
                                                    <Dropdown.Toggle className="TuitionDrop" as={NavLink}>
                                                        State boards
                                                    </Dropdown.Toggle>
                                                    <div className="section">
                                                        <Dropdown.Menu className="SchoolTuition5">
                                                            <Dropdown.Item>
                                                                <a href="#learnmaths" className="itemdrop">
                                                                    Class 12 NCERT Solutions
                                                                </a>
                                                                <br />
                                                            </Dropdown.Item>
                                                            <Dropdown.Item>
                                                                <a href="#learnmaths" className="itemdrop">
                                                                    Class 11 NCERT Solutions
                                                                </a>
                                                                <br />
                                                            </Dropdown.Item>
                                                            <Dropdown.Item>
                                                                <a href="#learnmaths" className="itemdrop">
                                                                    Class 10 NCERT Solutions
                                                                </a>
                                                                <br />
                                                            </Dropdown.Item>
                                                            <Dropdown.Item>
                                                                <a href="#learnmaths" className="itemdrop">
                                                                    Class 9 NCERT Solutions
                                                                </a>
                                                                <br />
                                                            </Dropdown.Item>
                                                            <Dropdown.Item>
                                                                <a href="#learnmaths" className="itemdrop">
                                                                    Class 8 NCERT Solutions
                                                                </a>
                                                                <br />
                                                            </Dropdown.Item>
                                                            <Dropdown.Item>
                                                                <a href="#learnmaths" className="itemdrop">
                                                                    Class 7 NCERT Solutions
                                                                </a>
                                                                <br />
                                                            </Dropdown.Item>
                                                            <Dropdown.Item>
                                                                <a href="#learnmaths" className="itemdrop">
                                                                    Class 6 NCERT Solutions
                                                                </a>
                                                                <br />
                                                            </Dropdown.Item>
                                                            <Dropdown.Item>
                                                                <a href="#learnmaths" className="itemdrop">
                                                                    Class 5 NCERT Solutions
                                                                </a>
                                                                <br />
                                                            </Dropdown.Item>
                                                            <Dropdown.Item>
                                                                <a href="#learnmaths" className="itemdrop">
                                                                    Class 4 NCERT Solutions
                                                                </a>
                                                                <br />
                                                            </Dropdown.Item>
                                                            <Dropdown.Item>
                                                                <a href="#learnmaths" className="itemdrop">
                                                                    Class 3 NCERT Solutions
                                                                </a>
                                                                <br />
                                                            </Dropdown.Item>

                                                            <Dropdown.Item>
                                                                <a href="#learnmaths" className="itemdrop">
                                                                    Class 10
                                                                </a>
                                                                <br />
                                                            </Dropdown.Item>
                                                            <Dropdown.Item>
                                                                <a href="#learnmaths" className="itemdrop">
                                                                    Class 9
                                                                </a>
                                                                <br />
                                                            </Dropdown.Item>
                                                            <Dropdown.Item>
                                                                <a href="#learnmaths" className="itemdrop">
                                                                    Class 8
                                                                </a>
                                                                <br />
                                                            </Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </div>
                                                </Dropdown>
                                            </a>
                                        </div>

                                        <div className="dropdown1">
                                            <a href="#ncertsolutions">
                                                <Dropdown as={NavItem}>
                                                    <Dropdown.Toggle className="TuitionDrop" as={NavLink}>
                                                        competitive Exams
                                                    </Dropdown.Toggle>
                                                    <div className="section">
                                                        <Dropdown.Menu className="SchoolTuition6">
                                                            <Dropdown.Item>
                                                                <a href="#learnmaths" className="itemdrop">
                                                                    Class 12 NCERT Solutions
                                                                </a>
                                                                <br />
                                                            </Dropdown.Item>
                                                            <Dropdown.Item>
                                                                <a href="#learnmaths" className="itemdrop">
                                                                    Class 11 NCERT Solutions
                                                                </a>
                                                                <br />
                                                            </Dropdown.Item>
                                                            <Dropdown.Item>
                                                                <a href="#learnmaths" className="itemdrop">
                                                                    Class 10 NCERT Solutions
                                                                </a>
                                                                <br />
                                                            </Dropdown.Item>
                                                            <Dropdown.Item>
                                                                <a href="#learnmaths" className="itemdrop">
                                                                    Class 9 NCERT Solutions
                                                                </a>
                                                                <br />
                                                            </Dropdown.Item>
                                                            <Dropdown.Item>
                                                                <a href="#learnmaths" className="itemdrop">
                                                                    Class 8 NCERT Solutions
                                                                </a>
                                                                <br />
                                                            </Dropdown.Item>
                                                            <Dropdown.Item>
                                                                <a href="#learnmaths" className="itemdrop">
                                                                    Class 7 NCERT Solutions
                                                                </a>
                                                                <br />
                                                            </Dropdown.Item>
                                                            <Dropdown.Item>
                                                                <a href="#learnmaths" className="itemdrop">
                                                                    Class 6 NCERT Solutions
                                                                </a>
                                                                <br />
                                                            </Dropdown.Item>
                                                            <Dropdown.Item>
                                                                <a href="#learnmaths" className="itemdrop">
                                                                    Class 5 NCERT Solutions
                                                                </a>
                                                                <br />
                                                            </Dropdown.Item>
                                                            <Dropdown.Item>
                                                                <a href="#learnmaths" className="itemdrop">
                                                                    Class 4 NCERT Solutions
                                                                </a>
                                                                <br />
                                                            </Dropdown.Item>
                                                            <Dropdown.Item>
                                                                <a href="#learnmaths" className="itemdrop">
                                                                    Class 3 NCERT Solutions
                                                                </a>
                                                                <br />
                                                            </Dropdown.Item>

                                                            <Dropdown.Item>
                                                                <a href="#learnmaths" className="itemdrop">
                                                                    Class 10
                                                                </a>
                                                                <br />
                                                            </Dropdown.Item>
                                                            <Dropdown.Item>
                                                                <a href="#learnmaths" className="itemdrop">
                                                                    Class 9
                                                                </a>
                                                                <br />
                                                            </Dropdown.Item>
                                                            <Dropdown.Item>
                                                                <a href="#learnmaths" className="itemdrop">
                                                                    Class 8
                                                                </a>
                                                                <br />
                                                            </Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </div>
                                                </Dropdown>
                                            </a>
                                        </div>
                                        <div className="dropdown1">
                                            <a href="#ncertsolutions">
                                                <Dropdown as={NavItem}>
                                                    <Dropdown.Toggle className="TuitionDrop" as={NavLink}>
                                                        important concepts
                                                    </Dropdown.Toggle>
                                                    <div className="section">
                                                        <Dropdown.Menu className="SchoolTuition7">
                                                            <Dropdown.Item>
                                                                <a href="#learnmaths" className="itemdrop">
                                                                    Class 12 NCERT Solutions
                                                                </a>
                                                                <br />
                                                            </Dropdown.Item>
                                                            <Dropdown.Item>
                                                                <a href="#learnmaths" className="itemdrop">
                                                                    Class 11 NCERT Solutions
                                                                </a>
                                                                <br />
                                                            </Dropdown.Item>
                                                            <Dropdown.Item>
                                                                <a href="#learnmaths" className="itemdrop">
                                                                    Class 10 NCERT Solutions
                                                                </a>
                                                                <br />
                                                            </Dropdown.Item>
                                                            <Dropdown.Item>
                                                                <a href="#learnmaths" className="itemdrop">
                                                                    Class 9 NCERT Solutions
                                                                </a>
                                                                <br />
                                                            </Dropdown.Item>
                                                            <Dropdown.Item>
                                                                <a href="#learnmaths" className="itemdrop">
                                                                    Class 8 NCERT Solutions
                                                                </a>
                                                                <br />
                                                            </Dropdown.Item>
                                                            <Dropdown.Item>
                                                                <a href="#learnmaths" className="itemdrop">
                                                                    Class 7 NCERT Solutions
                                                                </a>
                                                                <br />
                                                            </Dropdown.Item>
                                                            <Dropdown.Item>
                                                                <a href="#learnmaths" className="itemdrop">
                                                                    Class 6 NCERT Solutions
                                                                </a>
                                                                <br />
                                                            </Dropdown.Item>
                                                            <Dropdown.Item>
                                                                <a href="#learnmaths" className="itemdrop">
                                                                    Class 5 NCERT Solutions
                                                                </a>
                                                                <br />
                                                            </Dropdown.Item>
                                                            <Dropdown.Item>
                                                                <a href="#learnmaths" className="itemdrop">
                                                                    Class 4 NCERT Solutions
                                                                </a>
                                                                <br />
                                                            </Dropdown.Item>
                                                            <Dropdown.Item>
                                                                <a href="#learnmaths" className="itemdrop">
                                                                    Class 3 NCERT Solutions
                                                                </a>
                                                                <br />
                                                            </Dropdown.Item>

                                                            <Dropdown.Item>
                                                                <a href="#learnmaths" className="itemdrop">
                                                                    Class 10
                                                                </a>
                                                                <br />
                                                            </Dropdown.Item>
                                                            <Dropdown.Item>
                                                                <a href="#learnmaths" className="itemdrop">
                                                                    Class 9
                                                                </a>
                                                                <br />
                                                            </Dropdown.Item>
                                                            <Dropdown.Item>
                                                                <a href="#learnmaths" className="itemdrop">
                                                                    Class 8
                                                                </a>
                                                                <br />
                                                            </Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </div>
                                                </Dropdown>
                                            </a>
                                        </div>
                                        <div className="dropdown1">
                                            <a href="#ncertsolutions">
                                                <Dropdown as={NavItem}>
                                                    <Dropdown.Toggle className="TuitionDrop" as={NavLink}>
                                                        Others
                                                    </Dropdown.Toggle>
                                                    <div className="section">
                                                        <Dropdown.Menu className="SchoolTuition8">
                                                            <Dropdown.Item>
                                                                <a href="#learnmaths" className="itemdrop">
                                                                    Class 12 NCERT Solutions
                                                                </a>
                                                                <br />
                                                            </Dropdown.Item>
                                                            <Dropdown.Item>
                                                                <a href="#learnmaths" className="itemdrop">
                                                                    Class 11 NCERT Solutions
                                                                </a>
                                                                <br />
                                                            </Dropdown.Item>
                                                            <Dropdown.Item>
                                                                <a href="#learnmaths" className="itemdrop">
                                                                    Class 10 NCERT Solutions
                                                                </a>
                                                                <br />
                                                            </Dropdown.Item>
                                                            <Dropdown.Item>
                                                                <a href="#learnmaths" className="itemdrop">
                                                                    Class 9 NCERT Solutions
                                                                </a>
                                                                <br />
                                                            </Dropdown.Item>
                                                            <Dropdown.Item>
                                                                <a href="#learnmaths" className="itemdrop">
                                                                    Class 8 NCERT Solutions
                                                                </a>
                                                                <br />
                                                            </Dropdown.Item>
                                                            <Dropdown.Item>
                                                                <a href="#learnmaths" className="itemdrop">
                                                                    Class 7 NCERT Solutions
                                                                </a>
                                                                <br />
                                                            </Dropdown.Item>
                                                            <Dropdown.Item>
                                                                <a href="#learnmaths" className="itemdrop">
                                                                    Class 6 NCERT Solutions
                                                                </a>
                                                                <br />
                                                            </Dropdown.Item>
                                                            <Dropdown.Item>
                                                                <a href="#learnmaths" className="itemdrop">
                                                                    Class 5 NCERT Solutions
                                                                </a>
                                                                <br />
                                                            </Dropdown.Item>
                                                            <Dropdown.Item>
                                                                <a href="#learnmaths" className="itemdrop">
                                                                    Class 4 NCERT Solutions
                                                                </a>
                                                                <br />
                                                            </Dropdown.Item>
                                                            <Dropdown.Item>
                                                                <a href="#learnmaths" className="itemdrop">
                                                                    Class 3 NCERT Solutions
                                                                </a>
                                                                <br />
                                                            </Dropdown.Item>

                                                            <Dropdown.Item>
                                                                <a href="#learnmaths" className="itemdrop">
                                                                    Class 10
                                                                </a>
                                                                <br />
                                                            </Dropdown.Item>
                                                            <Dropdown.Item>
                                                                <a href="#learnmaths" className="itemdrop">
                                                                    Class 9
                                                                </a>
                                                                <br />
                                                            </Dropdown.Item>
                                                            <Dropdown.Item>
                                                                <a href="#learnmaths" className="itemdrop">
                                                                    Class 8
                                                                </a>
                                                                <br />
                                                            </Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </div>
                                                </Dropdown>
                                            </a>
                                        </div>
                                    </div>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Nav.Item>
                        <Nav.Item className="SecUlListFLC">
                            <Dropdown as={NavItem}>
                                <Dropdown.Toggle className="menuItemsDrop" as={NavLink}>Free Live Classes</Dropdown.Toggle>

                            </Dropdown>
                        </Nav.Item>
                        <div class="float-container">
                            <div class="float-child">

                                <Nav.Item className="SecUlList">
                                    <Dropdown as={NavItem}>
                                        <Dropdown.Toggle className="menuItemsDrop" as={NavLink}>More</Dropdown.Toggle>
                                        <Dropdown.Menu className="menuitem2">
                                            <div className="scrollbarSec1">
                                                <div className="scrollbar">
                                                    <Dropdown.Item>
                                                        <a href="#ourresults">
                                                            <strong className="item1">
                                                                <i class="fa-regular fa-book"></i>Our results
                                                            </strong>
                                                        </a>
                                                        <p className="menuitem3">
                                                            A celebration of all
                                                            <br /> our success stories
                                                        </p>
                                                    </Dropdown.Item>
                                                    <hr />
                                                    <Dropdown.Item>
                                                        <a href="#childsafety">
                                                            <strong className="item1">
                                                                <i class="fa-solid fa-shield"></i>Child safety
                                                            </strong>
                                                        </a>
                                                        <p className="menuitem3">
                                                            creating a safe learning
                                                            <br /> environment for every child
                                                        </p>
                                                    </Dropdown.Item>
                                                    <hr />
                                                    <Dropdown.Item>
                                                        <a href="#helpindialearn">
                                                            <strong className="item1">
                                                                <i class="fa-sharp fa-solid fa-user-plus"></i>
                                                                Help India learn
                                                            </strong>
                                                        </a>
                                                        <p className="menuitem3">
                                                            helps in learning for <br />
                                                            children affected by pandemic
                                                        </p>
                                                    </Dropdown.Item>
                                                    <hr />
                                                    <Dropdown.Item>
                                                        <a href="#wave">
                                                            <strong className="item1">
                                                                <i class="fa-regular fa-w"></i>Wave
                                                            </strong>
                                                        </a>
                                                        <p className="menuitem3">
                                                            Highly-interactive classroom
                                                            <br /> that makes learning fun
                                                        </p>
                                                    </Dropdown.Item>
                                                    <hr />
                                                    <Dropdown.Item>
                                                        <a href="#improvement">
                                                            <strong className="item1">
                                                                <i class="fa-sharp fa-solid fa-shield-halved"></i>
                                                                TuitionWorld improvement
                                                                <br />
                                                                promise(TIP)
                                                            </strong>
                                                        </a>
                                                        <p className="menuitem3">
                                                            We guarantee improvements in <br />
                                                            schools and competitive exams
                                                        </p>
                                                    </Dropdown.Item>
                                                    <hr />
                                                    <Dropdown.Item>
                                                        <a href="#mastertalks">
                                                            <strong className="item1">
                                                                <i class="fa-solid fa-microphone"></i>Master
                                                                talks
                                                            </strong>
                                                        </a>
                                                        <p className="menuitem3">
                                                            Heartfelt and insightful
                                                            <br />
                                                            conversations with
                                                            <br /> super achievers
                                                        </p>
                                                    </Dropdown.Item>
                                                </div>
                                                <div className="scrollbar1">
                                                    <Dropdown.Item>
                                                        <strong className="list">
                                                            <i class="fa-brands fa-slack"></i>Resources
                                                        </strong>
                                                        <br />
                                                        <br />
                                                        <Dropdown.Item>
                                                            <a href="#learnmaths" className="list">
                                                                Testimonials
                                                            </a>
                                                            <br />
                                                        </Dropdown.Item>
                                                        <Dropdown.Item>
                                                            <a href="#learnmaths" className="list">
                                                                FAQs
                                                            </a>
                                                            <br />
                                                        </Dropdown.Item>
                                                        <Dropdown.Item>
                                                            <a href="#learnmaths" className="list">
                                                                Blogs
                                                            </a>
                                                            <br />
                                                        </Dropdown.Item>
                                                        <Dropdown.Item>
                                                            <a href="#learnmaths" className="list">
                                                                News
                                                            </a>
                                                            <br />
                                                        </Dropdown.Item>
                                                        <Dropdown.Item>
                                                            <a href="#learnmaths" className="list">
                                                                Testimonials
                                                            </a>
                                                            <br />
                                                        </Dropdown.Item>
                                                    </Dropdown.Item>
                                                    <Dropdown.Item>
                                                        <a href="#Aboutus">
                                                            <strong className="item1">
                                                                <i class="fa-solid fa-user"></i>About us
                                                            </strong>
                                                        </a>
                                                        <p className="menuitem3">
                                                            know more about our passion to <br />
                                                            revolutions online education
                                                        </p>
                                                    </Dropdown.Item>
                                                    <hr />
                                                    <Dropdown.Item>
                                                        <a href="#Carrers">
                                                            <strong className="item1">
                                                                <i class="fa-solid fa-briefcase"></i>Careers
                                                            </strong>
                                                        </a>
                                                        <p className="menuitem3">
                                                            check out roles we're
                                                            <br />
                                                            currently hiring for
                                                        </p>
                                                    </Dropdown.Item>
                                                    <hr />
                                                    <Dropdown.Item>
                                                        <a href="#Become a teacher">
                                                            <strong className="item1">
                                                                <i class="fa-solid fa-glasses"></i>Become a
                                                                teacher
                                                            </strong>
                                                        </a>
                                                        <p className="menuitem3">
                                                            Apply now to join
                                                            <br />
                                                            the team of passionate teachers
                                                        </p>
                                                    </Dropdown.Item>
                                                    <hr />
                                                    <Dropdown.Item>
                                                        <a href="Contactus">
                                                            <strong className="item1">
                                                                <i class="fa-solid fa-address-book"></i>Contact
                                                                us
                                                            </strong>
                                                        </a>
                                                        <p className="menuitem3">
                                                            Got questions please
                                                            <br />
                                                            get in touch with us
                                                        </p>
                                                    </Dropdown.Item>
                                                </div>
                                            </div>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Nav.Item>
                            </div>
                        </div>
                        <Button className="SigninButton" variant="transparent">
                            SignIn
                        </Button>{" "}
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

// export default NavbarDemo;
