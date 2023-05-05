import React from 'react';
import Header from '../Shared/Header/Header';
import { Outlet, useNavigation } from "react-router-dom";
import Footer from '../Shared/Footer/Footer';
import { Spinner } from 'react-bootstrap';

const Main = () => {
    const navigation = useNavigation()
    return (
        <div>
            <Header></Header>
            <div className='d-flex justify-content-center'>{navigation.state === 'loading' && <Spinner animation="border" variant="danger"></Spinner>}</div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;