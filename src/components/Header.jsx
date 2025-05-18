import { useState } from 'react';
import styles from './Header.module.css';
import { FaLaptopCode } from 'react-icons/fa';
import Navbar from "./Navbar.jsx";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={styles.header}>
            {/* Programmer Logo */}
            <div className={styles.logoContainer}>
                <FaLaptopCode className={styles.logo} size={40} color="#fff"/>
                <h1 className={styles.title}>Programmer</h1>
            </div>

            <Navbar/>
        </header>
    );
};

export default Header;
