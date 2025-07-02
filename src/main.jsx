import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import BaseLayout from './BaseLayout.jsx'
import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom"

// Import page components
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'
import Blogs from './pages/Blogs.jsx'
import Resume from "./components/Resume.jsx";
import ContactMe from "./pages/ContactMe.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <BaseLayout/>,
        children: [
            {
                index: true, // This makes it the default route for "/"
                element: <Home />
            },
            {
                path: "projects",
                element: <Projects />
            },
            {
                path: "blogs",
                element: <Blogs />
            },
            {
                path: "resume",
                element: <Resume />
            },
            {
                path: "contact",
                element: <ContactMe />
            },
            {
                path: '*',
                element: <Navigate to='/' replace={true} />
            }
        ]
    }
])

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router}/>
    </StrictMode>,
)