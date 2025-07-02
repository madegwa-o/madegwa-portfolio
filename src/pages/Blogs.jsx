import React from 'react';
import { ArrowUpRight, Calendar, Clock } from 'lucide-react';

const Blogs = () => {
    const blogs = [
        {
            date: "Oct 28, 2024",
            title: "Mastering User Authentication with Access and Refresh Tokens in Spring Boot and React",
            excerpt: "A comprehensive guide to implementing secure authentication patterns in modern web applications using JWT tokens and refresh mechanisms.",
            link: "https://medium.com/@madegwaoscar317/mastering-user-authentication-with-access-and-refresh-tokens-123456",
            readTime: "8 min read",
            category: "Authentication"
        },
        {
            date: "Dec 9, 2024",
            title: "Real Developers Write Code, Not Prompts",
            excerpt: "Exploring the balance between AI assistance and fundamental programming skills in the modern development landscape.",
            link: "https://medium.com/@madegwaoscar317/real-developers-write-code-not-prompts-123456",
            readTime: "5 min read",
            category: "Development"
        },
        {
            date: "Dec 9, 2024",
            title: "Learn to Code, Don't Vibe Code",
            excerpt: "Why structured learning and understanding fundamentals matters more than following trends in programming education.",
            link: "https://medium.com/@madegwaoscar317/learn-to-code-not-to-google-123456",
            readTime: "6 min read",
            category: "Learning"
        },
    ];

    return (
        <div className="blogs-container">
            {/* Header Section */}
            <div className="blogs-header">
                <div className="container">
                    <h1 className="blogs-title">
                        Latest <span className="text-gradient">Articles</span>
                    </h1>
                    <p className="blogs-subtitle">
                        Thoughts on development, design, and technology
                    </p>
                </div>
            </div>

            {/* Articles Grid */}
            <div className="container">
                <div className="blogs-grid">
                    {blogs.map((blog, index) => (
                        <article
                            key={index}
                            className="blog-card glass hover-glow"
                        >
                            {/* Card Header */}
                            <div className="blog-header">
                                <div className="blog-meta">
                                    <span className="blog-category">{blog.category}</span>
                                    <div className="blog-date">
                                        <Calendar size={14} />
                                        <span>{blog.date}</span>
                                    </div>
                                </div>
                                <div className="blog-read-time">
                                    <Clock size={14} />
                                    <span>{blog.readTime}</span>
                                </div>
                            </div>

                            {/* Card Content */}
                            <div className="blog-content">
                                <h2 className="blog-title">{blog.title}</h2>
                                <p className="blog-excerpt">{blog.excerpt}</p>
                            </div>

                            {/* Card Footer */}
                            <div className="blog-footer">
                                <a
                                    href={blog.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="blog-link"
                                >
                                    <span>Read Article</span>
                                    <ArrowUpRight size={16} />
                                </a>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Load More Section */}
                <div className="load-more-section">
                    <button className="load-more-btn">
                        View All Articles
                    </button>
                </div>
            </div>

            <style jsx>{`
        .blogs-container {
          min-height: 100vh;
          padding: var(--space-20) 0;
          position: relative;
        }

        .blogs-header {
          text-align: center;
          margin-bottom: var(--space-16);
          position: relative;
        }

        .blogs-header::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 200px;
          height: 200px;
          background: radial-gradient(circle, rgba(37, 99, 235, 0.1) 0%, transparent 70%);
          border-radius: 50%;
          z-index: -1;
        }

        .blogs-title {
          font-size: clamp(var(--font-size-4xl), 5vw, var(--font-size-6xl));
          font-weight: var(--font-weight-black);
          letter-spacing: var(--letter-spacing-tight);
          margin-bottom: var(--space-4);
          line-height: var(--line-height-tight);
        }

        .blogs-subtitle {
          font-size: var(--font-size-xl);
          color: var(--color-text-secondary);
          font-weight: var(--font-weight-normal);
          max-width: 600px;
          margin: 0 auto;
          line-height: var(--line-height-relaxed);
        }

        .blogs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
          gap: var(--space-8);
          margin-bottom: var(--space-16);
        }

        @media (max-width: 768px) {
          .blogs-grid {
            grid-template-columns: 1fr;
            gap: var(--space-6);
          }
        }

        .blog-card {
          border-radius: var(--radius-2xl);
          padding: var(--space-8);
          transition: all var(--transition-base);
          position: relative;
          overflow: hidden;
          border: 1px solid var(--color-border-primary);
        }

        .blog-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: var(--gradient-primary);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform var(--transition-base);
        }

        .blog-card:hover::before {
          transform: scaleX(1);
        }

        .blog-card:hover {
          transform: translateY(-8px);
          border-color: var(--color-border-accent);
        }

        .blog-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: var(--space-6);
          flex-wrap: wrap;
          gap: var(--space-3);
        }

        .blog-meta {
          display: flex;
          flex-direction: column;
          gap: var(--space-2);
        }

        .blog-category {
          display: inline-block;
          padding: var(--space-1) var(--space-3);
          background: var(--gradient-primary);
          color: var(--color-text-primary);
          border-radius: var(--radius-full);
          font-size: var(--font-size-xs);
          font-weight: var(--font-weight-semibold);
          text-transform: uppercase;
          letter-spacing: var(--letter-spacing-wide);
        }

        .blog-date {
          display: flex;
          align-items: center;
          gap: var(--space-2);
          color: var(--color-text-muted);
          font-size: var(--font-size-sm);
        }

        .blog-read-time {
          display: flex;
          align-items: center;
          gap: var(--space-2);
          color: var(--color-text-muted);
          font-size: var(--font-size-sm);
        }

        .blog-content {
          margin-bottom: var(--space-8);
        }

        .blog-title {
          font-size: var(--font-size-2xl);
          font-weight: var(--font-weight-bold);
          line-height: var(--line-height-tight);
          margin-bottom: var(--space-4);
          color: var(--color-text-primary);
          transition: color var(--transition-fast);
        }

        .blog-card:hover .blog-title {
          color: var(--color-primary-light);
        }

        .blog-excerpt {
          color: var(--color-text-secondary);
          line-height: var(--line-height-relaxed);
          font-size: var(--font-size-base);
          margin: 0;
        }

        .blog-footer {
          margin-top: auto;
        }

        .blog-link {
          display: inline-flex;
          align-items: center;
          gap: var(--space-2);
          color: var(--color-primary-light);
          font-weight: var(--font-weight-medium);
          font-size: var(--font-size-base);
          text-decoration: none;
          transition: all var(--transition-fast);
          padding: var(--space-2) 0;
        }

        .blog-link:hover {
          color: var(--color-accent);
          transform: translateX(4px);
        }

        .blog-link svg {
          transition: transform var(--transition-fast);
        }

        .blog-link:hover svg {
          transform: translate(2px, -2px);
        }

        .load-more-section {
          text-align: center;
          margin-top: var(--space-12);
        }

        .load-more-btn {
          padding: var(--space-4) var(--space-8);
          background: transparent;
          border: 2px solid var(--color-border-accent);
          border-radius: var(--radius-full);
          color: var(--color-text-primary);
          font-weight: var(--font-weight-medium);
          font-size: var(--font-size-base);
          cursor: pointer;
          transition: all var(--transition-base);
          position: relative;
          overflow: hidden;
        }

        .load-more-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: var(--gradient-primary);
          transition: left var(--transition-base);
          z-index: -1;
        }

        .load-more-btn:hover::before {
          left: 0;
        }

        .load-more-btn:hover {
          border-color: var(--color-primary);
          transform: translateY(-2px);
          box-shadow: var(--shadow-glow);
        }

        @media (max-width: 480px) {
          .blogs-container {
            padding: var(--space-12) 0;
          }
          
          .blog-card {
            padding: var(--space-6);
          }
          
          .blog-header {
            flex-direction: column;
            align-items: flex-start;
            gap: var(--space-3);
          }
          
          .blog-title {
            font-size: var(--font-size-xl);
          }
        }
      `}</style>
        </div>
    );
};

export default Blogs;