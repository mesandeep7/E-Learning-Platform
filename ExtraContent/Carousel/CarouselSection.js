import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './CarouselSection.css';
import Img1 from '../images/wallpaperflare.com_wallpaper (4).jpg';
// import Img1 from '../images/1.jpg';
import Img2 from '../images/wallpaperflare.com_wallpaper (5).jpg';
import Img3 from '../images/wallpaperflare.com_wallpaper (6).jpg';

function ControlledCarousel() {
    const [index, setIndex] = useState(0);


    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };


    return (
        <div className=' ContainerSection'>

            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <a href="https://www.apple.com/" >
                        <img
                            src={Img1}
                            className="d-block w-100 "
                            alt="First slide"

                        />
                    </a>


                </Carousel.Item>
                <Carousel.Item>
                    <a href='https://www.dell.com/'>
                        <img
                            className="d-block w-100 "
                            src={Img2}
                            alt="Second slide"
                        />
                    </a>

                </Carousel.Item>
                <Carousel.Item>
                    <a href='https://www.lenovo.com/'>
                        <img
                            className="d-block w-100 "
                            src={Img3}
                            alt="Third slide"
                        />
                    </a>


                </Carousel.Item>
            </Carousel>
            {/* <CardsDemo/> */}

        </div>
    );
}

export default ControlledCarousel;