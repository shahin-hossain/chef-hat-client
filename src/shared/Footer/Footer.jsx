import React from 'react';
import { LuChefHat } from 'react-icons/lu';

const Footer = () => {
    return (
        <footer className='bg-gradient-to-r from-teal-600 to-teal-800 text-center md:text-start'>
            <div className=' py-7 grid grid-cols-1 md:grid-cols-4 gap-4 px-8 me-5 md:me-0 '>
                <div className='mb-5 md:mb-0'>
                    <h2 className='text-teal-50 font-bold text-4xl mb-3'> Chef <span className='text-teal-950'>Hat</span><span><LuChefHat className='inline mt-0 mb-5 text-5xl' /></span></h2>
                    <p className='text-teal-50'>Taste the Art of Cooking: Our Marvelous Chef's Creations in the Arab Culinary World!</p>
                </div>
                <div className=' text-teal-50 md:ms-10'>
                    <h3 className='font-bold text-2xl mb-3'>Quick Link</h3>
                    <h4 className='mb-2'>My Account</h4>
                    <h4 className='mb-2'>About Us</h4>
                    <h4 className='mb-2'>Contact Us</h4>
                </div>
                <div className='text-teal-50'>
                    <h3 className='font-bold text-2xl mb-3'>Terms & Privacy</h3>
                    <h4 className='mb-2'>Trust & Safety</h4>
                    <h4 className='mb-2'>Terms of Service</h4>
                    <h4 className='mb-2'>Privacy Policy</h4>
                </div>
                <div className='text-teal-50'>
                    <h3 className='font-bold text-2xl mb-8 mt-5'>Subscribe our Newsletter</h3>
                    <input type="email" className='py-1  outline-none px-2 outline-teal-950 rounded-md rounded-e-none text-slate-900' placeholder='your email' />
                    <button className='bg-teal-950 text-white py-2 px-3 rounded-lg rounded-s-none inline'>Subscribe</button>
                </div>
            </div>
            <p className='text-teal-50 text-center tracking-wider py-3'><small>&copy; Copyright Chef Hat 2023 by Shahin Hossain</small></p>
        </footer>
    );
};

export default Footer;