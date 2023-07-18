import PaytmIcon from './images/paytm-svgrepo-com.svg';
import amazonIcon from './images/amazon-pay.svg';
import creditcardIcon from './images/credit-card-solid.svg';
import upiIcon from './images/upi-icon.svg';
import './Footer2.css';
export default function FooterSection2() {
    return (
        <>
        <div className='DEmo'>

            <div className="container ContainerSec">
                <div className="SecondFooter">
                    <br></br>
                    <hr></hr>
                    <br></br>
                    <h2 className='H2Class' >About Us</h2>
                    <p className='AtagPli'>Tuition world is India's  ed-tech company and the creator of India's most loved school
                        learning app.Tuition world offers highly personalised and effective learning programs
                        for classes 1 - 12 (K-12), and aspirants of competitive exams like JEE, IAS etc. With 50 million
                        registered students and 3.5 million paid subscriptions, BYJU'S has become one of the most preferred
                        education platforms across the globe.</p>
                    <br></br>
                    <h2 className='H2Class'>What Makes Us Different?</h2>
                    <h2 className='H2Class'>Personalised Learning </h2>
                    <p className='AtagPli'>Our niche is creating personalised learning experiences for every type of learner. The tuition world way of
                        learning provides students a learning platform where they can learn, engage and be excited about
                        charting their own path to discover the world. Tuition world - The Learning App brings together the best
                        teachers, technology, content, media for creating a seamless, world class learning experience for
                        each and every student.</p>
                    <br></br>
                    <h2 className='H2Class'>Why Choose Us?</h2>
                    <p className='AtagPli'>Our niche is creating personalised learning experiences for every type of learner. The Tuition world way of
                        learning provides students a learning platform where they can learn, engage and be excited about
                        charting their own path to discover the world. Tuition world - The Learning App brings together the best
                        teachers, technology, content, media for creating a seamless, world class learning experience for
                        each and every student.</p>
                    <p className='AtagPli'>Learning is pivotal for a student's success in academics and life. The Digital Age is deeply shaping
                        the way students learn and will also determine their future prospects. At BYJU'S, we encourage
                        students to embrace this fast, changing world and making them ready for tomorrow by being their
                        constant learning partner.</p>
                    <br></br>
                    <p className='AtagPli'>We craft learning journeys for every student that address their unique needs. We believe in the power
                        of one-to-one learning that addresses every child's learning needs, allows students to be
                        holistically involved in their education and be active, lifelong learners.</p>
                    <br></br>
                    <h6  class="">Our Three Pillars</h6>
                    <h6  className='H2Class' >Personalised Learning Journeys</h6>
                    <p className='AtagPli'>Personalised Learning- is the foundation of our unique programs for students. Using knowledge graphs,
                        the program adapts and creates personalised learning journeys for students. It provides a
                        comprehensive coverage of over 1 lakh concepts with animated videos and questions, fun quizzes and
                        flashcards.</p>
                    <p className='AtagPli'>Based on the student's progress, personal learning profiles are created which help analyse strengths
                        and areas of improvement. Each concept gets tagged at different levels of difficulty to create a
                        smooth learning curve which keeps students motivated through any new learning challenge. Whenever
                        errors are made, motivating remedial methods are generated to strengthen and improve the student's
                        learning experience.</p>
                    <br></br>
                    <h2 className='H2Class' class="">Technology Enabled Learning</h2>
                    <p className='AtagPli'>At tuition world, we leverage technology to merge best practices like use of videos, engaging content and
                        quizzes with the best teachers so that every child across the globe has access to the best learning
                        experiences.</p>
                    <p className='AtagPli'>Key features of the learning program:</p>
                    <ul>
                        <li className='AtagPli'>Interactive and engaging learning modules</li>
                        <li className='AtagPli'>Visually rich content to enable conceptual clarity and lifelong term retention</li>
                        <li className='AtagPli'>Personalised learning programs designed for every student, enabled by the power of data science
                        </li>
                    </ul>
                    <br></br>
                    <h2 className='H2Class '>Best Teachers &amp; Engaging Content</h2>
                    <p className='AtagPli'>The tuition world Learning Programs provide students a holistic learning experience. Students across regions
                        can access the best teachers and see concepts come to life. Every detail of a student's journey is
                        planned and executed at the deepest level with subject matter experts, teachers and tools like
                        videos, interactive animations, quizzes and assessments.</p>
                    <p className='AtagPli'>The app integrates these well crafted lessons from our teachers and assessments along with analysis
                        and recommendations, personalised to suit each student's learning style. This holistic approach has
                        seen a student engagement of over 71 minutes a day, being spent by a student on the app,making it
                        one of the most loved apps for students across age groups.</p>
                    <p className='AtagPli'>We at tuiton world work towards offering students the best learning experience. We have courses for
                        students across ages and grades:</p>
                    <ul>
                        <li className='AtagPli'>Maths, Physics, Chemistry and Biology for CBSE and ISC (Classes 1-12)</li>
                        <li className='AtagPli'>Competitive Exams- JEE, NEET, IAS preparation courses</li>
                    </ul>
                    <h2 className='H2Class'> Payment</h2>
                    <p className='AtagPli'> Tuition world offers you multiple payment methods. Payment gateway partners use secure encryption technology to keep your transaction details confidential at all times. You may use Internet Banking, Wallet and QR Support to make your purchase.</p>
                </div>
                <div className='payment-icons'>
                <img src={PaytmIcon} style={{margin:"0 50px 0 0"}} alt="paytm icon" />
                <img src={amazonIcon} style={{margin:"0 50px 0 0"}} alt="amazon pay icon" height="100px" width="35px" />
                <img src={creditcardIcon} style={{margin:"0 50px 0 0"}} alt="credit card icon"  height="100px" width="30px"/>
                <img src={upiIcon} style={{margin:"0 50px 0 0"}} alt="upi icon" height="100px" width="50px"/>
                <hr></hr>
                </div>
                <div className='rights'>
                <a className='AtagPli' href="">Disclaimer |</a>
                &nbsp;<a className='AtagPli' href="">Privacy Policy |</a>
                &nbsp;<a className='AtagPli' href="">Terms of Services |</a>
                &nbsp;<a className='AtagPli' href="">Sitemap |</a>
                <br></br>
                <br></br>
                </div>
               </div>
               </div>

        </>
    )
}   