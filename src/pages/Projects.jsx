import { useState } from 'react';
import styles from "./Projects.module.css";
import karuexchange from '../assets/karuexchange.png'
import kia from "../assets/kia.png"
import karucounseling from "../assets/karucounseling.png"
import aws from "../assets/aws.png"
import smartFarm from "../assets/smartfarm.png"
import mpesa from "../assets/mpesa.png"

const PortfolioProjects = () => {
    const [expandedProject, setExpandedProject] = useState(null);
    const [iframeErrors, setIframeErrors] = useState(new Set());

    const projects = [
        {
            id: 1,
            title: "Karu Exchange",
            company: "Personal Project",
            role: "Full Stack Developer & Product Owner",
            description: "E-commerce platform for second-hand goods with secure payment integration and real-time messaging between buyers and sellers.",
            detailedDescription: "Led the complete development lifecycle from concept to deployment. Implemented secure payment processing, user authentication, and a responsive marketplace interface. Built using Java Spring Boot backend with React frontend.",
            technologies: ["Java", "Spring Boot", "React", "PostgreSQL", "AWS"],
            roles: ["FULL STACK DEVELOPER", "PRODUCT OWNER", "UI/UX DESIGN", "DEVOPS"],
            date: "Jan 2025",
            link: "https://karuexchange.shop",
            status: "Live",
            image: karuexchange
        },
        {
            id: 2,
            title: "Kia Health Platform",
            company: "Healthcare Startup",
            role: "AI Engineer",
            description: "AI-powered health platform providing personalized healthcare recommendations and appointment scheduling.",
            detailedDescription: "Architected and developed the frontend infrastructure for a comprehensive health platform. Implemented AI chat interfaces, appointment booking systems, and patient dashboard with real-time health monitoring.",
            technologies: ["TypeScript", "React", "Node.js", "AI/ML Integration"],
            roles: ["LEAD FRONTEND", "SYSTEM ARCHITECTURE", "AI INTEGRATION", "USER EXPERIENCE"],
            date: "Ongoing",
            link: "https://itskia.com/",
            status: "In Development",
            image: kia
        },
        {
            id: 3,
            title: "Karu Counseling Platform",
            company: "Educational Institution",
            role: "Full Stack Developer",
            description: "Digital counseling platform connecting students with professional counselors for academic and personal guidance.",
            detailedDescription: "Developed a comprehensive counseling management system with appointment scheduling, video conferencing integration, and progress tracking. Focused on creating a safe, accessible environment for student support services.",
            technologies: ["JavaScript", "React", "Node.js", "WebRTC"],
            roles: ["FULL STACK DEVELOPER", "DATABASE DESIGN", "SECURITY IMPLEMENTATION"],
            date: "Updated 2 weeks ago",
            link: "https://karucounselling.pages.dev/",
            status: "Live",
            image: karucounseling
        },
        {
            id: 4,
            title: "AWS Cloud Solutions",
            company: "Various Clients",
            role: "Cloud Solutions Architect",
            description: "Scalable image upload and processing system using AWS services for multiple client applications.",
            detailedDescription: "Designed and implemented cloud-native solutions for file handling, processing, and storage. Created automated pipelines for image optimization, CDN distribution, and backup strategies.",
            technologies: ["AWS S3", "Lambda", "CloudFront", "JavaScript"],
            roles: ["SOLUTIONS ARCHITECT", "CLOUD ENGINEERING", "PERFORMANCE OPTIMIZATION"],
            date: "Updated last week",
            link: "https://github.com/madegwa-o/aws-image-upload",
            status: "Active",
            image: aws
        },
        {
            id: 5,
            title: "Smart Farm Analytics",
            company: "AgriTech Initiative",
            role: "IoT Developer & Data Analyst",
            description: "IoT-enabled farm management system calculating crop productivity and optimizing resource allocation.",
            detailedDescription: "Built an intelligent farming solution combining IoT sensors, weather data, and machine learning to provide farmers with actionable insights for crop management and yield optimization.",
            technologies: ["JavaScript", "IoT Sensors", "Data Analytics", "Machine Learning"],
            roles: ["IOT DEVELOPER", "DATA ANALYST", "SYSTEM INTEGRATION"],
            date: "Nov 2024",
            link: "https://github.com/madegwa-o/SmartFarm",
            status: "Completed",
            image: smartFarm
        },
        {
            id: 6,
            title: "Daraja API Services",
            company: "Fintech Solutions",
            role: "Backend Developer & API Specialist",
            description: "M-Pesa payment integration services for businesses across Kenya and East Africa.",
            detailedDescription: "Developed robust payment processing solutions using Safaricom's Daraja API. Created reusable modules for C2B, B2C, and B2B transactions with comprehensive error handling and transaction monitoring.",
            technologies: ["Java", "Spring Boot", "M-Pesa API", "PostgreSQL"],
            roles: ["BACKEND DEVELOPER", "API INTEGRATION", "FINTECH SPECIALIST"],
            date: "Oct 2024",
            link: "https://github.com/madegwa-o/daraja-api-services",
            status: "Completed",
            image: mpesa
        }
    ];

    const toggleExpanded = (projectId) => {
        setExpandedProject(expandedProject === projectId ? null : projectId);
    };

    const handleIframeError = (projectId) => {
        setIframeErrors(prev => new Set([...prev, projectId]));
    };

    const canShowIframe = (project) => {
        return (project.status === 'Live' || project.status === 'Active') &&
            !iframeErrors.has(project.id) &&
            project.link.startsWith('http');
    };

    const getStatusBadgeClass = (status) => {
        switch (status) {
            case 'Live':
                return `${styles.statusBadge} ${styles.statusLive}`;
            case 'In Development':
                return `${styles.statusBadge} ${styles.statusInDevelopment}`;
            default:
                return `${styles.statusBadge} ${styles.statusDefault}`;
        }
    };

    return (
        <div className={styles.container}>
            {/* Header Section */}
            <div className={styles.header}>
                <div className={styles.headerDivider}></div>
                <h1 className={styles.headerTitle}>
                    Clients & Projects
                </h1>
                <p className={styles.headerDescription}>
                    I collaborate with forward-thinking companies and organizations to build
                    innovative digital solutions that drive meaningful impact and user engagement.
                </p>
            </div>

            {/* Projects Grid */}
            <div className={styles.projectsGrid}>
                {projects.map((project, index) => (
                    <div
                        key={project.id}
                        className={`${styles.projectItem} ${styles.fadeInUp}`}
                        style={{
                            animationDelay: `${index * 0.1}s`
                        }}
                    >
                        {/* Project Image */}
                        <div className={styles.projectImageContainer}>
                            {canShowIframe(project) ? (
                                <iframe
                                    src={project.link}
                                    className={styles.projectIframe}
                                    title={`${project.title} Preview`}
                                    onError={() => handleIframeError(project.id)}
                                    onLoad={(e) => {
                                        // Check if iframe loaded successfully
                                        try {
                                            // This will throw an error if blocked by X-Frame-Options
                                            e.target.contentWindow.location.href;
                                        } catch (error) {
                                            handleIframeError(project.id);
                                        }
                                    }}
                                />
                            ) : (
                                <div className={styles.projectImagePlaceholder}>
                                    {project.image && project.image !== "/api/placeholder/400/300" ? (
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className={styles.projectImage}
                                        />
                                    ) : (
                                        project.title
                                    )}
                                </div>
                            )}

                            {/* Status Badge */}
                            <div className={getStatusBadgeClass(project.status)}>
                                {project.status}
                            </div>
                        </div>

                        {/* Project Content */}
                        <div className={styles.projectContent}>
                            {/* Company */}
                            <div className={styles.projectCompany}>
                                {project.company}
                            </div>

                            {/* Title */}
                            <h2 className={styles.projectTitle}>
                                {project.title}
                            </h2>

                            {/* Role */}
                            <div className={styles.projectRole}>
                                {project.role}
                            </div>

                            {/* Description */}
                            <p className={styles.projectDescription}>
                                {expandedProject === project.id ? project.detailedDescription : project.description}
                            </p>

                            {/* Role Tags */}
                            <div className={styles.roleTags}>
                                {project.roles.map((role, roleIndex) => (
                                    <span key={roleIndex} className={styles.roleTag}>
                                        {role}
                                    </span>
                                ))}
                            </div>

                            {/* Technologies */}
                            <div className={styles.technologies}>
                                {project.technologies.map((tech, techIndex) => (
                                    <span key={techIndex} className={styles.technologyTag}>
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Actions */}
                            <div className={styles.actions}>
                                <button
                                    onClick={() => toggleExpanded(project.id)}
                                    className={styles.toggleButton}
                                >
                                    {expandedProject === project.id ? 'Show less' : 'Show more'}
                                    <span className={`${styles.toggleIcon} ${expandedProject === project.id ? styles.toggleIconExpanded : ''}`}>
                                        ↓
                                    </span>
                                </button>

                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.projectLink}
                                >
                                    View Project →
                                </a>
                            </div>

                            {/* Date */}
                            <div className={styles.projectDate}>
                                {project.date}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PortfolioProjects;