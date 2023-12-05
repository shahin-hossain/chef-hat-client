import React from 'react';

const Recipe = ({ recipe }) => {
    const { recipe_name, instructions, ingredients } = recipe;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl w-12/12 mb-10">
                <div className="card-body">
                    <h2 className="card-title text-teal-700">{recipe_name}</h2>
                    <h4 className='font-bold'>ingredients:</h4>
                    {ingredients.map(ingredient => <span>{ingredient},</span>)}
                    <p><span className='font-bold'>Instruction:</span> {instructions}</p>
                </div>
            </div>
        </div>
    );
};

export default Recipe;