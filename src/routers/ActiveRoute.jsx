import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveRoute = ({ children, to }) => {
    return (
        <NavLink to={to} className={({ isActive }) => isActive ? 'text-teal-500 font-bold text-lg me-3' : 'font-bold text-lg text-teal-800 me-3'}>
            {children}
        </NavLink>
    );
};

export default ActiveRoute;