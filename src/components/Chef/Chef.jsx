import Button from 'react-bootstrap/Button';
import React from "react";
import Card from "react-bootstrap/Card";

const Chef = ({ chef }) => {
  const {
    chef_picture,
    chef_name,
    years_of_experience,
    number_of_recipes,
    likes,
  } = chef;
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={chef_picture} />
      <Card.Body>
        <Card.Title>{chef_name}</Card.Title>
        <Card.Text>
          {years_of_experience} years experience
        </Card.Text>
        <Card.Text>
            
        </Card.Text>
        <Card.Text>

        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default Chef;
