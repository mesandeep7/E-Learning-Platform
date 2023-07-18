import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './CardsDemo.css'
import ClockImg from './images/clock-svgrepo-com.svg';
import ArrowRight from './images/arrow-right-346-svgrepo-com.svg';

export default function CardsDemo() {
    const [index, setIndex] = useState(0);


    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };


    return (
        <>
            <div className='container CardCarouselContainer '>
                <div className='CardCarouselh4Container'>
                <h4 className='CardCarouselh4'>popular courses</h4>

                </div>
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>

                        <div className="card-wrapper d-flex justify-content-center">

                            <div className="col-lg-2  rounded  m-4 p-2 CardFirstBg ">
                                <img src={ClockImg} alt="" />
                                <div className="d-flex flex-row flex-wrap pt-2 justify-content-between align-items-start">
                                    <h5>NDA <br/> Course</h5>

                                    <img src={ArrowRight} alt="" />
                                </div>
                            </div>

                            <div className="col-lg-2  rounded m-4 p-2 CardSecondBg">
                                <img src={ClockImg} alt="" />
                                <div className="d-flex flex-row flex-wrap pt-2 justify-content-between align-items-start">
                                    <h5>NDA <br/> Course</h5>
                                    <img src={ArrowRight} alt="" />
                                </div>
                            </div>

                            <div className="col-lg-2  rounded m-4 p-2 CardThirdBg">
                                <img src={ClockImg} alt="" />
                                <div className="d-flex flex-row flex-wrap pt-2 justify-content-between align-items-start">
                                    <h5>NDA <br/> Course</h5>
                                    <img src={ArrowRight} alt="" />
                                </div>
                            </div>

                            <div className="col-lg-2  rounded m-4 p-2 CardFourthBg">
                                <img src={ClockImg} alt="" />
                                <div className="d-flex flex-row flex-wrap pt-2 justify-content-between align-items-start">
                                    <h5>NDA <br/> Course</h5>
                                    <img src={ArrowRight} alt="" />
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>

                    <Carousel.Item>
                        <div className="card-wrapper d-flex justify-content-center">

                            <div className="col-lg-2  rounded m-4 p-2 CardFirstBg">
                                <img src={ClockImg} alt="" />
                                <div className="d-flex flex-row flex-wrap pt-2 justify-content-between align-items-start">
                                    <h5>NDA <br/> Course</h5>
                                    <img src={ArrowRight} alt="" />
                                </div>
                            </div>

                            <div className="col-lg-2  rounded m-4 p-2 CardSecondBg">
                                <img src={ClockImg} alt="" />
                                <div className="d-flex flex-row flex-wrap pt-2 justify-content-between align-items-start">
                                    <h5>NDA <br/> Course</h5>
                                    <img src={ArrowRight} alt="" />
                                </div>
                            </div>

                            <div className="col-lg-2 rounded m-4 p-2 CardThirdBg">
                                <img src={ClockImg} alt="" />
                                <div className="d-flex flex-row flex-wrap pt-2 justify-content-between align-items-start">
                                    <h5>NDA <br/> Course</h5>
                                    <img src={ArrowRight} alt="" />
                                </div>
                            </div>

                            <div className="col-lg-2  rounded m-4 p-2 CardFourthBg">
                                <img src={ClockImg} alt="" />
                                <div className="d-flex flex-row flex-wrap pt-2 justify-content-between align-items-start">
                                    <h5>NDA <br/> Course</h5>
                                    <img src={ArrowRight} alt="" />
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
        </>
    );
}
