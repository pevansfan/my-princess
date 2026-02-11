import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import './LoveIntro.css'

const LoveIntro = () => {
    const navigate = useNavigate()
    const [phase, setPhase] = useState('intro')
    // intro → pause → welcome → end

    useEffect(() => {
        const introTimer = setTimeout(() => setPhase('pause'), 3000)
        const pauseTimer = setTimeout(() => setPhase('welcome'), 3800)
        const endTimer = setTimeout(() => setPhase('end'), 7800)

        return () => {
            clearTimeout(introTimer)
            clearTimeout(pauseTimer)
            clearTimeout(endTimer)
        }
    }, [])

    return (
        <AnimatePresence
            mode="wait"
            onExitComplete={() => {
                if (phase === 'end') {
                    navigate('/')
                }
            }}
        >
            {/* Intro */}
            {phase === 'intro' && (
                <motion.div
                    key="intro"
                    className="back center love-intro-container"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="heart" />
                    </motion.div>
                </motion.div>
            )}

            {/* Pause */}
            {phase === 'pause' && (
                <motion.div
                    key="pause"
                    className="back"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0 }}
                    exit={{ opacity: 0 }}
                />
            )}

            {/* Texte (UNE SEULE FOIS) */}
            {phase === 'welcome' && (
                <motion.div
                    key="welcome"
                    className="welcome-container"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                >
                    <motion.h1
                        className="welcome-text"
                        initial={{ opacity: 0, scale: 0.6 }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            textShadow: [
                                "0px 0px 0px rgba(255,105,180,0)",
                                "0px 0px 20px rgba(255,105,180,0.8)",
                                "0px 0px 40px rgba(255,105,180,1)"
                            ]
                        }}
                        exit={{
                            opacity: 0,
                            scale: 0.6,
                            transition: { duration: 1.5, ease: "easeInOut" }
                        }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                    >
                        Bienvenue mon amour 💖
                    </motion.h1>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default LoveIntro