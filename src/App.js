import './App.css';

import { Container, Row, Col } from 'react-bootstrap';
import Card from './components/ThreeDimensionalCard/ThreeDimensionalCard';
import 'animate.css/animate.min.css'; 

// import NavbarDemo from './components/NavbarDemo';
// import {HoverNavbarDemo} from './components/HoverNavbarComponentFile/HoverNavbar';
import NavbarSection from './components/NavbarAshmithaCode/NavbarTuition';
// import ControlledCarousel from './components/Carousel/CarouselSection';
// import Responsive from './components/CardCarousel/CardsCarousel';
// import CountsSection from './components/GCode/CountDemo';
// import TuitionInfo from './components/TuitionInfo/TuitionInfo';
// import TuitionHover from './components/TuitionInfo/TuitionHover';

// import styled from "styled-components";
// import ContentComponent from "./ContentComponentApp";
// import { Footer } from "./components/Footer/Footer";

// import CountUpAnimation from './components/CountSection/CountSection';
// import { MyCarousel } from './components/CarouselChatGpt/CarouselChatGptCode';
// import UncontrolledExample from './ProjectCarousel/ProjectCarousel';
// import {HoverNavbarDemo} from './components/HoverNavbarComponentFile/HoverNavbar'

// import DemoCarousel from './components/demoCarousel/DemoCarousel';
import ContentHover from './components/ContentHover/ContentHover';
import MyClickedComponentDemo from './components/ClickedCarousel/ChatGptClickedComponent';
import SectionCounter from './components/BackgroundNumberCounter/BackgroundNumberCounter';
// import Testimonial from './components/Testimmonials/Testimonials';
// import Testimonials from './components/Testimmonials/Test';
// import CarouselSlider from './components/chatgpt/ChatGpt';
// import MobileLoginComponent from './components/modal/Mobile/Mobile';
// import MailComponent from './components/modal/Mail/Mail';
import ClickedCard from './components/ClickedCard/ClickedCard.jsx';

import DemoCarouselPract from './components/DemoCarouselPract/DemoCarouselPract'



function App() {


  return (
    <>

      <div className='app'>
        {/* <div className='caroSt'> */}
          {/* <DemoCarousel /> */}
          <DemoCarouselPract/>

        {/* </div> */}
        <div className='navSt'>
          <NavbarSection />
        </div>

       
        <ContentHover />
        <MyClickedComponentDemo />
        <SectionCounter />

        <Container fluid>
          <Row>
            <Col>
              <center>
                <h4 className='welcomeCard animate__animated animate__flipInX animate__slower'>WELCOME TO STUDYLAB</h4>
                <h1 className='heading-1 animate__animated animate__flipInX animate__slower'>We Are StudyLab An Online Learning Center...</h1>
                <p className='para-1 animate__animated animate__flipInX animate__slower'>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                <p className='para-2 animate__animated animate__flipInX animate__slower'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                <Card />
              </center>
            </Col>
          </Row>
        </Container>

        <div className='carousel-body-part'>
          <ClickedCard/>
        </div>
        

        {/* <SectionCounter /> */}
        {/* <MobileLoginComponent/> */}
        {/* <MailComponent/> */}
       

      </div>
    </>
  );
};

export default App;



