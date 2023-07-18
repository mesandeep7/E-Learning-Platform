


// export default function MailComponent(){
//     return(
//         <div>
//         <button type="button" className="btn btn-primary ml-5 mt-5" data-toggle="modal" data-target="#exampleModal2" data-backdrop="static">
//             Register Now
//         </button>

//         <div className="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel2" aria-hidden="true">
//             <div className="modal-dialog mt-5">
//                 <div className="modal-content">
//                     <div className="modal-header">
//                         <img className="modal-title thanking-customers-section-modal-title modal-logo" id="exampleModalLabel" src="https://res.cloudinary.com/dk1iptlkk/image/upload/v1677153127/logoTW_r7wvph.png" alt="" srcset="" />
//                         <button type="button" className="close" data-dismiss="modal" aria-label="Close">
//                             <span aria-hidden="true">&times;</span>
//                         </button>
//                     </div>
//                     <div className="modal-body">
//                         <h1 className="modal-heading">Enroll now to learn LIVE Online from India's best teachers</h1>
//                     </div>
//                     <div className="modal-circle">
//                         <div>
//                             <i className="fa-solid fa-circle-check modal-circle-clr"></i>
//                         </div>
                        
//                         <span className="mb-4 modal-circle-clr">__________________</span>

//                         <div>
//                             <i className="fa-solid fa-circle-exclamation modal-circle-clr"></i>
//                             <i className="fa-solid fa-circle-check modal-circle-clr" style="display: none;" id="circleCheck2"></i>
//                         </div>
                        
//                     </div>
//                     <div className="modal-data">
//                         <p className="mr-3">Enter number</p>
//                         <p className="vsblty-hdn">------------</p>
//                         <p>Enter mail</p>
//                     </div>
//                     <div className="otp-card">
//                         <p className="modal-para">Enter your mail to continue your journey</p>
//                         <div className="input-bx">
//                             <input type="email" required="required" />
//                             <span>Mail</span>
//                         </div>
//                     <button id="nextButton2" disabled="disabled" className="mt-3">Next</button>
//                     </div>
                    
//                     <div id="otpVerificationCard2" style="display: none;">
//                         <div className="otp-card">
//                             <h1 className="modal-heading">OTP Verification</h1>
//                             <p className="modal-para">Code has been sent to *******456</p>
//                             <div className="otp-card-inputs">
//                                 <input type="text" maxlength="1" autofocus />
//                                 <input type="text" maxlength="1" />
//                                 <input type="text" maxlength="1" />
//                                 <input type="text" maxlength="1" />
//                                 <input type="text" maxlength="1" />
//                                 <input type="text" maxlength="1" />
//                             </div>
//                             <p className="modal-para">Didn't get the OTP! <a href="#">Resend it</a></p>
//                             <button id="verifyButton2" disabled="disabled">Submit</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>

//     </div>

//     )
// }

// import { useState } from 'react';
// import './Mail.css';

// export default function MailComponent() {
//   const [isEmailValid, setEmailValid] = useState(false);

//   const handleEmailInput = (event) => {
//     const email = event.target.value;
//     const isValid = isValidEmail(email);
//     setEmailValid(isValid);
//   };

//   const isValidEmail = (email) => {
//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailPattern.test(email);
//   };

//   return (
//     <div>
//       <button
//         type="button"
//         className="btn btn-primary ml-5 mt-5"
//         data-toggle="modal"
//         data-target="#exampleModal2"
//         data-backdrop="static"
//       >
//         Register Now
//       </button>

//       <div className="modal fade" id="exampleModal2" tabIndex="-1" aria-labelledby="exampleModalLabel2" aria-hidden="true">
//         <div className="modal-dialog mt-5">
//           <div className="modal-content">
//             <div className="modal-header">
//               <img
//                 className="modal-title thanking-customers-section-modal-title modal-logo"
//                 id="exampleModalLabel"
//                 src="https://res.cloudinary.com/dk1iptlkk/image/upload/v1677153127/logoTW_r7wvph.png"
//                 alt=""
//                 srcSet=""
//               />
//               <button type="button" className="close" data-dismiss="modal" aria-label="Close">
//                 <span aria-hidden="true">&times;</span>
//               </button>
//             </div>
//             <div className="modal-body">
//               <h1 className="modal-heading">Enroll now to learn LIVE Online from India's best teachers</h1>
//             </div>
//             <div className="modal-circle">
//               <div>
//                 <i className="fa-solid fa-circle-check modal-circle-clr"></i>
//               </div>

//               <span className="mb-4 modal-circle-clr">__________________</span>

//               <div>
//                 <i className="fa-solid fa-circle-exclamation modal-circle-clr"></i>
//                 <i className="fa-solid fa-circle-check modal-circle-clr" style={{ display: 'none' }} id="circleCheck2"></i>
//               </div>
//             </div>
//             <div className="modal-data">
//               <p className="mr-3">Enter number</p>
//               <p className="vsblty-hdn">------------</p>
//               <p>Enter mail</p>
//             </div>
//             <div className="otp-card">
//               <p className="modal-para">Enter your mail to continue your journey</p>
//               <div className="input-bx">
//                 <input type="email" required="required" onChange={handleEmailInput} />
//                 <span>Mail</span>
//               </div>
//               <button id="nextButton2" disabled={!isEmailValid} className="mt-3">
//                 Next
//               </button>
//             </div>

