// Enhanced SEO hook for dynamic meta tags
import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

const useDynamicSEO = () => {
    const location = useLocation();

    const seoData = useMemo(() => {
        const baseUrl = 'https://madegwa.pages.dev';
        const currentPath = location.pathname;

        const pages = {
            '/': {
                title: 'Oscar Madegwa - Full-Stack Software Engineer & Web Developer',
                description: 'Oscar Madegwa is a passionate full-stack software engineer specializing in modern web development, React, Spring Boot, and innovative digital solutions.',
                keywords: 'Oscar Madegwa, software engineer, full-stack developer, web development, React developer',
                type: 'website'
            },
            '/about': {
                title: 'About Oscar Madegwa - Professional Software Engineer',
                description: 'Learn about Oscar Madegwa\'s journey as a software engineer, technical expertise, and passion for creating innovative web solutions.',
                keywords: 'Oscar Madegwa about, software engineer background, technical skills',
                type: 'profile'
            },
            '/projects': {
                title: 'Projects by Oscar Madegwa - Full-Stack Development Portfolio',
                description: 'Explore Oscar Madegwa\'s portfolio of full-stack web applications, React projects, and innovative software solutions.',
                keywords: 'Oscar Madegwa projects, web development portfolio, React applications',
                type: 'portfolio'
            },
            '/blogs': {
                title: 'Tech Blog by Oscar Madegwa - Software Development Insights',
                description: 'Read Oscar Madegwa\'s technical blog posts about software engineering, web development, and programming best practices.',
                keywords: 'Oscar Madegwa blog, software engineering articles, web development insights',
                type: 'blog'
            },
            '/resume': {
                title: 'Oscar Madegwa Resume - Software Engineer CV',
                description: 'View Oscar Madegwa\'s professional resume showcasing experience, skills, and achievements in software engineering.',
                keywords: 'Oscar Madegwa resume, software engineer CV, professional experience',
                type: 'profile'
            },
            '/contact': {
                title: 'Contact Oscar Madegwa - Software Engineer for Hire',
                description: 'Get in touch with Oscar Madegwa for software development projects, consulting, or collaboration opportunities.',
                keywords: 'contact Oscar Madegwa, hire software engineer, web development services',
                type: 'contact'
            }
        };

        const currentPage = pages[currentPath] || pages['/'];

        return {
            ...currentPage,
            url: `${baseUrl}${currentPath}`,
            canonical: `${baseUrl}${currentPath}`,
            breadcrumbs: generateBreadcrumbs(currentPath)
        };
    }, [location.pathname]);

    return seoData;
};

const generateBreadcrumbs = (path) => {
    const pathParts = path.split('/').filter(Boolean);
    const breadcrumbs = [
        { name: 'Home', url: 'https://madegwa.pages.dev/' }
    ];

    let currentPath = '';
    pathParts.forEach((part, index) => {
        currentPath += `/${part}`;
        breadcrumbs.push({
            name: part.charAt(0).toUpperCase() + part.slice(1),
            url: `https://madegwa.pages.dev${currentPath}`
        });
    });

    return breadcrumbs;
};

// Enhanced structured data generator
export const generateBreadcrumbSchema = (breadcrumbs) => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": crumb.name,
        "item": crumb.url
    }))
});

// Performance optimization meta tags
export const getPerformanceMetaTags = () => [
    <link key="preload-font" rel="preload" href="/fonts/inter.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />,
    <link key="prefetch-about" rel="prefetch" href="/about" />,
    <link key="prefetch-projects" rel="prefetch" href="/projects" />,
    <link key="prefetch-blogs" rel="prefetch" href="/blogs" />,
    <link key="prefetch-resume" rel="prefetch" href="/resume" />,
    <link key="prefetch-contact" rel="prefetch" href="/contact" />,
    <meta key="format-detection" name="format-detection" content="telephone=no" />,
    <meta key="mobile-web-app" name="mobile-web-app-capable" content="yes" />,
    <meta key="apple-status-bar" name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
];

export default useDynamicSEO;