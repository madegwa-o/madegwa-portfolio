import { useEffect, useRef, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleMenu = () => {
        setIsMenuOpen((prevState) => !prevState);
    };

    const handleClickOutside = useCallback((event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsMenuOpen(false);
        }
    }, []);

    const handleKeyDown = useCallback((event) => {
        if (event.key === 'Escape') {
            setIsMenuOpen(false);
        }
    }, []);

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleClickOutside, handleKeyDown]);

    return (
        <>
            {/* Hamburger Menu Button */}
            <button className={styles.hamburger} onClick={toggleMenu}>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
            </button>

            {/* Navigation Links */}
            <nav
                ref={dropdownRef}
                className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}
            >
                <ul className={styles.navList}>
                    <li className={styles.navItem}>
                        <Link to="/" className={styles.navLink}>
                            Home
                        </Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link to="/projects" className={styles.navLink}>
                            Projects
                        </Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link to="/blogs" className={styles.navLink}>
                            Blogs
                        </Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link to="/skills" className={styles.navLink}>
                            Skills
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Navbar;
