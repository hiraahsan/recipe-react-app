import React from 'react';
import {NavLink} from 'react-router-dom';

const Navigation = () => {
    return(
        <div className="nav-bar">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/login">Login</NavLink>
        </div>
    )
}

export default Navigation;