import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Chef from '../Chef/Chef';
import ChefHire from '../ChefHire/ChefHire';
import LocationMap from '../LocationMap/LocationMap';
import OurRecipe from '../OurRecipe/OurRecipe';
import LazyLoad from 'react-lazy-load';

const Home = () => {

    const [chefs, setChefs] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/chefs')
            .then(res => res.json())
            .then(data => setChefs(data))
    }, [])

    return (
        <div>
            <Header></Header>
            <LazyLoad>
                {/* chef component start */}
                <div className='my-16 '>
                    <h2 className='text-teal-500 font-bold text-4xl text-center'>Middle East's Popular Chef</h2>
                    <div className='grid grid-cols-1 justify-items-center md:grid-cols-3 gap-4 mt-10'>
                        {
                            chefs.map(chef => <Chef
                                key={chef.id}
                                chef={chef}
                            ></Chef>)
                        }
                    </div>
                </div>
            </LazyLoad>

            <LazyLoad>
                {/* chef hire */}

                <ChefHire></ChefHire>
            </LazyLoad>



            <LazyLoad>
                <OurRecipe />
            </LazyLoad>

            <LazyLoad>
                <div>
                    <h2 className='text-4xl font-bold text-teal-500 text-center mb-16'>Find Our Location</h2>
                    <LocationMap />
                </div>
            </LazyLoad>

        </div>
    );
};

export default Home;