import React, { useContext, useRef } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  const {user, login, googleLogin, gitHubLogin } = useContext(AuthContext);
  const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

  const handleEmailPassLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    login(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser)
        form.reset();
        navigate(from, {replace:true})
      })
      .catch((error) => {
        console.error(error.message);
        if(error.message === "Firebase: Error (auth/wrong-password)."){
         return alert("Wrong Password")
        }
        if(error.message === "Firebase: Error (auth/user-not-found)."){
          return alert("Wrong Email")
        }
      });
  };

  const handleGoogleSignIn = () =>{
    googleLogin()
    .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, {replace:true})
      })
      .catch((error) => {
        console.error(error);
      });
  }
  const handleGitHubSignIn = () =>{
    gitHubLogin()
    .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, {replace:true})
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <Container>
      <h2 className="text-center my-3 fw-bold">Please Login</h2>
      <Form
        onSubmit={handleEmailPassLogin}
        className="w-50 mx-auto border rounded p-5 "
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
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
        <Button
          variant="danger"
          type="submit"
          className="w-100 mb-2 fw-semibold"
        >
          Login
        </Button>
        <Form.Text className="text-secondary">
          Don't Have an Account?
          <Link to="/register" className="ms-2">
            Register
          </Link>
        </Form.Text>
        <Form.Text className="text-danger">
            
        </Form.Text>
      </Form>
      <div className="w-50 mx-auto mt-3 mb-2">
        <Button onClick={handleGoogleSignIn} className="w-100 bg-secondary fw-semibold border-0">
          <FaGoogle></FaGoogle> Sign-in With Google
        </Button>
      </div>
      <div className="w-50 mx-auto">
        <Button onClick={handleGitHubSignIn} className="w-100 bg-secondary fw-semibold border-0">
          <FaGithub></FaGithub> Sign-in With GitHub
        </Button>
      </div>
    </Container>
  );
};

export default Login;
