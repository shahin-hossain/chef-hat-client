import React from 'react';
import Navbar from '../../shared/Navbar/Navbar';
import { useLoaderData } from 'react-router-dom';
import { GoHeartFill } from "react-icons/go";
import Recipe from '../Recipe/Recipe';

const ChefDetails = () => {
    const chef = useLoaderData();
    const { photo, name, description, experience, likes, recipes } = chef;
    console.log(chef)

    return (
        <div >
            <div className='relative'>
                <img src="https://mybayutcdn.bayut.com/mybayut/wp-content/uploads/Top-5-Michelin-Star-Chef-Restaurants-In-Dubai-Cover-17-10.jpg" alt="" />
                <h2 className='text-teal-50 font-bold text-5xl text-center my-5 absolute top-1/2 start-40'>Details the Popular Chef's {name}</h2>
            </div>
            <div className='grid gird-cols-1 md:grid-cols-2 mt-20'>
                {/* chef card */}
                <div>
                    <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto  ">
                        <figure><img src={photo} alt="chef photo" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{name}</h2>
                            <p>{description}</p>
                            <div className='flex my-2'>
                                <p className='grow'>Experience: {experience}</p>
                                <p className='grow-0 '> <GoHeartFill className='inline text-xl text-teal-500' /> {likes}</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* recipe */}
                <div>
                    <h2 className='text-3xl text-teal-700 font-bold'>{name}'s Popular Recipes</h2>
                    {
                        recipes.map(recipe => <Recipe
                            recipe={recipe}
                        ></Recipe>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ChefDetails;