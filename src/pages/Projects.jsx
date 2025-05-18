
import styles from "./Projects.module.css";
import karuexchange from '../assets/karuexchange.png'
import aggressiveDog from "../assets/aggressive-dog.jpg"
import cppLogo from "../assets/c++.jpeg"
import simuProtector from "../assets/simu protector.jpeg"
import docker from "../assets/docker.png"
import android from "../assets/android.jpeg"
import aws from "../assets/aws.png"
import smartFarm from "../assets/smart farm.jpeg"
import locationImage from "../assets/locations.jpeg"
import microservice from "../assets/microservices.jpeg"
import mpesa from "../assets/mpesa.jpeg"
import webSocket from "../assets/web sockets.png"


const Projects = () => {
    const projects = [
        {
            date: "Jan 20, 2025",
            title: "Karu Exchange",
            link: "https://karuexchange.shop",
            description: "E-commerce platform for second-hand goods",
            language: "Java",
            image: karuexchange,
        },
        {
            date: "Updated last month",
            title: "Maki Security Consultancy",
            link: "https://maki-security.onrender.com/",
            description: "Security consultancy tools and resources",
            language: "TypeScript",
            image: aggressiveDog,
        },
        {
            date: "Updated 2 weeks ago",
            title: "Simu Protector",
            link: "https://github.com/madegwa-o/SimuProtector",
            description: "Helps locate lost phones",
            language: "JavaScript",
            image: simuProtector,
        },
        {
            date: "Updated 2 weeks ago",
            title: "BookStoreAndroid",
            link: "https://github.com/madegwa-o/BookStoreAndroid",
            description: "Bookstore project for Android Studio",
            language: "Java",
            image: android,
        },

        {
            date: "Updated last week",
            title: "AWS s3",
            link: "https://github.com/madegwa-o/aws-image-upload",
            description: "Image upload functionality using AWS services",
            language: "JavaScript",
            image: aws,
        },
        {
            date: "Updated on Dec 20, 2024",
            title: "C++ Algorithms",
            link: "https://github.com/madegwa-o/DSA",
            description: "Various algorithms and data structures",
            language: "Java",
            image: cppLogo,
        },
        {
            date: "Updated on Nov 13, 2024",
            title: "Smart Farm",
            link: "https://github.com/madegwa-o/SmartFarm",
            description: "Calculate farm size and crop productivity",
            language: "JavaScript",
            image: smartFarm,
        },
        {
            date: "Updated on Oct 2, 2024",
            title: "Daraja API Services",
            link: "https://github.com/madegwa-o/daraja-api-services",
            description: "Daraja API integration for businesses",
            language: "Java",
            image: mpesa,
        },
        {
            date: "Updated on Aug 27, 2024",
            title: "Web Sockets Chat App",
            link: "https://github.com/madegwa-o/text-me",
            description: "Text messaging service",
            language: "Java",
            image: webSocket,
        },
        {
            date: "Updated on Aug 5, 2024",
            title: "Locations App",
            link: "https://github.com/madegwa-o/Locations_app",
            description: "Geolocation and mapping services",
            language: "JavaScript",
            image: locationImage,
        },
        {
            date: "Updated on Jul 25, 2024",
            title: "SpringBoot Microservices",
            link: "https://github.com/madegwa-o/Guava-Microservices",
            description: "Microservices framework for Guava-based projects",
            language: "Java",
            image: microservice,
        },
        {
            date: "Updated on Jul 8, 2024",
            title: "Dockerizing Spring Boot Apps",
            link: "https://github.com/madegwa-o/Dockerising-springboot-apps",
            description: "Template for Dockerizing Spring Boot apps",
            language: "Java",
            image: docker,
        },
    ];


    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>Projects</h1>
            <div className={styles.projectsGrid}>
                {projects.map((project, index) => (
                    <div key={index} className={styles.projectCard}>
                        <div
                            className={styles.cardBackground}
                            style={{
                                backgroundImage: `url(${project.image || fallBackImage})`,
                            }}
                        >
                            <div className={styles.cardOverlay}>
                                <h2 className={styles.title}>{project.title}</h2>
                                <p className={styles.description}>{project.description}</p>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.viewButton}
                                >
                                    View Project
                                </a>
                            </div>
                        </div>
                        <div className={styles.cardFooter}>
                            <span>{project.language}</span>
                            <span>{project.date}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
