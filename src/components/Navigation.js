import React, {useContext} from 'react';
import UserContext from './UserContext';
import {NavLink} from 'react-router-dom';

const Navigation = () => {
    const {user} = useContext(UserContext)
    return(
        <div className="nav-bar">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/login">{user ? "Logout" : "Login"}</NavLink>
        </div>
    )
}

export default Navigation;