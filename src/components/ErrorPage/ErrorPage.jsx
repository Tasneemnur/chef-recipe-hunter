import React from "react";
import { Button } from "react-bootstrap";
import { Link, useRouteError } from "react-router-dom";
import errorImg from "../../assets/error.jpg"

const ErrorPage = () => {
  const { error, status } = useRouteError();
  return (
    <>
    <div className=" d-flex justify-content-center my-5 align-items-center">

        <img src={errorImg} style={{height:"600px",width:"600px"}}alt="" srcset="" className="rounded-circle me-5" />
        <div>
            
            <h1 className="fw-bolder fs-1">Error<span className="text-danger"> {status || 404} </span></h1>
            <p className="my-4 fw-semibold text-muted">{error?.message}</p>
            <Link to="/" className="text-decoration-none"><Button className="bg-danger border-0 fw-bold ">Back to Homepage</Button></Link>
        </div>
    </div>
    </>
  );
};

export default ErrorPage;
