import React, { useState } from 'react';
import { FaBookmark } from "react-icons/fa6";
import toast, { Toaster } from 'react-hot-toast';
const Recipe = ({ recipe }) => {
    const { recipe_name, instructions, ingredients } = recipe;
    const [favorite, setFavorite] = useState(false);

    const handleFavorite = () => {
        setFavorite(true)
        toast.success('add to favorite successfully', {
            id: 'toastId',
        });
    }
    // console.log(favorite)

    return (
        <div>
            <div className="card bg-base-100 shadow-xl w-12/12 mb-10">
                <div className="card-body">
                    <div className='flex justify-between items-center'>
                        <h2 className="card-title text-teal-700 ">{recipe_name}</h2>
                        <button onClick={handleFavorite} disabled={favorite ? favorite : false} ><FaBookmark className={`${favorite && 'text-teal-500 '}`} />Favorite</button>
                    </div>
                    <h4 className='font-bold'>ingredients:</h4>
                    {ingredients.map((ingredient, idx) => <span key={idx}>{ingredient},</span>)}
                    <p><span className='font-bold'>Instruction:</span> {instructions}</p>
                </div>
                <Toaster />
            </div>
        </div >
    );
};

export default Recipe;