// About.js
import React from 'react';
import '../styling/About.css';
import backgroundPic from '../assets/backgroundpic.jpg'; // Placeholder image
import displayImage from '../assets/displayimage.jpg'; // Ensure the correct path

const About = () => {
    return (
        <div className="about-container" style={{ backgroundImage: `url(${backgroundPic})` }}>
            <div className="about-left">
                <img src={displayImage} alt="Display" className="display-image" /> {/* Add a class here */}
            </div>

            {/* Info Section */}
            <div className="about-right">
                <h1>About Me</h1>
                <h2>I am <span className="highlight">Anthony Decena</span></h2>
                <p>
                    I am a frontend web developer. I can provide clean code and pixel-perfect designs.
                    I also make websites more interactive with web animations.
                </p>

                {/* Personal Details */}
                <ul className="details-list">
                    <li><strong>Full Name:</strong> Anthony C. Decena</li>
                    <li><strong>Age:</strong> 21 Years Old</li>
                    <li><strong>Nationality:</strong> Filipino</li>
                    <li><strong>Languages:</strong> English, Cebuano, Tagalog</li>
                    <li><strong>Address:</strong> Verano II, Cebu City, Philippines</li>
                    <li><strong>Freelance:</strong> Available</li>
                    
                </ul>

                <h2>Skills & Expertise</h2>
                <ul className="skills-list">
                    <li><strong>HTML, CSS, JavaScript</strong></li>
                    <li><strong>React, ASP .NET, Spring Boot,</strong></li>
                    <li><strong>Java, UI/UX Design</strong></li>
                </ul>

                {/* Download CV Button */}
                <button className="download-cv">Download CV</button>
            </div>
        </div>
    );
};

export default About;
