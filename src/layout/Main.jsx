import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../shared/Navbar/Navbar';
import Header from '../components/Header/Header';
import Footer from '../shared/Footer/Footer';

const Main = () => {
    return (
        <div>
            <div className='container mx-auto px-4'>
                <Navbar></Navbar>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;