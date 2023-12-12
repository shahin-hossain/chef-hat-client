import React from 'react';
import { Link } from 'react-router-dom';
import { IoHeart } from "react-icons/io5";
const Chef = ({ chef }) => {
    const { id, name, description, photo, experience, likes } = chef;
    return (
        <div >
            <div className="card md:w-96 bg-base-100 shadow-xl mb-6" style={{ height: '500px' }}>
                <figure><img src={photo} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <div className='flex my-2'>
                        <p className='grow'>Experience: {experience}</p>
                        <p className='grow-0 '> <IoHeart className='inline text-xl text-teal-500' /> {likes}</p>
                    </div>
                    <div className="card-actions justify-end">
                        <Link to={`/chef/${id}`}><button className="btn bg-gradient-to-r from-teal-500 to-teal-900 text-teal-50">Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chef;