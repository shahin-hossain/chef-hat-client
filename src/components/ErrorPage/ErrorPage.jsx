import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";

const ErrorPage = () => {
    return (
        <div className='flex flex-col-reverse md:flex-row items-center justify-between mx-36 mb-10 '>
            <div>
                <h2 className='text-4xl font-bold mb-10 text-teal-500'>Oops!!! Page is Not Found </h2>
                <Link className='btn bg-gradient-to-r from-teal-500 to-teal-800 text-white' to='/'><FaArrowLeft /> Go Back Home</Link>
            </div>
            <img src="https://st4.depositphotos.com/35300560/38956/v/450/depositphotos_389560970-stock-illustration-404-error-page-found-banner.jpg" className='mb-3' style={{ width: '500px' }} alt="" />
        </div>
    );
};

export default ErrorPage;