//             <div id="otpVerificationCard2" style={{ display: 'none' }}>
//               <div className="otp-card">
//                 <h1 className="modal-heading">OTP Verification</h1>
//                 <p className="modal-para">Code has been sent to *******456</p>
//                 <div className="otp-card-inputs">
//                   <input type="text" maxLength="1" autoFocus />
//                   <input type="text" maxLength="1" />
//                   <input type="text" maxLength="1" />
//                   <input type="text" maxLength="1" />
//                   <input type="text" maxLength="1" />
//                   <input type="text" maxLength="1" />
//                 </div>
//                 <p className="modal-para">
//                   Didn't get the OTP! <a href="#">Resend it</a>
//                 </p>
//                 <button id="verifyButton2" disabled="disabled">
//                   Submit
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import { useState } from 'react';
import './Mail.css';

export default function MailComponent() {
  const [isEmailValid, setEmailValid] = useState(false);

  const handleEmailInput = (event) => {
    const email = event.target.value;
    const isValid = isValidEmail(email);
    setEmailValid(isValid);
  };

  const isValidEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleNextButtonClick = () => {
    const currentSection = document.querySelector('.otp-card');
    currentSection.style.display = 'none';
    const exclamationIcon = document.querySelector('.modal-circle i.fa-circle-exclamation');
    exclamationIcon.style.display = 'none';

    const otpVerificationSection = document.getElementById('otpVerificationCard2');
    otpVerificationSection.style.display = 'block';
    const checkIcon = document.querySelector('.modal-circle i.fa-circle-check');
    checkIcon.style.display = 'block';
    const circleCheck2 = document.getElementById('circleCheck2');
    circleCheck2.style.display = 'block';

    const firstOTPInput = document.querySelector('#otpVerificationCard2 .otp-card-inputs input');
    firstOTPInput.focus();

    const otpInputs = document.querySelectorAll('#otpVerificationCard2 .otp-card-inputs input');
    for (let i = 0; i < otpInputs.length; i++) {
      const currentInput = otpInputs[i];
      currentInput.addEventListener('input', () => {
        handleInput(currentInput, otpInputs, i);
      });
      currentInput.addEventListener('keydown', (event) => {
        handleBackspace(event, currentInput, otpInputs, i);
      });
    }

    function handleInput(input, inputs, currentIndex) {
      const inputValue = input.value;
      const isValidDigit = /^\d$/.test(inputValue);

      if (isValidDigit) {
        if (inputValue !== '') {
          input.value = inputValue.slice(-1);
        }

        if (currentIndex < inputs.length - 1 && inputValue !== '') {
          inputs[currentIndex + 1].focus();
        }
      } else {
        input.value = '';
      }

      checkSubmitButtonState();
    }

    function handleBackspace(event, input, inputs, currentIndex) {
      if (event.key === 'Backspace' && input.value === '') {
        if (currentIndex > 0) {
          inputs[currentIndex - 1].focus();
        }
      }

      checkSubmitButtonState();
    }

    function checkSubmitButtonState() {
      const otpValues = Array.from(otpInputs).map((input) => input.value);
      const isAllDigitsEntered = otpValues.every((value) => value.length === 1);
      const submitButton = document.getElementById('verifyButton2');
      if (isAllDigitsEntered) {
        submitButton.removeAttribute('disabled');
      } else {
        submitButton.setAttribute('disabled', true);
      }
    }

    checkSubmitButtonState();
  };

  return (
    <div>
      <button
        type="button"
        className="btn btn-primary ml-5 mt-5"
        data-toggle="modal"
        data-target="#exampleModal2"
        data-backdrop="static"
      >
        Register Now
      </button>

      <div className="modal fade" id="exampleModal2" tabIndex="-1" aria-labelledby="exampleModalLabel2" aria-hidden="true">
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
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <h1 className="modal-heading">Enroll now to learn LIVE Online from India's best teachers</h1>
            </div>
            <div className="modal-circle">
              <div>
                <i className="fa-solid fa-circle-check modal-circle-clr"></i>
              </div>
              <span className="mb-4 modal-circle-clr">__________________</span>
              <div>
                <i className="fa-solid fa-circle-exclamation modal-circle-clr"></i>
                <i className="fa-solid fa-circle-check modal-circle-clr" style={{ display: 'none' }} id="circleCheck2"></i>
              </div>
            </div>
            <div className="modal-data">
              <p className="mr-3">Enter number</p>
              <p className="vsblty-hdn">------------</p>
              <p>Enter mail</p>
            </div>
            <div className="otp-card">
              <p className="modal-para">Enter your mail to continue your journey</p>
              <div className="input-bx">
                <input type="email" required="required" onChange={handleEmailInput} />
                <span>Mail</span>
              </div>
              <button id="nextButton2" disabled={!isEmailValid} className="mt-3" onClick={handleNextButtonClick}>
                Next
              </button>
            </div>

            <div id="otpVerificationCard2" style={{ display: 'none' }}>
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
                <button id="verifyButton2" disabled="disabled">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
