import styles from './Header.module.css';
import { useState, useEffect } from 'react';
import { FaLaptopCode, FaHome, FaUser, FaBriefcase, FaBlog, FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navigationItems = [
        { name: 'Home', href: '/', icon: FaHome },
        { name: 'Projects', href: '/projects', icon: FaBriefcase },
        { name: 'Resume', href: '/resume', icon: FaUser },
        { name: 'Blogs', href: '/blogs', icon: FaBlog },
        { name: 'Contact', href: '/contact', icon: FaEnvelope },
    ];

    const socialLinks = [
        { name: 'GitHub', href: 'https://github.com/madegwa-o', icon: FaGithub },
        { name: 'LinkedIn', href: 'https://www.linkedin.com/in/oscar-madegwa-528986289', icon: FaLinkedin },
        { name: 'Twitter', href: 'https://x.com/madegwaO_', icon: FaTwitter },
        { name: 'Email', href: 'mailto:madegwaoscar317@gmail.com', icon: FaEnvelope },
    ];

    return (
        <>
            <header className={`${styles.header} ${isScrolled ? styles.scrolled : styles.transparent}`}>
                <div className={styles.headerContainer}>
                    <div className={styles.headerContent}>
                        {/* Logo Section */}
                        <div className={styles.logoContainer}>
                            <div className={styles.logoWrapper}>
                                <div className={styles.logoGlow}></div>
                                <div className={styles.logoIcon}>
                                    <FaLaptopCode />
                                </div>
                            </div>
                            <div className={styles.logoText}>
                                <h1 className={styles.logoTitle}>
                                    Oscar Madegwa
                                </h1>
                                <p className={styles.logoSubtitle}>Software Engineer</p>
                            </div>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className={styles.nav}>
                            {navigationItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className={styles.navLink}
                                >
                                    {item.name}
                                </a>
                            ))}
                        </nav>

                        {/* Social Links & Mobile Menu Button */}
                        <div className={styles.headerActions}>
                            {/* Social Links - Desktop */}
                            <div className={styles.socialLinks}>
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.name}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.socialLink}
                                        aria-label={social.name}
                                    >
                                        <social.icon />
                                    </a>
                                ))}
                            </div>

                            {/* Mobile Menu Button */}
                            <button
                                onClick={toggleMenu}
                                className={styles.mobileMenuButton}
                                aria-label="Toggle menu"
                            >
                                <div className={`${styles.hamburger} ${isMenuOpen ? styles.open : ''}`}>
                                    <span className={styles.hamburgerLine}></span>
                                    <span className={styles.hamburgerLine}></span>
                                    <span className={styles.hamburgerLine}></span>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <div className={`${styles.mobileNav} ${isMenuOpen ? styles.open : styles.closed}`}>
                    <div className={styles.mobileNavContent}>
                        <div className={styles.mobileNavLinks}>
                            {navigationItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className={styles.mobileNavLink}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <item.icon />
                                    <span>{item.name}</span>
                                </a>
                            ))}
                        </div>

                        {/* Mobile Social Links */}
                        <div className={styles.mobileSocialLinks}>
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.mobileSocialLink}
                                    aria-label={social.name}
                                >
                                    <social.icon />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;