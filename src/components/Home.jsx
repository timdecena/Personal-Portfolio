import React from 'react';
import '../styling/Home.css'; // Your CSS file for styles
import facebookIcon from '../assets/facebook.svg'; // Replace with your actual image name
import githubIcon from '../assets/github.svg';     // Replace with your actual image name
import linkedIcon from '../assets/linkedin.svg';
import dp from '../assets/dp.jpg'

const Home = () => {
    return (
        <div className="home-container">
    {/* Display Picture Section */}
    <div className="dp-container">
        <img src={dp} alt="Anthony Decena" className="dp-square" />
    </div>


            <div className="main-content">
                <h1 className="greeting">
                    Hi, I am <span className="highlighted-text">Anthony Decena</span>
                </h1>
                <p className="description">
                    I'm a 21-year-old Information Technology student in my 3rd year at Cebu Institute of Technology University,
                    living in Cebu City. I am deeply passionate about frontend web development, particularly with React. 
                    While I also have experience in ASP.NET for backend development, my primary focus is on honing and showcasing 
                    my expertise in React to create engaging and dynamic user interfaces.

                    
                </p>
                <div className="social-links">
                    {/* Social media icons */}
                    <a href="https://www.facebook.com/anthony.decena.39" target="_blank" rel="noopener noreferrer">
                        <img src={facebookIcon} alt="Facebook" className="social-icon" />
                    </a>
                    <a href="https://github.com/timdecena" target="_blank" rel="noopener noreferrer">
                        <img src={githubIcon} alt="GitHub" className="social-icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/anthony-decena/" target="_blank" rel="noopener noreferrer">
                        <img src={linkedIcon} alt="LinkedIn" className="social-icon" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Home;
