import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../shared/Navbar/Navbar';
import Header from '../components/Header/Header';

const Main = () => {
    return (
        <div className='container mx-auto px-4'>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;