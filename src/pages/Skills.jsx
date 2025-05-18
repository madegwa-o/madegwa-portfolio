import React from 'react';
import { FaCode, FaServer, FaCloud, FaToolbox, FaStar, FaSmile } from 'react-icons/fa';
import styles from './Skills.module.css';

const Skills = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>Skills</h1>

            <div className={styles.cardsContainer}>
                {/* Languages Section */}
                <div className={styles.card}>
                    <h2><FaCode /> Languages</h2>
                    <p>Java, C, C++, JavaScript (ES6), HTML5, CSS3, Python, SQL, Shell Scripting, GraphQL, Markdown, YAML</p>
                </div>

                {/* Frameworks and Libraries Section */}
                <div className={styles.card}>
                    <h2><FaToolbox /> Frameworks and Libraries</h2>
                    <ul>
                        <li><span className={styles.strong}>Backend Frameworks:</span> Spring Boot, Apache Kafka</li>
                        <li><span className={styles.strong}>Frontend Frameworks:</span> React.js, TailwindCSS</li>
                        <li><span className={styles.strong}>Microservices:</span> Guava, Dockerized Spring Boot Applications</li>
                    </ul>
                </div>

                {/* Cloud and Hosting Section */}
                <div className={styles.card}>
                    <h2><FaCloud /> Cloud and Hosting</h2>
                    <ul>
                        <li><span className={styles.strong}>Cloud Providers:</span> Firebase, Railway, Render.com</li>
                        <li><span className={styles.strong}>Web Servers:</span> Apache Tomcat, Nginx</li>
                        <li><span className={styles.strong}>Databases:</span> MongoDB, MySQL, PostgreSQL</li>
                    </ul>
                </div>

                {/* Tools and Technologies Section */}
                <div className={styles.card}>
                    <h2><FaToolbox /> Tools and Technologies</h2>
                    <ul>
                        <li>Git and GitHub (including GitHub Actions)</li>
                        <li>WebSockets for real-time communication (One-to-One Chat App)</li>
                        <li>MPesa STK Push integration</li>
                        <li>REST APIs (development and integration)</li>
                        <li>JWT (JSON Web Tokens) for Authentication and Authorization</li>
                        <li>Windows Terminal</li>
                    </ul>
                </div>

                {/* Specialized Knowledge Section */}
                <div className={styles.card}>
                    <h2><FaStar /> Specialized Knowledge</h2>
                    <ul>
                        <li><span className={styles.strong}>Dockerization:</span> Packaging Spring Boot applications into Docker containers</li>
                        <li><span className={styles.strong}>Microservices Architecture:</span> Building scalable and modular microservices</li>
                        <li><span className={styles.strong}>WebSockets:</span> Real-time communication for chat applications</li>
                        <li><span className={styles.strong}>MPesa Daraja API:</span> Payment gateway integration for MPesa services</li>
                        <li><span className={styles.strong}>Authentication:</span> Expertise in secure authentication workflows like JWT</li>
                    </ul>
                </div>

                {/* Achievements Section */}
                <div className={styles.card}>
                    <h2><FaStar /> Achievements</h2>
                    <ul>
                        <li>GitHub Pull Shark badge for code contributions</li>
                        <li>Regular contributions to open-source projects</li>
                    </ul>
                </div>

                {/* Soft Skills Section */}
                <div className={styles.card}>
                    <h2><FaSmile /> Soft Skills</h2>
                    <ul>
                        <li><span className={styles.strong}>Tech Blogging:</span> Sharing experiences, technical solutions, and tutorials on Medium</li>
                        <li><span className={styles.strong}>Mentorship:</span> Passion for empowering and inspiring others in the tech ecosystem</li>
                        <li><span className={styles.strong}>Communication:</span> Strong written and verbal communication skills</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Skills;
