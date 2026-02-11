import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { RxCross1 } from "react-icons/rx";
import "./Nav.css";
// import Button from "../../layouts/Button/Button";

const menuVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1, // délai entre chaque li
        }
    },
};

const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
};


export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    // const navigate = useNavigate();
    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="navbar">
            <div className="navbar-container">
                {/* Logo */}
                <div className="logo">
                    <a href={process.env.PUBLIC_URL + '/'}>
                        <img src='/logo-princess.png' alt="Logo" />
                    </a>
                </div>
                <div className="navbar-buttons">
                    {/* <Button type="text" className="button-contact" onClick={() => navigate('/contact')}>
                        Contactez-moi
                    </Button> */}
                    {/* Bouton hamburger */}
                    <button className="menu-toggle" onClick={toggleMenu}>
                        <AnimatePresence mode="wait" initial={false}>
                            {isOpen ? (
                                <motion.div
                                    key="cross"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    transition={{ duration: 0.2, ease: "easeInOut" }}
                                >
                                    <RxCross1 size={30} />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="menu"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    transition={{ duration: 0.2, ease: "easeInOut" }}
                                >
                                    <HiOutlineMenuAlt3 size={30} />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </button>
                </div>


            </div>

            {/* Menu déroulant avec fade-in */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Fond noir flou derrière le menu */}
                        <motion.div
                            className="menu-overlay"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            onClick={toggleMenu} // ferme le menu si on clique dehors
                        />
                        <motion.div
                            className="menu"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                        >

                            <motion.ul
                                className="menu-list"
                                variants={menuVariants}
                                initial="hidden"
                                animate="visible"
                            >
                                <motion.li variants={itemVariants}><NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''} onClick={toggleMenu}>Love Zone</NavLink></motion.li>
                                <motion.li variants={itemVariants}><NavLink to="/music" className={({ isActive }) => isActive ? 'active' : ''} onClick={toggleMenu}>Music</NavLink></motion.li>
                                <motion.li variants={itemVariants}><NavLink to="/gallery" className={({ isActive }) => isActive ? 'active' : ''} onClick={toggleMenu}>Gallery</NavLink></motion.li>
                                <motion.li variants={itemVariants}><NavLink to="/notes" className={({ isActive }) => isActive ? 'active' : ''} onClick={toggleMenu}>Notes</NavLink></motion.li>
                            </motion.ul>
                        </motion.div>
                    </>

                )}
            </AnimatePresence>
        </nav>
    );
}
