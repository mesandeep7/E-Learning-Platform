import React from 'react';
import TuitionLogo from '../images/join.png';
import PhoneImg from '../images/icons8-phone-64.png';
import { OverlayTrigger, Popover } from 'react-bootstrap';
import './TuitionHover.css';

const TuitionHover = () => {
  const popover = (
    <Popover id="popover-basic">
      <Popover.Body>
        Talk to Our counselor
        <br />
        Mounika Pentakota
      </Popover.Body>
    </Popover>
  );

  return (
    <>
      <div className='my-1 infoSecDiv'>
        <div className='text-center'>
          <h1 >Learn from <span> the best </span></h1>
          <p>Explore the concepts with India’s most experienced Teachers!</p>

        </div>

        <div className="container firstbgSec effect5   my-5    p-4 p-md-3 mb-3 rounded text-body-emphasis bg-body-secondary">
        {/* <div className="container effect5   my-5    p-4 p-md-3 mb-3 rounded text-body-emphasis bg-danger"> */}
          <div className="row g-0">
            <div className="col-md-4 my-4">
              <img src={TuitionLogo} className="img-fluid" alt="..." style={{ height: '250px' }} />
            </div>
            <div className="col-md-8 col order-12">
              <div className="p-4 p-md-3 mb-4 rounded text-body-emphasis secondbgSec">
              {/* bg-body-secondary  */}
              {/* <div className="p-4 p-md-3 mb-4 rounded text-body-emphasis bg-info"> */}
                <div className="col-lg-12 px-0">
                  <h1 className="display-6 ">Tuition World</h1>
                  <p>A Smart Way Of Learning</p>
                  <p className="lead my-3">
                    We are committed to taking education to every single door, making it a superb blend of knowledge and
                    job-specific. Our mission is to create ethical and intellectual personnel through qualitative education.
                  </p>
                  {/* Our mission is to create ethical and intellectual personnel through qualitative education.
                    Today, TUITION WORLD is located at Dilsukhnagar, Hyderabad, Telangana. And, we are looking forward to
                    spreading our efficiency at every nook and corner of India. */}
                  <div className="d-flex align-items-end flex-column">
                    <OverlayTrigger trigger="hover" placement="top" overlay={popover}>
                      <a href="#" className="call-back-link" id="breathing-button" title="Talk to Our counsellor ">
                        <img src={PhoneImg} className="call-back-img img-fluid" alt="Talk to Our counsellor " />
                      </a>
                    </OverlayTrigger>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TuitionHover;
