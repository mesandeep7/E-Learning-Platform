import React from "react";
import './Footer.css';
import FooterSection2 from './Footer2';
import FacebookImg from './images/facebook img.svg';
import LinkedinImg from './images/linkedin img.svg';
import footerIcon from './images/footer_wave_bottom.svg';

export const Footer = () => {
    return (
        <>
            {/* <div>
            <img className="FooterWave"src={footerIcon} alt="footer icon" />
            </div> */}
            <div className="DEmo">

                <div className="container ContainerSec">

                    <div class="main-footer">
                        <div className=" d-flex col-sm-12 col-md-6 col-lg-6">
                            <div class="col-sm-6 col-lg-6 col-xs-4">
                                <h2 className="H2Class">COURSES</h2>
                                <a className="Atag" href="/">CBSE</a>
                                <br></br>
                                <a className="Atag" href="/">ICSE</a>
                                <br></br>
                                <a className="Atag" href="/">SSC</a>
                                <br></br>
                                <a className="Atag" href="/">IB</a>
                                <br></br>
                                <a className="Atag" href="/">IGCSE</a>
                                <br></br>

                                <h2 className="H2Class">EXAMS</h2>
                                <a className="Atag" href="">CAT Exam</a>
                                <br></br>
                                <a className="Atag" href="">CAT 2023</a>
                                <br></br>
                                <a className="Atag" href="">GATE Exam</a>
                                <br></br>
                                <a className="Atag" href="">GATE 2024</a>
                                <br></br>
                                <a className="Atag" href="">IAS Exam</a>
                                <br></br>
                                <a className="Atag" href="">UPSC Exam</a>
                                <br></br>
                                <a className="Atag" href="">UPSC Syllabus</a>
                                <br></br>
                                <a className="Atag" href="">UPSC 2023</a>
                                <br></br>
                                <a className="Atag" href="">Bank Exam</a><br></br>
                                <a className="Atag" href="">Government Exams</a><br></br>
                                <a className="Atag" href="">Education News</a>
                            </div>
                            <div class="col-sm-12 col-lg-6 col-xs-4">
                                <h2 className="H2Class">RESOURCES</h2>
                                <a className="Atag" href="">Worksheets</a><br></br>
                                <a className="Atag" href=""> Answer</a><br></br>
                                <a className="Atag" href="">DSSL</a><br></br>
                                <a className="Atag" href="">Home Tuition</a><br></br>
                                <a className="Atag" href="">All Products</a><br></br>
                                <a className="Atag" href="">Calculators</a><br></br>
                                <a className="Atag" href="">Formulas</a><br></br>
                                <br></br>
                                <br></br>
                                <h2 className="H2Class">CLASSES</h2>
                                <a className="Atag" href="">Kids Learning</a><br></br>
                                <a className="Atag" href="">Class 1<sup>st</sup> - 3<sup>rd</sup></a><br></br>
                                <a className="Atag" href="">Class 4<sup>th</sup> - 5<sup>th</sup></a><br></br>
                                <a className="Atag" href="">Class 6<sup>th</sup> - 10<sup>th</sup></a><br></br>
                                <a className="Atag" href="">Class 11<sup>th</sup> - 12<sup>th</sup></a><br></br>
                                <a className="Atag" href="">Tuition Centre</a><br></br>
                            </div>
                        </div>
                        <div className="d-flex col-sm-12 col-md-6 col-lg-6">
                            <div class="col-sm-6 col-lg-6 col-xs-4">
                                <h2 className="H2Class">EXAM PREPARATION</h2>
                                <a className="Atag" href="">Free CAT Prep</a><br></br>
                                <a className="Atag" href="">Free IAS Prep</a><br></br>
                                <a className="Atag" href="">Maths</a><br></br>
                                <a className="Atag" href="">Physics</a><br></br>
                                <a className="Atag" href="">Chemistry</a><br></br>
                                <a className="Atag" href="">Biology</a><br></br>
                                <a className="Atag" href="">JEE 2023</a><br></br>
                                <a className="Atag" href="">JEE Advanced 2023 </a><br></br>
                                <a className="Atag" href="">JEE Main Mock Test</a><br></br>
                                <a className="Atag" href="">JEE Main 2023 Qn </a><br></br>
                                <a className="Atag" href="">JEE Main 2022 Qn</a><br></br>
                                <a className="Atag" href="">JEE Advanced 2022 Qn</a><br></br>
                                <a className="Atag" href="">NEET 2023 Qn</a><br></br>
                                <a className="Atag" href="">NEET 2023 Qn Analysis</a><br></br>
                                <a className="Atag" href="">NEET 2022 Ans</a><br></br>
                                <a className="Atag" href="" rel="nofollow" target="_blank"> Exam Prep</a><br></br>
                                <br></br>

                            </div>
                            <div class="col-sm-2  col-lg-6 col-xs-4">
                                <h2 className="H2Class">COMPANY</h2>
                                <a className="Atag" href="">About Us</a><br></br>
                                <a className="Atag" href="">Contact Us</a><br></br>
                                <a className="Atag" href="" rel="nofollow">Contact our Financial Partners</a><br></br>
                                <a className="Atag" href="">Investors</a><br></br>
                                <a className="Atag" href="">Careers</a><br></br>
                                <a className="Atag" href="">Media</a><br></br>
                                <a className="Atag" href=""> Education for All</a><br></br>
                                <a className="Atag" href=""> Tuition World APP</a><br></br>
                                <a className="Atag" href="">FAQ</a><br></br>
                                <a className="Atag" href="" rel="nofollow">The Learning Tree</a><br></br>
                                <a className="Atag" href="">Support</a><br></br>
                                <a className="Atag" href="" rel="nofollow">Faces - Life at tuition world</a><br></br>
                                <a className="Atag" href="" rel="nofollow">Blog</a><br></br>
                                <a className="Atag" href=""> Give</a><br></br>
                                <br></br>
                                <h2 className="H2Class">FOLLOW US</h2>
                                <div class="footer-col-list universal-footer-social-links hidden-xs">
                                    <a className="Atag" href="">
                                        <img src={FacebookImg} style={{ margin: "0 20px 0 0" }} alt="Facebook" width="28" height="28" class="" />
                                    </a><a className="Atag" href="">
                                        <img src={LinkedinImg} alt="linkedin" width="28" height="28" class="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterSection2 />
        </>
    )
}
