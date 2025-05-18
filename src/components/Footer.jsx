import styles from './Footer.module.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.socialLinks}>
                <a href="https://github.com/madegwa-o" target="_blank" rel="noopener noreferrer">
                    <FaGithub size={24} />
                </a>
                <a href="https://www.linkedin.com/in/oscar-madegwa-528986289" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={24} />
                </a>
                <a href="mailto:madegwaoscar317@gmail.com">
                    <FaEnvelope size={24} />
                </a>
                <a href="https://x.com/madegwaO_" target="_blank" rel="noopener noreferrer">
                    <FaTwitter size={24} />
                </a>
            </div>
            <p>&copy; 2025 Oscar Madegwa. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
