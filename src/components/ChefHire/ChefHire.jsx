import React from 'react';

const ChefHire = () => {
    return (
        <>
            <h2 className="text-4xl font-bold text-teal-500 text-center">Find Your Favorite Chef</h2>
            <div className="hero min-h-screen w-10/12 mx-auto -mt-16">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://img.freepik.com/free-photo/chef-with-thumb-up-white-background_1368-2842.jpg" className="max-w-sm rounded-lg shadow-2xl mb-5 md:mb-0" />
                    <div>
                        <h1 className="text-5xl font-bold text-teal-500">Your Culinary Vision, Our Expert Chefs</h1>
                        <p className="py-6 text-teal-800">Transform your events into extraordinary culinary experiences by hiring our skilled chefs. From intimate gatherings to grand celebrations, our chefs bring creativity, expertise, and a touch of gastronomic magic to your table. Discover a tailored culinary journey that reflects your tastes and preferences.</p>
                        <button className="btn bg-gradient-to-r from-teal-500 to-teal-800 text-white">Hire a Chef</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ChefHire;