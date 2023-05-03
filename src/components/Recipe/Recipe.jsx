import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import StarsRating from "react-star-rate";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Recipe = ({ recipe }) => {
  const { recipe_name, ingredients, cooking_method, rating } = recipe;
  const [click, setClick] = useState(false);

  const notify = (event) => {
    const toastMessage = toast("The Recipe is my favorite", {
      position: toast.POSITION.TOP_CENTER,
    });
    if (toastMessage) {
      return setClick(true);
    }
  };
  return (
    <Card style={{ width: "22rem" }}>
      <Card.Body>
        <Card.Title className="fs-4 fw-bold my-4 text-center">
          {recipe_name}
        </Card.Title>

        <Card.Text className="mt-5 text-secondary">
          <h6 className="fw-bold">
            <span className="text-danger">Cooking </span>method:
          </h6>
          {cooking_method}
        </Card.Text>
        <Card.Subtitle className="mb-2 text-muted my-4">
          <h6 className="fw-bold text-danger">Ingredients:</h6>
          {ingredients.map((ingredient) => (
            <li>{ingredient}</li>
          ))}
        </Card.Subtitle>

        <div className="my-2">
          <StarsRating value={rating}/>
        </div>
        <Button
          onClick={notify}
          disabled={click}
          className="bg-danger border-0"
        >
          Favorite
        </Button>
        <ToastContainer />
      </Card.Body>
    </Card>
  );
};

export default Recipe;
