import React, { useEffect, useState } from 'react';
import ReactCardSlider from 'react-card-slider-component';

const OurRecipe = ({ }) => {
    const [slides, setSlides] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/recipe')
            .then(res => res.json())
            .then(data => handleSlider(data))
    }, [])

    const handleSlider = (recipes) => {
        const sliders = recipes;
        const slides = [];

        for (let slide = 0; slide < sliders.length; slide++) {
            let slideObj = sliders[slide];
            slideObj.description = '';
            slides.push(slideObj);
            // console.log(slideObj)
        }
        setSlides(slides)

    }

    return (

        <div className='mt-24 md:mt-0 mb-24'>
            <h2 className='text-4xl font-bold text-teal-500 text-center mb-16'>Our Provide Recipe Service</h2>

            <div className=''>
                <ReactCardSlider slides={slides} />
            </div>

        </div>

    );
};

export default OurRecipe;