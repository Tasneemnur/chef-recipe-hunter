import { updateProfile } from "firebase/auth";
import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const registration = () => {
  const { createUser, updateUserData } = useContext(AuthContext);
  const [error, setError] = useState("");

  const handleCreateUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    const photo = form.photo.value;

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
    }

    createUser(email, password)
      .then((result) => {
        const registerUser = result.user;
        console.log(registerUser);
        form.reset();
        updateUserData(registerUser, name, photo);
      })
      .catch((error) => {
        console.error(error);
      });

    const updateUserData = (user, name, photo) => {
      updateProfile(user, {
        displayName: name,
        photoURL: photo,
      })
        .then(() => {
          console.log("user name and URL updated");
        })
        .catch((error) => {
          setError(error.message);
        });
    };
  };

  return (
    <Container>
      <h2 className="text-center my-3 fw-bold">Please Register</h2>
      <Form
        onSubmit={handleCreateUser}
        className="w-50 mx-auto border rounded p-5 "
      >
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Your Name"
            name="name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Your Email"
            name="email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPhotoURL">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control type="text" placeholder="Photo URL" name="photo" />
        </Form.Group>
        <Button
          variant="danger"
          type="submit"
          className="w-100 mb-2 fw-semibold"
        >
          Register
        </Button>
        <Form.Text className="text-secondary">
          Already Have an Account?
          <Link to="/login" className="ms-2">
            Login
          </Link>
        </Form.Text>
        <Form.Text className="text-danger d-block my-3">{error}</Form.Text>
      </Form>
    </Container>
  );
};

export default registration;
