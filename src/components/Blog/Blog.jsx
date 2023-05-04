import React from 'react';
import { Container } from 'react-bootstrap';

const Blog = () => {
    return (
        <Container>
        <div className='d-flex justify-content-center align-items-center my-5 pt-4'>
        <div className='w-75'>
            <h5 className='fw-bold'>i. Tell us the differences between uncontrolled and controlled components.</h5>
            <p className='text-muted my-3'>In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.</p>
            <h5 className='fw-bold'>ii. How to validate React props using PropTypes</h5>
            <p className='text-muted my-3'>PropTypes is React’s internal mechanism for adding type checking to component props. React components use a special property called propTypes to set up type checking.When props are passed to a React component, they are checked against the type definitions configured in the propTypes property. When an invalid value is passed for a prop, a warning is displayed on the JavaScript console</p>
            <h5 className='fw-bold'>iii. Tell us the difference between nodejs and express js.</h5>
            <p className='text-muted my-3'>NodeJS is the package, which provides the JavaScript run-time environment, whereas Express is a framework that sits on top of NodeJS and helps us to handle requests and responses.</p>
            <h5 className='fw-bold'>iv. What is a custom hook, and why will you create a custom hook??</h5>
            <p className='text-muted my-3'>A custom Hook is a JavaScript function whose name starts with ”use” and that may call other Hooks.Custom Hooks are a mechanism to reuse stateful logic. Custom React hooks are an essential tool that let us add special, unique functionality to our React applications.</p>
        </div>
        </div>
        </Container>
    );
};

export default Blog;