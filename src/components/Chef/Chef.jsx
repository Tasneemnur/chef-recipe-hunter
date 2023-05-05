import Button from "react-bootstrap/Button";
import React from "react";
import Card from "react-bootstrap/Card";
import { AiFillLike } from "react-icons/ai";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazy-load";

const Chef = ({ chef }) => {
  const {
    id,
    chef_picture,
    chef_name,
    years_of_experience,
    number_of_recipes,
    likes,
  } = chef;
  return (
    <Card style={{ width: "22rem" }}>
      <LazyLoad height={225} width={326} threshold={0.95} onContentVisible={() => {console.log('loaded!')}}>
      <Card.Img variant="top" src={chef_picture} className="mt-3 rounded" />
      </LazyLoad>
      <Card.Body>
        <Card.Title className="my-1">{chef_name}</Card.Title>
        <Card.Text className="fs-6 mb-3 text-secondary">
          {years_of_experience} years experience
        </Card.Text>
        <Card.Text>
          <div className="my-1 text-secondary">
            Recipes : {number_of_recipes}
          </div>
          <div className="d-flex align-items-center">
            <AiFillLike className="me-2 text-primary fs-5"></AiFillLike>
            <div className="text-secondary"> {likes}</div>
          </div>
        </Card.Text>

        <Link to={`/recipes/${id}`}>
          <Button variant="danger" className="fw-semibold">
            View Recipes
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Chef;
