import React, { useEffect, useState } from 'react';

const Chef = ({ chef }) => {

    const { id, name, description, photo } = chef;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl mb-6" style={{ height: '500px' }}>
                <figure><img src={photo} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn bg-gradient-to-r from-teal-500 to-teal-900 text-teal-50">Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chef;