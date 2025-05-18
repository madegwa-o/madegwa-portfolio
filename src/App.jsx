import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Helmet } from "react-helmet";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import profileImage from "./assets/mimi.jpeg";

// Additional components for routes
import Home from './pages/Home.jsx';
import Projects from './pages/Projects.jsx';
import Blogs from './pages/Blogs.jsx';
import Skills from './pages/Skills.jsx';

function App() {
    return (
        <>
            <Helmet>
                <title>Oscar Madegwa - Software Engineer Portfolio</title>
                <meta
                    name="description"
                    content="Explore the portfolio of Oscar Madegwa, a passionate software engineer specializing in full-stack web development. Discover projects, blogs, skills, and insights into modern development practices."
                />
                <meta
                    name="keywords"
                    content="Oscar, Madegwa,Oscar Madegwa, software engineer, full-stack developer, web development, React, Spring Boot, blogs, projects, programming, portfolio"
                />
                <meta name="author" content="Oscar Madegwa" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta property="og:title" content="Oscar Madegwa - Software Engineer Portfolio" />
                <meta
                    property="og:description"
                    content="Welcome to my professional portfolio showcasing innovative projects, blogs, and technical expertise in full-stack development. Let's build the future together."
                />
                <meta property="og:image" content={String(profileImage)}/>
                <meta property="og:url" content="https://madegwa-o.onrender.com/" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Oscar Madegwa - Software Engineer Portfolio" />
                <meta
                    name="twitter:description"
                    content="Discover the work of Oscar Madegwa, a professional software engineer with expertise in modern web development."
                />
                <meta property="og:image" content={String(profileImage)}/>
            </Helmet>

            <Router>
            <>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/blogs" element={<Blogs />} />
                        <Route path="/skills" element={<Skills />} />
                    </Routes>
                    <Footer />
                </>
            </Router>
        </>

    );
}

export default App;
