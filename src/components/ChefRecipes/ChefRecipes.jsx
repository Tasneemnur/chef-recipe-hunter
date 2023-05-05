import React from "react";
import { Card, Container } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import { AiFillLike } from "react-icons/ai";
import Recipe from "../Recipe/Recipe";
import LazyLoad from "react-lazy-load";

const ChefRecipes = () => {
  const data = useLoaderData();
  console.log(data);
  const {
    chef_picture,
    chef_name,
    years_of_experience,
    number_of_recipes,
    likes,
    chef_bio,
    recipes,
  } = data;
  return (
    <Container>
      <div className="d-flex justify-content-center align-items-center my-5 gap-3">
        <div className="me-4">
          <h1 className="fw-bold my-0">{chef_name}</h1>
          <p className="fs-5 fw-semibold my-1">
            {years_of_experience} Years of{" "}
            <span className="text-danger"> Experience</span>
          </p>
          <p className="mt-3 mb-0 text-secondary">{chef_bio}</p>
          <div className="d-flex align-items-center justifly-content-between my-3">
            <div className="me-5 text-secondary fw-semibold"> Recipe: {number_of_recipes}</div>

            <div className="d-flex align-items-center">
              <AiFillLike className="me-2 text-primary fs-5"></AiFillLike>
              <div className="text-secondary fw-semibold"> {likes}</div>
            </div>
          </div>
        </div>
      <img src={chef_picture} alt="" className="rounded h-75 w-75"/>
      </div>

      <h2 className='text-center my-5 fw-bold pt-5'>Chef's Special <span className="text-danger">Recipes</span> </h2>
      <div className="row row-cols-md-3 row-cols-1 gap-3 justify-content-center">
        {
            recipes.map(recipe => <Recipe key={recipe.recipe_id} recipe={recipe}></Recipe>)
        }
      </div>
    </Container>
  );
};

export default ChefRecipes;
