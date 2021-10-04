import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css'

const Header = () => {
    return (
        <div className="header w-100">
            <nav className="pt-1 bg-info ">
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/services">Services</NavLink>
                <NavLink to="/contact" className=" bg-danger">Get In Touch</NavLink>

            </nav>

            <h2 className=" text-white mt-4">Fitness Helps Me Think Better, Feel Better and move better!
            </h2>

        </div>
    );
};

export default Header;