import Carousel from 'react-bootstrap/Carousel';
import React from 'react';

function DarkVariantExample() {
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100 redirect"
          src="https://trailrunningandaluciablog.files.wordpress.com/2019/01/copa-1.jpg?w=719"
          alt="First slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.trailrunner-store.es/wp-content/uploads/2017/07/Test-de-Altra-Running-e1499105324876.jpg"
          alt="Second slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.ciclo21.com/wp-content/uploads/2017/07/Captura-de-pantalla-2017-07-01-a-las-01.47.06.png"
          alt="Third slide"
        />
       
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;