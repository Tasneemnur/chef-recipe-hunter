import React from "react";
import { Container } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import { AiFillLike } from "react-icons/ai";

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
      <div className="d-flex justify-content-center align-items-center my-5">
        <div className="me-4">
          <h1 className="fw-bold my-0">{chef_name}</h1>
          <p className="fs-5 fw-semibold my-1">
            {years_of_experience} Years of{" "}
            <span className="text-danger"> Experience</span>
          </p>
          <p className="mt-3 mb-0 text-secondary">{chef_bio}</p>
          <div className="d-flex align-items-center justifly-content-between my-2">
            <div className="me-5 text-secondary fw-semibold"> Recipe: {number_of_recipes}</div>

            <div className="d-flex align-items-center">
              <AiFillLike className="me-2 text-primary fs-5"></AiFillLike>
              <div className="text-secondary fw-semibold"> {likes}</div>
            </div>
          </div>
        </div>
        <img src={chef_picture} alt="" className="rounded"/>
      </div>
    </Container>
  );
};

export default ChefRecipes;
