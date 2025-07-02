import { useEffect, useState } from "react";
import styles from "./Home.module.css";
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter, FaArrowDown } from "react-icons/fa";
import mimi from "../assets/mimi.jpg";
import MySkills from "../components/MySkills.jsx";
import {useNavigate} from "react-router-dom";

const Home = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [currentRole, setCurrentRole] = useState(0);
    const navigate = useNavigate();

    const handleButtonClick = (path) => {
        navigate(`/${path}`);
    }

    const roles = [
        "Software Engineer",
        "GenAI Engineer",
        "ML Researcher",
        "Full Stack Developer",
        "Tech Blogger",
        "Problem Solver",
        "Innovation Enthusiast",
    ];

    useEffect(() => {
        setIsVisible(true);

        // Role rotation
        const roleInterval = setInterval(() => {
            setCurrentRole((prev) => (prev + 1) % roles.length);
        }, 3000);

        return () => clearInterval(roleInterval);
    }, []);

    return (
        <div className={styles.container}>
            {/* Hero Section */}
            <section className={`${styles.hero} ${isVisible ? styles.fadeInUp : ''}`}>
                <div className={styles.heroContent}>
                    <div className={styles.avatarContainer}>
                        <div className={styles.avatarWrapper}>
                            <img src={mimi} alt="Oscar Madegwa" className={styles.avatar} />
                            <div className={styles.avatarGlow}></div>
                        </div>
                    </div>

                    <div className={styles.heroText}>
                        <h1 className={styles.heroTitle}>
                            <span className={styles.greeting}>Hello, I'm</span>
                            <span className={styles.name}>Oscar Madegwa</span>
                        </h1>

                        <div className={styles.roleContainer}>
                            <span className={styles.rolePrefix}>I'm a </span>
                            <span className={styles.role} key={currentRole}>
                                {roles[currentRole]}
                            </span>
                        </div>

                        <p className={styles.heroDescription}>
                            Passionate about creating impactful solutions and bridging the gap between
                            innovative ideas and real-world implementations. I thrive on challenges that
                            push the boundaries of what's possible.
                        </p>

                        <div className={styles.heroActions}>
                            <button className={styles.primaryButton} onClick={() => {handleButtonClick('projects')}}>
                                View My Work
                            </button>
                            <button className={styles.secondaryButton} onClick={() => {handleButtonClick('contact')}}>
                                Let's Connect
                            </button>
                        </div>
                    </div>
                </div>

                <div className={styles.scrollIndicator}>
                    <FaArrowDown className={styles.scrollIcon} />
                </div>
            </section>

            {/* About Section */}
            <section className={`${styles.section} ${styles.about}`}>
                <div className={styles.sectionContent}>
                    <div className={styles.aboutGrid}>
                        <div className={styles.aboutText}>
                            <h2 className={styles.sectionTitle}>
                                Crafting Digital Experiences
                            </h2>
                            <div className={styles.aboutDescription}>
                                <p>
                                    I'm a software engineer with a passion for building scalable,
                                    user-centric applications that make a difference. My journey
                                    spans full-stack development, technical writing, and mentoring
                                    the next generation of developers.
                                </p>
                                <p>
                                    With expertise in modern web technologies and a keen eye for
                                    design, I bridge the gap between technical excellence and
                                    exceptional user experiences. I believe in the power of
                                    clean code, thoughtful architecture, and continuous learning.
                                </p>
                                <p>
                                    When I'm not coding, you'll find me sharing knowledge through
                                    technical blogs, contributing to open-source projects, or
                                    exploring the latest trends in technology and innovation.
                                </p>
                            </div>
                        </div>

                        <div className={styles.statsGrid}>
                            <div className={styles.statCard}>
                                <div className={styles.statNumber}>50+</div>
                                <div className={styles.statLabel}>Projects Completed</div>
                            </div>
                            <div className={styles.statCard}>
                                <div className={styles.statNumber}>2+</div>
                                <div className={styles.statLabel}>Years Experience</div>
                            </div>
                            <div className={styles.statCard}>
                                <div className={styles.statNumber}>20+</div>
                                <div className={styles.statLabel}>Blog Articles</div>
                            </div>
                            <div className={styles.statCard}>
                                <div className={styles.statNumber}>100+</div>
                                <div className={styles.statLabel}>GitHub Contributions</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section className={`${styles.section} ${styles.skills}`}>
                <div className={styles.sectionContent}>
                    <h2 className={styles.sectionTitle}>Skills & Expertise</h2>
                    <p className={styles.sectionSubtitle}>
                        Technologies and tools I use to bring ideas to life
                    </p>
                    <MySkills />
                </div>
            </section>

            {/* Connect Section */}
            <section className={`${styles.section} ${styles.connect}`}>
                <div className={styles.sectionContent}>
                    <div className={styles.connectCard}>
                        <h2 className={styles.connectTitle}>Let's Build Something Amazing</h2>
                        <p className={styles.connectDescription}>
                            Have a project in mind or just want to chat about technology?
                            I'm always open to new opportunities and interesting conversations.
                        </p>

                        <div className={styles.socialLinks}>
                            <a
                                href="https://github.com/madegwa-o"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.socialLink}
                                aria-label="GitHub Profile"
                            >
                                <FaGithub />
                                <span>GitHub</span>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/oscar-madegwa-528986289"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.socialLink}
                                aria-label="LinkedIn Profile"
                            >
                                <FaLinkedin />
                                <span>LinkedIn</span>
                            </a>
                            <a
                                href="https://x.com/madegwaO_"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.socialLink}
                                aria-label="Twitter Profile"
                            >
                                <FaTwitter />
                                <span>Twitter</span>
                            </a>
                            <a
                                href="mailto:madegwaoscar317@gmail.com"
                                className={styles.socialLink}
                                aria-label="Email Contact"
                            >
                                <FaEnvelope />
                                <span>Email</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;