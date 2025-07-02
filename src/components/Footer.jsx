import styles from './Footer.module.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter, FaCalendarAlt, FaPhone, FaMapMarkerAlt, FaCode, FaRocket, FaHeart } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const contactInfo = [
        {
            icon: FaEnvelope,
            label: 'Email',
            value: 'madegwaoscar317@gmail.com',
            href: 'mailto:madegwaoscar317@gmail.com'
        },
        {
            icon: FaPhone,
            label: 'Phone',
            value: '+254 115 225 391',
            href: 'tel:+254115225391'
        },
        {
            icon: FaMapMarkerAlt,
            label: 'Location',
            value: 'Nairobi, Kenya',
            href: 'https://maps.google.com/?q=Nairobi,Kenya'
        }
    ];

    const socialLinks = [
        { name: 'GitHub', href: 'https://github.com/madegwa-o', icon: FaGithub },
        { name: 'LinkedIn', href: 'https://www.linkedin.com/in/oscar-madegwa-528986289/', icon: FaLinkedin },
        { name: 'Twitter', href: 'https://x.com/madegwaO_', icon: FaTwitter },
        { name: 'Email', href: 'mailto:madegwaoscar317@gmail.com', icon: FaEnvelope }
    ];

    const services = [
        'Web Development',
        'Mobile App Development',
        'UI/UX Design',
        'Technical Consulting',
        'API Development',
        'Code Review & Optimization'
    ];

    const quickLinks = [
        { name: 'About', href: '/about' },
        { name: 'Projects', href: '/projects' },
        { name: 'Blog', href: '/blog' },
        { name: 'Services', href: '#services' },
        { name: 'Contact', href: '#contact' },
        { name: 'Privacy Policy', href: '#privacy' }
    ];

    return (
        <footer className={styles.footer}>
            {/* CTA Section */}
            <div className={styles.ctaSection}>
                <div className={styles.container}>
                    <div className={styles.ctaContent}>
                        <div className={styles.ctaText}>
                            <h2 className={styles.ctaTitle}>
                                Ready to Build Something Amazing?
                            </h2>
                            <p className={styles.ctaDescription}>
                                Let's turn your ideas into reality. Book a free consultation to discuss your project.
                            </p>
                        </div>
                        <div className={styles.ctaButtons}>
                            <a
                                href="https://calendly.com/oscarmadegwa"
                                className={styles.primaryButton}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaCalendarAlt className={styles.buttonIcon} />
                                Book a Call
                            </a>
                            <a
                                href="mailto:oscar@madegwa.dev?subject=Project Inquiry"
                                className={styles.secondaryButton}
                            >
                                <FaEnvelope className={styles.buttonIcon} />
                                Send Message
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Footer Content */}
            <div className={styles.mainFooter}>
                <div className={styles.container}>
                    <div className={styles.footerGrid}>
                        {/* About Section */}
                        <div className={styles.aboutSection}>
                            <div className={styles.brandContainer}>
                                <div className={styles.logoIcon}>
                                    <FaCode />
                                </div>
                                <h3 className={styles.brandName}>Oscar Madegwa</h3>
                            </div>
                            <p className={styles.brandDescription}>
                                Full-stack software engineer specializing in modern web technologies.
                                I help startups and businesses build scalable, user-centric applications
                                that drive growth and innovation.
                            </p>
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
                        </div>

                        {/* Services Section */}
                        <div className={styles.linksSection}>
                            <h4 className={styles.sectionTitle}>Services</h4>
                            <ul className={styles.linksList}>
                                {services.map((service, index) => (
                                    <li key={index} className={styles.linkItem}>
                                        <span className={styles.serviceItem}>
                                            <FaRocket className={styles.serviceIcon} />
                                            {service}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Quick Links Section */}
                        <div className={styles.linksSection}>
                            <h4 className={styles.sectionTitle}>Quick Links</h4>
                            <ul className={styles.linksList}>
                                {quickLinks.map((link) => (
                                    <li key={link.name} className={styles.linkItem}>
                                        <a href={link.href} className={styles.footerLink}>
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Section */}
                        <div className={styles.contactSection}>
                            <h4 className={styles.sectionTitle}>Get In Touch</h4>
                            <div className={styles.contactInfo}>
                                {contactInfo.map((contact) => (
                                    <a
                                        key={contact.label}
                                        href={contact.href}
                                        className={styles.contactItem}
                                        target={contact.href.includes('http') ? '_blank' : undefined}
                                        rel={contact.href.includes('http') ? 'noopener noreferrer' : undefined}
                                    >
                                        <contact.icon className={styles.contactIcon} />
                                        <div className={styles.contactDetails}>
                                            <span className={styles.contactLabel}>{contact.label}</span>
                                            <span className={styles.contactValue}>{contact.value}</span>
                                        </div>
                                    </a>
                                ))}
                            </div>

                            {/* Availability Status */}
                            <div className={styles.availabilityStatus}>
                                <div className={styles.statusIndicator}>
                                    <div className={styles.statusDot}></div>
                                    <span className={styles.statusText}>Available for new projects</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className={styles.bottomBar}>
                <div className={styles.container}>
                    <div className={styles.bottomContent}>
                        <div className={styles.copyright}>
                            <p>&copy; {currentYear} Oscar Madegwa. All rights reserved.</p>
                        </div>
                        <div className={styles.bottomLinks}>
                            <span className={styles.madeWith}>
                                Made with <FaHeart className={styles.heartIcon} /> in Nairobi
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;