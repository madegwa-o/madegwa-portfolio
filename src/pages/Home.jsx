import  {useEffect, useState} from "react";
import styles from "./Home.module.css";
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import mimi from "../assets/mimi.jpeg";
import MySkills from "../components/MySkills.jsx";

const Home = () => {
    const [position, setPosition] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 }); // Center initial position
    const [dragging, setDragging] = useState(false); // Track dragging state
    const [offset, setOffset] = useState({ x: 0, y: 0 }); // Track drag offsets
    const [showCounter, setShowCounter] = useState(true); // Track counter visibility

    useEffect(() => {
        // Set timeout to hide the counter after 6 seconds
        const timer = setTimeout(() => {
            setShowCounter(false);
        }, 6000);

        // Cleanup timeout if the component unmounts
        return () => clearTimeout(timer);
    }, []);

    const handleDragStart = (e) => {
        setDragging(true);
        const rect = e.target.getBoundingClientRect();
        setOffset({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    const handleDrag = (e) => {
        if (!dragging) return;
        e.preventDefault(); // Prevent unwanted selection
        setPosition({
            x: e.clientX - offset.x,
            y: e.clientY - offset.y,
        });
    };

    const handleDragEnd = () => {
        setDragging(false);
    };

    return (
        <div
            className={styles.container}
            onMouseMove={handleDrag}
            onMouseUp={handleDragEnd}
            onMouseLeave={handleDragEnd}
        >
            <h1 className={styles.mainHeading}>Oscar Madegwa</h1>
            <hr className={styles.divider} />
            <div className={styles.content}>
                <div className={styles.left}>
                    <div className={styles.avatarSection}>
                        <img src={mimi} alt="Madegwa Oscar" className={styles.avatar} />
                        <h1 className={styles.name}>Madegwa Oscar</h1>
                        <p className={styles.subtitle}>Software Engineer, Tech Blogger & Tech Enthusiast</p>
                    </div>
                    <div className={styles.links}>
                        <a href="https://github.com/madegwa-o" target="_blank" rel="noopener noreferrer">
                            <FaGithub size={24} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/oscar-madegwa-528986289"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaLinkedin size={24} />
                        </a>
                        <a href="mailto:madegwaoscar317@gmail.com">
                            <FaEnvelope size={24} />
                        </a>
                        <a href="https://x.com/madegwaO_" target="_blank" rel="noopener noreferrer">
                            <FaTwitter size={24} />
                        </a>
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.intro}>
                        <h2>Hello World!</h2>
                        <p>
                            Hi, I'm Oscar Madegwa. I’m a Software Engineer, Tech Blogger, and an innovator who thrives
                            on creating impactful solutions to real-world problems.
                        </p>
                        <p>
                            With a passion for programming, storytelling, and empowering others, I leverage technology
                            to bridge gaps and inspire growth. I believe in the power of sharing knowledge, which drives
                            my open-source contributions and technical content creation.
                        </p>
                        <p>
                            Whether building scalable web applications, mentoring budding developers, or exploring
                            emerging technologies, my journey is fueled by curiosity and a commitment to excellence.
                        </p>
                        <p>
                            Let’s connect and create together—because the future of tech belongs to those who dare to
                            dream and build.
                        </p>
                    </div>
                    <div className={styles.skills}>
                        <h2>Skills & Tools</h2>
                        <MySkills />
                    </div>
                </div>
            </div>


            {/* Draggable Visitor Counter */}
            {showCounter && (
                <div
                    className={styles.dragable}
                    style={{
                        top: `${position.y}px`,
                        left: `${position.x}px`,
                    }}
                    onMouseDown={handleDragStart}
                >
                    <h3>Visitor count</h3>
                    <img src="https://profile-counter.glitch.me/madegwa-o/count.svg" alt="visitor count" />
                </div>
            )}
        </div>
    );
};

export default Home;
