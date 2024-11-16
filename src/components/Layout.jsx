import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styling/Layout.css'; // External CSS for styling
import profilePic from '../assets/profilepic.jpg'; // Assuming you use the provided image

const Layout = ({ children }) => {
    return (
        <div className="layout-container">
            <div className="sidebar">
                {/* Profile Picture */}
                <div className="profile-pic-container">
                    <img src={profilePic} alt="Profile" className="profile-pic" />
                </div>

                {/* Navigation Menu */}
                <ul className="menu">
                    <li className="menu-item">
                        <NavLink exact to="/" className="menu-link" activeClassName="active">Home</NavLink>
                    </li>
                    <li className="menu-item">
                        <NavLink to="/about" className="menu-link" activeClassName="active">About</NavLink>
                    </li>
                    <li className="menu-item">
                        <NavLink to="/resume" className="menu-link" activeClassName="active">Resume</NavLink>
                    </li>
                    <li className="menu-item">
                        <NavLink to="/portfolios" className="menu-link" activeClassName="active">Portfolios</NavLink>
                    </li>
                    <li className="menu-item">
                        <NavLink to="/blogs" className="menu-link" activeClassName="active">Blogs</NavLink>
                    </li>
                    <li className="menu-item">
                        <NavLink to="/contact" className="menu-link" activeClassName="active">Contact</NavLink>
                    </li>
                </ul>
            </div>

            {/* Main content area where child components will render */}
            <div className="main-content">
                {children}
            </div>
        </div>
    );
};

export default Layout;
