import React from "react";
import LR1 from "../../assets/lr1.jpeg";
import LR2 from "../../assets/lr2.jpeg";
import LR3 from "../../assets/lr3.jpeg";
import LR4 from "../../assets/lr4.jpeg";
import StarsRating from "react-star-rate";
import "./LatestRecipes.css"

const LatestRecipes = () => {
  return (
    <div className="py-5">
      <h2 className="text-center fw-bold">
        Latest <span className="text-danger">Recipes</span>
      </h2>
      <div className="row row-cols-1 row-cols-md-2 my-4 g-3">
        <div className="col">
          <div className="border rounded p-2 d-md-flex justify-content-center align-items-center gap-4">
            <img
              src={LR1}
              alt=""
              className="rounded"
              srcset=""
            />
            <div>
              <h5 className="mt-1">Chocolate Earl Grey Pots de Creme</h5>
              <p className="text-secondary">
                This Earl grey chocolate pots de creme is silky with an intense
                chocolate flavor and a subtle note of Earl Grey tea.
              </p>
                <StarsRating value={4.5} />
            </div>
          </div>
        </div>
        <div className="col">
          <div className="border rounded p-2 d-md-flex justify-content-center align-items-center gap-4">
            <img
              src={LR2}
              alt=""
              className="rounded"
              srcset=""
            />
            <div>
              <h5 className="mt-1 ">Pimento Cheese Potato Skins</h5>
              <p className="text-secondary">
              Stuffed potato skins get a Southern makeover when they are stuffed with creamy pimento cheese laced with smoky chilies.
              </p>
                <StarsRating value={4} />
            </div>
          </div>
        </div>
        <div className="col">
          <div className="border rounded p-2 d-md-flex justify-content-center align-items-center gap-4">
            <img
              src={LR3}
              alt=""
              className="rounded"
              srcset=""
            />
            <div>
              <h5 className="mt-1">Pesto Pizza With Roasted Garlic</h5>
              <p className="text-secondary">
              Roasted Garlic Pesto is the star of today's pizza, with mozzarella cheese; topped with toasted breadcrumbs and chili crunch.
              </p>
                <StarsRating value={5} />
            </div>
          </div>
        </div>
        <div className="col">
          <div className="border rounded p-2 d-md-flex justify-content-center align-items-center gap-4">
            <img
              src={LR4}
              alt=""
              className="rounded"
              srcset=""
            />
            <div>
              <h5 className="mt-1">Jalapeno Poppers</h5>
              <p className="text-secondary">
              These are Jalapeno Poppers that have been hollowed out, stuffed with a mixture of cheese, spices, and sometimes ground meat, and breaded and deep fried.
              </p>
                <StarsRating value={4.5} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestRecipes;
