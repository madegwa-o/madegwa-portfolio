import { Outlet } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import profileImage from './assets/mimi.jpg';
import { contactInfo, socialLinks } from './data/contactInfo';
import useDynamicSEO, { generateBreadcrumbSchema, getPerformanceMetaTags } from './hooks/useDynamicSEO'; // Adjust path as needed

function BaseLayout() {
    const seoData = useDynamicSEO();
    const performanceMetaTags = getPerformanceMetaTags();

    return (
        <>
            <Helmet>
                {/* Dynamic SEO data */}
                <title>{seoData.title}</title>
                <meta name="title" content={seoData.title} />
                <meta name="description" content={seoData.description} />
                <meta name="keywords" content={seoData.keywords} />

                {/* Static meta tags */}
                <meta name="author" content="Oscar Madegwa" />
                <meta name="robots" content="index, follow" />
                <meta name="language" content="English" />
                <meta name="revisit-after" content="7 days" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

                {/* Dynamic canonical URL */}
                <link rel="canonical" href={seoData.canonical} />

                {/* Open Graph tags with dynamic data */}
                <meta property="og:type" content={seoData.type} />
                <meta property="og:url" content={seoData.url} />
                <meta property="og:title" content={seoData.title} />
                <meta property="og:description" content={seoData.description} />
                <meta property="og:image" content={`https://madegwa.pages.dev${profileImage}`} />
                <meta property="og:image:alt" content="Oscar Madegwa - Software Engineer Profile" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:site_name" content="Oscar Madegwa Portfolio" />
                <meta property="og:locale" content="en_US" />

                {/* Twitter Card tags with dynamic data */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content={seoData.url} />
                <meta property="twitter:title" content={seoData.title} />
                <meta property="twitter:description" content={seoData.description} />
                <meta property="twitter:image" content={`https://madegwa.pages.dev${profileImage}`} />
                <meta property="twitter:image:alt" content="Oscar Madegwa - Software Engineer Profile" />
                <meta property="twitter:creator" content={socialLinks.twitterHandle} />
                <meta property="twitter:site" content={socialLinks.twitterHandle} />

                {/* Theme and app meta tags */}
                <meta name="theme-color" content="#2563eb" />
                <meta name="msapplication-TileColor" content="#2563eb" />
                <meta name="application-name" content="Oscar Madegwa Portfolio" />

                {/* Geographic meta tags */}
                <meta name="geo.region" content={contactInfo.location.region} />
                <meta name="geo.placename" content={contactInfo.location.value.split(',')[0]} />
                <meta name="geo.position" content={`${contactInfo.location.lat};${contactInfo.location.lng}`} />
                <meta name="ICBM" content={`${contactInfo.location.lat}, ${contactInfo.location.lng}`} />

                {/* Performance optimization meta tags */}
                {performanceMetaTags}

                {/* Structured Data - Person Schema */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Person",
                        "name": "Oscar Madegwa",
                        "jobTitle": "Full-Stack Software Engineer",
                        "description": "Passionate software engineer specializing in full-stack web development, modern JavaScript frameworks, and innovative digital solutions.",
                        "url": "https://madegwa.pages.dev/",
                        "image": `https://madegwa.pages.dev${profileImage}`,
                        "sameAs": [
                            socialLinks.github,
                            socialLinks.linkedin,
                            socialLinks.twitter,
                            socialLinks.email
                        ],
                        "email": contactInfo.email.seoEmail,
                        "telephone": contactInfo.phone.value,
                        "address": {
                            "@type": "PostalAddress",
                            "addressLocality": contactInfo.location.value.split(',')[0],
                            "addressCountry": contactInfo.location.value.split(',')[1].trim()
                        },
                        "worksFor": {
                            "@type": "Organization",
                            "name": "Freelance"
                        },
                        "knowsAbout": [
                            "JavaScript",
                            "TypeScript",
                            "React",
                            "Spring Boot",
                            "Full-Stack Development",
                            "Web Development",
                            "Software Engineering"
                        ]
                    })}
                </script>

                {/* Structured Data - Website Schema */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebSite",
                        "name": "Oscar Madegwa Portfolio",
                        "url": seoData.url,
                        "description": seoData.description,
                        "author": {
                            "@type": "Person",
                            "name": "Oscar Madegwa"
                        },
                        "inLanguage": "en-US",
                        "potentialAction": {
                            "@type": "SearchAction",
                            "target": "https://madegwa.pages.dev/search?q={search_term_string}",
                            "query-input": "required name=search_term_string"
                        }
                    })}
                </script>

                {/* Structured Data - Breadcrumbs Schema */}
                <script type="application/ld+json">
                    {JSON.stringify(generateBreadcrumbSchema(seoData.breadcrumbs))}
                </script>

                {/* Structured Data - Professional Service Schema */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ProfessionalService",
                        "name": "Oscar Madegwa - Software Development Services",
                        "description": "Professional software development services including full-stack web development, React applications, and modern web solutions.",
                        "provider": {
                            "@type": "Person",
                            "name": "Oscar Madegwa"
                        },
                        "url": "https://madegwa.pages.dev/",
                        "serviceType": "Software Development",
                        "areaServed": "Worldwide",
                        "hasOfferCatalog": {
                            "@type": "OfferCatalog",
                            "name": "Software Development Services",
                            "itemListElement": [
                                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Full-Stack Web Development"}},
                                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "React Application Development"}},
                                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Backend API Development"}}
                            ]
                        }
                    })}
                </script>

                {/* Favicons and app icons */}
                <link rel="icon" type="image/x-icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />

                {/* Font preconnections */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

                {/* DNS prefetch for external links */}
                <link rel="dns-prefetch" href="//github.com" />
                <link rel="dns-prefetch" href="//linkedin.com" />
                <link rel="dns-prefetch" href="//twitter.com" />
            </Helmet>

            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
}

export default BaseLayout;