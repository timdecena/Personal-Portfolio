import React from 'react';
import './Resume.css';

const Resume = () => {
    return (
        <div className="resume-container">
            <header className="resume-header">
                <h1>Anthony C. Decena</h1>
                <h2>React Developer</h2>
            </header>

            <div className="resume-body">
                {/* Left Column */}
                <div className="resume-left">
                    <section className="contact-section">
                        <h3>Contact</h3>
                        <p>anthonycdecena@email.com</p>
                        <p>(+63) 919 361 9431</p>
                        <p>Cebu, Philippines</p>
                        <a href="https://www.linkedin.com/in/anthony-decena/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </section>

                    <section className="education-section">
                        <h3>Education</h3>
                        <p>B.S. Information Technology 3rd Year</p>
                        <p>Cebu Institute of Technology - University</p>
                        
                    </section>

                    <section className="skills-section">
                        <h3>Skills</h3>
                        <ul>
                            <li>React JavaScript</li>
                            <li>HTML/CSS</li>
                            <li>C# (ASP.net)</li>
                            <li>Java (Springboot)</li>
                            <li>SQL (SQL Server Manager)</li>
                            <li>REST APIs</li>
                            <li>Git</li>
                        </ul>
                    </section>
                </div>

                {/* Right Column */}
                <div className="resume-right">
                    <section className="career-objective-section">
                        <h3>Career Objective</h3>
                        <p>
                            Currently studying Information Technology with experience working across the full-stack
                            of software development. Looking for a role where I can grow and learn from
                            experienced team members while drawing on project experience I have already successfully executed.
                        </p>
                    </section>

                    

                    <section className="projects-section">
                        <h3>Projects</h3>

                        <div className="project-item">
                            <h4>Social Media Scheduler - Creator</h4>
                            <p>Built a responsive app using Django and Node to schedule social media posts across Instagram and Twitter.</p>
                            <ul>
                                <li>Features using scikit-learn in Python to learn the time of day of maximum engagement.</li>
                                <li>Released for University of Illinois students, quickly gaining over 500 monthly active users.</li>
                                <li>Featured across local newspapers and media outlets with a focus on the use of Twitter and Instagram APIs.</li>
                            </ul>
                        </div>

                        <div className="project-item">
                            <h4>Computer Science Club - Co-founder</h4>
                            <p>Presented a need for a CS club, obtained approval, and led the team to grow to 35 active members.</p>
                            <ul>
                                <li>Organized pair programming sessions for 2 hours weekly.</li>
                                <li>Partnered with journalism majors to promote the club through web and TV campaigns.</li>
                                
                            </ul>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Resume;
