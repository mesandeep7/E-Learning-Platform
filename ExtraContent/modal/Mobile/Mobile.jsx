
import React, { useEffect, useState } from 'react';
import './Mobile.css';

const MobileLoginComponent = () => {
  const [phoneNumberInputs, setPhoneNumberInputs] = useState([]);
  const [nextButtonDisabled, setNextButtonDisabled] = useState(true);
  const [otpInputs, setOtpInputs] = useState([]);
  const [verifyButtonDisabled, setVerifyButtonDisabled] = useState(true);
  const [showOTPVerification, setShowOTPVerification] = useState(false);

  useEffect(() => {
    const inputs = document.querySelectorAll('.input-bx input');
    setPhoneNumberInputs(inputs);
  }, []);

  useEffect(() => {
    const areAllPhoneNumberInputsFilled = () => {
      let allFilled = true;
      phoneNumberInputs.forEach((input) => {
        if (input.value.length === 0) {
          allFilled = false;
        }
      });
      return allFilled;
    };

    const areAllPhoneNumberInputsValid = () => {
      let allValid = true;
      phoneNumberInputs.forEach((input) => {
        const phoneNumber = input.value;
        if (phoneNumber.length !== 10 || !/^[0-9]+$/.test(phoneNumber)) {
          allValid = false;
        }
      });
      return allValid;
    };

    const handleInput = () => {
      if (areAllPhoneNumberInputsValid() && areAllPhoneNumberInputsFilled()) {
        setNextButtonDisabled(false);
      } else {
        setNextButtonDisabled(true);
      }
    };

    phoneNumberInputs.forEach((input) => {
      input.addEventListener('input', handleInput);
    });

    return () => {
      phoneNumberInputs.forEach((input) => {
        input.removeEventListener('input', handleInput);
      });
    };
  }, [phoneNumberInputs]);

  useEffect(() => {
    const inputs = document.querySelectorAll('.otp-card-inputs input');
    setOtpInputs(inputs);
  }, []);

  useEffect(() => {
    const handleOTPInput = (e, input, index) => {
      const currentElement = e.target;
      const inputValue = currentElement.value;
      const isValidDigit = /^\d$/.test(inputValue);

      if (isValidDigit) {
        if (inputValue !== '') {
          currentElement.value = inputValue.slice(-1); // Only keep the last digit
        }

        const nextInput = otpInputs[index + 1];
        const prevInput = otpInputs[index - 1];

        if (nextInput && inputValue !== '') {
          nextInput.focus(); // Move focus to the next input field
        } else if (prevInput && inputValue === '') {
          e.preventDefault(); // Prevent the default behavior of backspace
          prevInput.focus(); // Move focus to the previous input field
        }
      } else if (inputValue === '' && e.inputType === 'deleteContentBackward') {
        const prevInput = otpInputs[index - 1];
        if (prevInput) {
          prevInput.value = ''; // Clear the value of the previous input field
          prevInput.focus(); // Move focus to the previous input field
        }
      } else {
        currentElement.value = ''; // Clear the input if it's not a valid digit
      }

      if (areAllOTPInputsFilled()) {
        setVerifyButtonDisabled(false);
      } else {
        setVerifyButtonDisabled(true);
      }
    };

    otpInputs.forEach((input, index) => {
      input.addEventListener('input', (e) => {
        handleOTPInput(e, input, index);
      });

      // Additional event listener to handle backspace key
      input.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace' && input.value === '') {
          const prevInput = otpInputs[index - 1];
          if (prevInput) {
            prevInput.focus();
          }
        }
      });
    });

    return () => {
      otpInputs.forEach((input, index) => {
        input.removeEventListener('input', (e) => {
          handleOTPInput(e, input, index);
        });
        input.removeEventListener('keydown', (e) => {
          if (e.key === 'Backspace' && input.value === '') {
            const prevInput = otpInputs[index - 1];
            if (prevInput) {
              prevInput.focus();
            }
          }
        });
      });
    };
  }, [otpInputs]);

  const handleNextButtonClick = () => {
    const mobileNumber = phoneNumberInputs[0].value;

    if (mobileNumber.length === 10 && /^\d+$/.test(mobileNumber)) {
      setShowOTPVerification(true);
      otpInputs[0].focus();
    }
  };

  const handleVerifyButtonClick = () => {
    // Handle verify button click logic here
  };

  const areAllOTPInputsFilled = () => {
    let allFilled = true;
    otpInputs.forEach((input) => {
      if (input.value.length === 0) {
        allFilled = false;
      }
    });
    return allFilled;
  };

  return (
    <div>
      {/* Button trigger modal */}
      <button
        type="button"
        className="btn btn-primary ml-5 mt-5"
        data-toggle="modal"
        data-target="#exampleModal"
        data-backdrop="static"
      >
        Register Now
      </button>
      {/* Modal */}
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog mt-5">
          <div className="modal-content">
            <div className="modal-header">
              <img
                className="modal-title thanking-customers-section-modal-title modal-logo"
                id="exampleModalLabel"
                src="https://res.cloudinary.com/dk1iptlkk/image/upload/v1677153127/logoTW_r7wvph.png"
                alt=""
                srcSet=""
              />
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                style={{ outline: 'none', border: 'none', background: 'transparent' }}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <h1 className="modal-heading">Enroll now to learn LIVE Online from India's best teachers</h1>
            </div>
            <div className="modal-circle">
              <div>
                <i className="fa-solid fa-circle-exclamation modal-circle-clr" id="exclamationIcon"></i>
                <i className="fa-solid fa-circle-check modal-circle-clr" id="checkIcon" style={{ display: 'none' }}></i>
              </div>
              <span className="mb-4 modal-circle-clr">__________________</span>
              <div>
                <i className="fa-regular fa-circle modal-circle-clr" id="circleIcon2"></i>
                <i className="fa-solid fa-circle-check modal-circle-clr" id="checkIcon2" style={{ display: 'none' }}></i>
                {/* <i className="fa-solid fa-circle-check modal-circle-clr" id="exclamationIcon2"></i> */}
              </div>
            </div>
            <div className="modal-data">
              <p className="mr-3">Enter number</p>
              <p className="vsblty-hdn">------------</p>
              <p>Enter mail</p>
            </div>
            <div className="otp-card" style={{ display: showOTPVerification ? 'none' : 'block' }}>
              <p className="modal-para">Enter your mobile number to continue your journey</p>
              <div className="input-bx">
                <input type="text" required maxLength="10" />
                <span>Number</span>
              </div>
              <button id="nextButton" disabled={nextButtonDisabled} className="mt-3" onClick={handleNextButtonClick}>
                Next
              </button>
            </div>
            <div id="otpVerificationCard" style={{ display: showOTPVerification ? 'block' : 'none' }}>
              {/* OTP verification card content */}
              <div className="otp-card">
                <h1 className="modal-heading">OTP Verification</h1>
                <p className="modal-para">Code has been sent to *******456</p>
                <div className="otp-card-inputs">
                  <input type="text" maxLength="1" autoFocus />
                  <input type="text" maxLength="1" />
                  <input type="text" maxLength="1" />
                  <input type="text" maxLength="1" />
                  <input type="text" maxLength="1" />
                  <input type="text" maxLength="1" />
                </div>
                <p className="modal-para">
                  Didn't get the OTP! <a href="#">Resend it</a>
                </p>
                <button id="verifyButton" disabled={verifyButtonDisabled} onClick={handleVerifyButtonClick}>
                  Verify
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileLoginComponent;
