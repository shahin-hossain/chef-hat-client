import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Chef from '../Chef/Chef';

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
            {/* chef component start */}
            <div className='my-16 '>
                <h2 className='text-teal-800 font-bold text-4xl text-center'>Middle East's Popular Chef</h2>
                <div className='grid grid-cols-1 justify-items-center md:grid-cols-3 gap-4 mt-10'>
                    {
                        chefs.map(chef => <Chef
                            key={chef.id}
                            chef={chef}
                        ></Chef>)
                    }
                </div>

            </div>
        </div>
    );
};

export default Home;