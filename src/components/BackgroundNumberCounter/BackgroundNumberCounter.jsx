// import React from 'react';
import './BackgroundNumberCounter.css';
import NumberCounter from './NumberCounterCode';
import onlinecourse from './online-class-svgrepo-com.svg';
import student from './student-person-part-2-svgrepo-com.svg';
import instructor from './instructor-lecture-with-sceen-projection-tool-svgrepo-com.svg';
import content from './video-camera-svgrepo-com.svg';
import VideoDemo from './course-video.mp4';

import React from 'react';

const SectionCounter = () => {
  return (
    <section className="ftco-section ftco-counter" id="section-counter">
      <video src={VideoDemo} autoPlay loop muted></video>
      <div className="overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate fadeInUp ftco-animated">
            <div className="block-18 d-flex align-items-center">
              {/* <div className="icon"><span className="flaticon-online"></span></div> */}
              <img src={onlinecourse} alt="" />
              <div className="text">
                <span className="numberSection" ><NumberCounter start={0} end={28000} duration={3000} /></span>
                {/* <strong className="numberSection" ><NumberCounter start={0} end={28000} duration={3000} /></strong> */}
                {/* <span >Online Courses</span> */}
                <p >Online Courses</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate fadeInUp ftco-animated">
            <div className="block-18 d-flex align-items-center">
              {/* <div className="icon"><span className="flaticon-graduated"></span></div> */}
              <img src={student} alt="" />
              <div className="text">
                {/* <strong className="number" data-number="4500"> */}
                <span className="numberSection" >
                <NumberCounter start={0} end={50000} duration={3000} />
                </span>
                {/* <span>Students Enrolled</span> */}
                <p>Students Enrolled</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate fadeInUp ftco-animated">
            <div className="block-18 d-flex align-items-center">
              {/* <div className="icon"><span className="flaticon-instructor"></span></div> */}
              <img src={instructor} alt="" />
              <div className="text">
                {/* <strong className="number" > */}
                <span className="numberSection" >
                <NumberCounter start={0} end={50000} duration={3000} />
                </span>
                <p>Experts Instructors</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate fadeInUp ftco-animated">
            <div className="block-18 d-flex align-items-center">
              {/* <div className="icon"><span className="flaticon-tools"></span></div> */}
              <img src={content} alt="" />
              <div className="text">
                {/* <strong className="number" data-number="300"> */}
                <span className="numberSection" >
                <NumberCounter start={0} end={50000} duration={3000} />
                </span>
                <p>Hours Content</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionCounter;
