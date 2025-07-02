import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter, FaPaperPlane } from 'react-icons/fa';
import styles from './ContactMe.module.css';

const ContactMe = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('');

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
        { name: 'GitHub', href: 'https://github.com/oscarmadegwa', icon: FaGithub },
        { name: 'LinkedIn', href: 'https://linkedin.com/in/oscarmadegwa', icon: FaLinkedin },
        { name: 'Twitter', href: 'https://twitter.com/oscarmadegwa', icon: FaTwitter },
        { name: 'Email', href: 'mailto:oscar@madegwa.dev', icon: FaEnvelope }
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            setSubmitStatus('success');
            setIsSubmitting(false);
            setFormData({ name: '', email: '', subject: '', message: '' });

            setTimeout(() => {
                setSubmitStatus('');
            }, 3000);
        }, 1000);
    };

    return (
        <div className={styles.container}>
            <div className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1 className={styles.title}>
                        Let's Create Something
                        <span className={styles.accent}> Amazing Together</span>
                    </h1>
                    <p className={styles.subtitle}>
                        Ready to bring your ideas to life? I'm here to help you build
                        exceptional digital experiences that make a difference.
                    </p>
                </div>
                <div className={styles.heroVisual}>
                    <div className={styles.floatingCard}>
                        <div className={styles.cardContent}>
                            <div className={styles.cardIcon}>💡</div>
                            <h3>Ready to Collaborate</h3>
                            <p>Let's discuss your next project</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.content}>
                <div className={styles.contactGrid}>
                    <div className={styles.contactInfo}>
                        <h2 className={styles.sectionTitle}>Get in Touch</h2>
                        <p className={styles.sectionSubtitle}>
                            I'm always excited to connect with fellow creators, potential clients,
                            and anyone passionate about building great digital products.
                        </p>

                        <div className={styles.contactCards}>
                            {contactInfo.map((item, index) => (
                                <a
                                    key={index}
                                    href={item.href}
                                    className={styles.contactCard}
                                    target={item.href.startsWith('http') ? '_blank' : '_self'}
                                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : ''}
                                >
                                    <div className={styles.contactIcon}>
                                        <item.icon />
                                    </div>
                                    <div className={styles.contactDetails}>
                                        <span className={styles.contactLabel}>{item.label}</span>
                                        <span className={styles.contactValue}>{item.value}</span>
                                    </div>
                                </a>
                            ))}
                        </div>

                        <div className={styles.socialSection}>
                            <h3 className={styles.socialTitle}>Follow Me</h3>
                            <div className={styles.socialLinks}>
                                {socialLinks.map((link, index) => (
                                    <a
                                        key={index}
                                        href={link.href}
                                        className={styles.socialLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={link.name}
                                    >
                                        <link.icon />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className={styles.contactForm}>
                        <h2 className={styles.sectionTitle}>Send Message</h2>
                        <p className={styles.sectionSubtitle}>
                            Have a project in mind? Drop me a line and let's discuss how we can work together.
                        </p>

                        <form onSubmit={handleSubmit} className={styles.form}>
                            <div className={styles.formGroup}>
                                <label htmlFor="name" className={styles.label}>Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className={styles.input}
                                    required
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="email" className={styles.label}>Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className={styles.input}
                                    required
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="subject" className={styles.label}>Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    className={styles.input}
                                    required
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="message" className={styles.label}>Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    className={styles.textarea}
                                    rows="6"
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className={styles.submitButton}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <span className={styles.loading}>Sending...</span>
                                ) : (
                                    <>
                                        <FaPaperPlane />
                                        Send Message
                                    </>
                                )}
                            </button>

                            {submitStatus === 'success' && (
                                <div className={styles.successMessage}>
                                    Thanks for your message! I'll get back to you soon.
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;