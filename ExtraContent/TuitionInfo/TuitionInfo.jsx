import React from 'react';
import TuitionLogo from '../images/learn.jpg' 
import PhoneImg from '../images/icons8-phone-64.png'

const TuitionInfo = () => {
  return (
    <div className="container  shadow p-3 mb-5 bg-dark rounded p-4 p-md-3 mb-3 rounded text-body-emphasis bg-body-secondary">
      <div className="row g-0 ">
        <div className="col-md-4 my-4">
          <img src={TuitionLogo} className="img-fluid" alt="..." style={{ height: '350px' }} />
        </div>
        <div className="col-md-8 col order-12">
          <div className="p-4 p-md-3 mb-4 rounded text-body-emphasis bg-body-secondary">
            <div className="col-lg-12 px-0  ">
              <h1 className="display-6 fst-italic ">Tuition World</h1>
              <p>A Smart Way Of Learning</p>
              <p className="lead my-3">
                We are committed to taking education to every single door, making it a superb blend of knowledge and
                job-specific. Our mission is to create ethical and intellectual personnel through qualitative education.
                Today, TUITION WORLD is located at Dilsukhnagar, Hyderabad, Telangana. And, we are looking forward to
                spreading our efficiency at every nook and corner of India.
              </p>
              <div className="d-flex align-items-end flex-column" >
                <a href="#" className="call-back-link" id="breathing-button" title="Talk to Our counsellor" data-bs-toggle="card">
                  <img src={PhoneImg} className="call-back-img img-fluid" alt="Talk to Our counsellor" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TuitionInfo;
