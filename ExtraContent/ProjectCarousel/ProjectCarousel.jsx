
import Carousel from 'react-bootstrap/Carousel';
import img1 from './img1 (1).jpg';
import img2 from './img1 (2).jpg';
import img3 from './img1 (3).jpg';

function UncontrolledExample() {
  return (
    <div style={{ height: '100vh', overflow: 'hidden' }}>
      <Carousel style={{ height: '100%' }}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img1}
            alt="First slide"
            style={{ objectFit: 'cover', height: '100%' }}
          />
          {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img2}
            alt="Second slide"
            style={{ objectFit: 'cover', height: '100%' }}
          />

          {/* <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          {/* </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img3}
            alt="Third slide"
            style={{ objectFit: 'cover', height: '100%' }}
          />

          {/* <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default UncontrolledExample;


