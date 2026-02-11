import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Popup.css'

const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
}

const popupVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
        scale: 1,
        opacity: 1,
        transition: { duration: 0.3, ease: 'easeOut' }
    },
    exit: {
        scale: 0.8,
        opacity: 0,
        transition: { duration: 0.2 }
    }
}

const Popup = ({ isOpen, message, onClose, showHint }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="popup-overlay"
                    variants={backdropVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    onClick={onClose}
                >
                    <motion.div
                        className="popup"
                        variants={popupVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h3>Oups 💔</h3>

                        <p>{message}</p>

                        {showHint && (
                            <p className="popup-hint">
                                Indice 💡 : c’est le mot que j'utilise pour t'appeler 👑
                            </p>
                        )}

                        <button
                            type="button"
                            onClick={onClose}
                        >
                            Réessayer
                        </button>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default Popup
