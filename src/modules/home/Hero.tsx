import { FC } from "react";
import { Carousel } from "react-bootstrap";

import "./styles/hero.scss";

const Hero: FC = () => {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="online-shopping.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h1>Shop online here</h1>
          <p>Get here great articles for young professionals.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="shopping-girl.png"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>See the products below</h3>
          <p>
            You can find below excellent electronics, clothing, accessories for
            young professionals.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="man-shopping.png"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Get the products you need here</h3>
          <p>Find the necessary products here.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export { Hero };
