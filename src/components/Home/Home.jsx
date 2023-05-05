import React from "react";
import { Carousel, Container } from "react-bootstrap";
import banner1 from "../../assets/banner1.jpg";
import banner2 from "../../assets/banner2.jpg";
import banner3 from "../../assets/banner3.jpg";
import ChefSection from "../ChefSection/ChefSection";
import FoodCategory from "../FoodCategory/FoodCategory";
import LatestRecipes from "../LatestRecipes/LatestRecipes";

const Home = () => {
  return (
    <Container className="py-3">
      <Carousel>
        <Carousel.Item className="bg-dark rounded">
          <img
            style={{ height: "600px" }}
            className="d-block w-100 rounded opacity-50"
            src={banner1}
            alt="First slide"
          />
          <Carousel.Caption className="card-img-overlay d-flex flex-column justify-content-center align-items-center">
            <h1 className="fw-bolder">Chicken Cheese Burger</h1>
            <p>A handful of simple ingredients typify the fresh, vibrant flavors of Greek cooking.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="bg-dark rounded">
          <img
            style={{ height: "600px" }}
            className="d-block w-100 rounded opacity-50"
            src={banner2}
            alt="Second slide"
          />

          <Carousel.Caption className="card-img-overlay d-flex flex-column justify-content-center align-items-center">
            <h1 className="fw-bolder">Seafood Pizza</h1>
            <p>A handful of simple ingredients typify the fresh, vibrant flavors of Greek cooking.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="bg-dark rounded">
          <img
            style={{ height: "600px" }}
            className="d-block w-100 rounded opacity-50"
            src={banner3}
            alt="Third slide"
          />

          <Carousel.Caption className="card-img-overlay d-flex flex-column justify-content-center align-items-center">
            <h1 className="fw-bolder">Chicken Masala</h1>
            <p>
            A handful of simple ingredients typify the fresh, vibrant flavors of Greek cooking.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <FoodCategory></FoodCategory>
      <LatestRecipes></LatestRecipes>
      <ChefSection></ChefSection>
      
    </Container>
  );
};

export default Home;
