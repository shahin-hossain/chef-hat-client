import React from 'react';

const LocationMap = () => {
    return (
        <div className='border-2 border-teal-800 mb-10'>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d228.1463340075869!2d90.38157684786466!3d23.80645804182934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7291d7fd98b%3A0x9a9a4e0dca96b8eb!2sDESCO%20Rakeen%20City%2033%2F11kV%20Substation!5e0!3m2!1sen!2sbd!4v1702299552126!5m2!1sen!2sbd"
                width={"100%"}
                height={"450"}
                loading={"lazy"}
            >
            </iframe>
        </div>
    );
};

export default LocationMap;