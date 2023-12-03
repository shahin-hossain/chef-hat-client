import React from 'react';
import image from '../../../public/header.png'
const Header = () => {
    return (
        <div className='columns-2 '>
            <div>
                <h2 className='text-5xl text-teal-500 mt-24'>Taste the Art of Cooking <span className='text-teal-800 font-bold text-6xl mt-4 inline-block'>Our Marvelous Chef's Creations in the Arab World!</span></h2>
            </div>
            <div >
                <img src={image} alt="" />
            </div>
        </div>
    );
};

export default Header;