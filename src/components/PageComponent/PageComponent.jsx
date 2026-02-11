import React from 'react'
// import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from '../Nav/Nav'

import './PageComponent.css'

const PageComponent = ({ children, className, title }) => {
    return (
        <div className="page-component">
            {/* <nav className="nav-bar">
                <h1>For my Baby 💖</h1>
                <p>A special place just for you</p>

                <div className="nav-links">
                    <NavLink
                        to="/"
                        end
                        className={({ isActive }) => isActive ? 'active' : ''}
                    >
                        Love Zone
                    </NavLink>



                    <NavLink
                        to="/music"
                        className={({ isActive }) => isActive ? 'active' : ''}
                    >
                        Music
                    </NavLink>



                    <NavLink
                        to="/gallery"
                        className={({ isActive }) => isActive ? 'active' : ''}
                    >
                        Gallery
                    </NavLink>



                    <NavLink
                        to="/notes"
                        className={({ isActive }) => isActive ? 'active' : ''}
                    >
                        Notes
                    </NavLink>

                </div>
            </nav> */}
            <Navbar />
            
            <motion.div 
                className={`page-content ${className}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className='title'>{title}</h1>
                {children}
            </motion.div>
        </div>

    )
}

export default PageComponent