import styles from "./Blogs.module.css";

const Blogs = () => {
    const blogs = [
        {
            date: "Dec 9, 2024",
            title: "Real Developers Write Code, Not Prompts",
            link: "https://medium.com/@madegwaoscar317/real-developers-write-code-not-prompts-123456",
        },
        {
            date: "Dec 9, 2024",
            title: "Learn to Code, Not to Google",
            link: "https://medium.com/@madegwaoscar317/learn-to-code-not-to-google-123456",
        },
        {
            date: "Oct 28, 2024",
            title: "Mastering User Authentication with Access and Refresh Tokens in Spring Boot and React",
            link: "https://medium.com/@madegwaoscar317/mastering-user-authentication-with-access-and-refresh-tokens-123456",
        },
    ];

    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>All Posts</h1>
            <div className={styles.blogs}>
                {blogs.map((blog, index) => (
                    <div key={index} className={styles.blogCard}>
                        <p className={styles.date}>{blog.date}</p>
                        <h2 className={styles.title}>{blog.title}</h2>
                        <a
                            href={blog.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.learnMoreButton}
                        >
                            Read More
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blogs;
