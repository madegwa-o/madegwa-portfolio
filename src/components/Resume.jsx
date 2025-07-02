import styles from './Resume.module.css'
import { Mail, Phone, Github, Linkedin, Globe, Printer } from 'lucide-react';

const Resume = () => {
    const resumeData = {
        name: "OSCAR MADEGWA",
        location: "Nairobi, Kenya",
        contact: {
            email: "madegwaoscar317@gmail.com",
            phone: "011 522 5391",
            github: "https://github.com/madegwa-o",
            linkedin: "https://www.linkedin.com/in/oscar-madegwa-528986289/",
            portfolio: "https://madegwa.netlify.app/"
        },
        objective: "AI Developer with a robust background in software engineering and a deep interest in Retrieval-Augmented Generation (RAG) technologies. Passionate about creating scalable, impactful AI solutions tailored to healthcare and public services, leveraging cutting-edge NLP models such as Meta's Llama.",
        education: [
            {
                degree: "Bachelor of Science in Computer Science",
                institution: "Karatina University",
                date: "Expected Graduation: 2027"
            }
        ],
        skills: [
            {
                category: "Artificial Intelligence",
                items: "LLM fine-tuning, Retrieval-Augmented Generation (RAG), NLP with Llama and other language models"
            },
            {
                category: "Programming Languages",
                items: "Java (Spring Boot), JavaScript (React.js), Python (FastAPI)"
            },
            {
                category: "Frontend Development",
                items: "Proficient in React.js for developing user-centric applications"
            },
            {
                category: "Backend Development",
                items: "Scalable API design with Java Spring Boot, real-time systems integration"
            },
            {
                category: "Databases",
                items: "Expertise in MongoDB and SQL for data-driven AI applications"
            },
            {
                category: "Cloud Services",
                items: "Proficient in AWS (S3, Lambda) and Docker for scalable deployments"
            },
            {
                category: "Version Control",
                items: "GitHub for collaborative development"
            }
        ],
        experience: [
            {
                position: "AI Developer & Software Engineer",
                company: "Freelance",
                date: "Dec 2023 – Present",
                responsibilities: [
                    "Developed conversational AI systems integrating Retrieval-Augmented Generation techniques",
                    "Designed and deployed scalable REST APIs for healthcare and accessibility applications",
                    "Built end-to-end AI pipelines leveraging Llama models and MongoDB for efficient data retrieval"
                ]
            },
            {
                position: "Google Developer Groups Member",
                company: "Karatina University",
                date: "Jan 2024 – Present",
                responsibilities: [
                    "Contributed to AI-focused workshops, exploring the intersection of cloud and conversational AI",
                    "Led projects on applying NLP models to healthcare challenges in underserved communities"
                ]
            }
        ],
        projects: [
            {
                name: "Kia: Conversational Healthcare Assistant",
                description: [
                    "Designed a speech-based AI assistant to diagnose and predict diseases by discussing symptoms with patients",
                    "Utilized Retrieval-Augmented Generation for accurate, contextual, and real-time healthcare recommendations"
                ],
                technologies: "React.js, FastAPI, LangChain, AWS, MongoDB, Meta's Llama"
            }
        ],
        attributes: [
            "Strong communicator, capable of translating complex technical concepts into impactful solutions",
            "Passionate about leveraging AI to address societal challenges, particularly in healthcare",
            "Innovative problem solver with a focus on scalability and efficiency"
        ]
    };

    const handlePrint = () => {
        window.print();
    };

    return (
        <div className={styles.resumeContainer}>
            <div className={styles.resumeWrapper}>
                {/* Print Button */}
                <button
                    onClick={handlePrint}
                    className={styles.printButton}
                >
                    <Printer size={16} />
                    Print/Save PDF
                </button>

                <div className={styles.resumeContent}>
                    {/* Header */}
                    <div className={styles.header}>
                        <h1 className={styles.name}>
                            {resumeData.name}
                        </h1>
                        <div className={styles.contactInfo}>
                            <p className={styles.location}>{resumeData.location}</p>
                            <div className={styles.contactRow}>
                                <div className={styles.contactItem}>
                                    <Mail size={14} />
                                    <a href={`mailto:${resumeData.contact.email}`} className={styles.contactLink}>
                                        {resumeData.contact.email}
                                    </a>
                                </div>
                                <div className={styles.contactItem}>
                                    <Phone size={14} />
                                    <span>{resumeData.contact.phone}</span>
                                </div>
                            </div>
                            <div className={styles.contactRow}>
                                <div className={styles.contactItem}>
                                    <Github size={14} />
                                    <a href={resumeData.contact.github} className={styles.contactLink}>
                                        GitHub
                                    </a>
                                </div>
                                <div className={styles.contactItem}>
                                    <Linkedin size={14} />
                                    <a href={resumeData.contact.linkedin} className={styles.contactLink}>
                                        LinkedIn
                                    </a>
                                </div>
                                <div className={styles.contactItem}>
                                    <Globe size={14} />
                                    <a href={resumeData.contact.portfolio} className={styles.contactLink}>
                                        Portfolio
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Objective */}
                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>
                            Objective
                        </h2>
                        <p className={styles.objectiveText}>
                            {resumeData.objective}
                        </p>
                    </section>

                    {/* Education */}
                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>
                            Education
                        </h2>
                        {resumeData.education.map((edu, index) => (
                            <div key={index} className={styles.educationItem}>
                                <div className={styles.degree}>{edu.degree}</div>
                                <div className={styles.institution}>{edu.institution}</div>
                                <div className={styles.date}>{edu.date}</div>
                            </div>
                        ))}
                    </section>

                    {/* Technical Skills */}
                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>
                            Technical Skills
                        </h2>
                        <div className={styles.skillsGrid}>
                            {resumeData.skills.map((skill, index) => (
                                <div key={index} className={styles.skillCategory}>
                                    <div className={styles.skillTitle}>{skill.category}:</div>
                                    <div className={styles.skillItems}>{skill.items}</div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Experience */}
                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>
                            Experience
                        </h2>
                        {resumeData.experience.map((exp, index) => (
                            <div key={index} className={styles.experienceItem}>
                                <div className={styles.position}>{exp.position}</div>
                                <div className={styles.company}>{exp.company}</div>
                                <div className={styles.experienceDate}>{exp.date}</div>
                                <ul className={styles.responsibilities}>
                                    {exp.responsibilities.map((responsibility, idx) => (
                                        <li key={idx}>{responsibility}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </section>

                    {/* Projects */}
                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>
                            Relevant Projects
                        </h2>
                        {resumeData.projects.map((project, index) => (
                            <div key={index} className={styles.projectItem}>
                                <div className={styles.projectName}>{project.name}</div>
                                <ul className={styles.projectDescription}>
                                    {project.description.map((desc, idx) => (
                                        <li key={idx}>{desc}</li>
                                    ))}
                                    <li>
                                        <span className={styles.technologies}>Technologies:</span> {project.technologies}
                                    </li>
                                </ul>
                            </div>
                        ))}
                    </section>

                    {/* Personal Attributes */}
                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>
                            Personal Attributes
                        </h2>
                        <ul className={styles.attributes}>
                            {resumeData.attributes.map((attribute, index) => (
                                <li key={index}>{attribute}</li>
                            ))}
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Resume;