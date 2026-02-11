import React, { useEffect, useRef, useState } from 'react'
import Popup from '../../components/Popup/Popup'
import { useNavigate } from 'react-router-dom'
import './Login.css'

const Login = () => {
    const navigate = useNavigate()
    const [password, setPassword] = useState('')
    const [showPopup, setShowPopup] = useState(false)
    const bgRef = useRef(null)
    const [attempts, setAttempts] = useState(
        Number(localStorage.getItem('magicWordAttempts')) || 0
    )

    useEffect(() => {
        localStorage.removeItem('magicWordAttempts')
        setAttempts(0)
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()

        if (password === 'princesse') {
            const DELAY = 24 * 60 * 60 * 1000 // 24 hours
            const expiresAt = Date.now() + DELAY

            localStorage.setItem('magicWordFound', 'true')
            localStorage.setItem('magicWordExpiresAt', expiresAt.toString())

            localStorage.removeItem('magicWordAttempts')
            setAttempts(0)
            navigate('/intro')
        } else {
            const newAttempts = attempts + 1
            setAttempts(newAttempts)
            localStorage.setItem('magicWordAttempts', newAttempts.toString())

            setShowPopup(true)
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
            const bg = bgRef.current
            if (!bg) return

            const r_num = Math.floor(Math.random() * 40) + 1
            const r_size = Math.floor(Math.random() * 65) + 10
            const r_left = Math.floor(Math.random() * 100) + 1
            const r_bg = Math.floor(Math.random() * 25) + 100
            const r_time = Math.floor(Math.random() * 5) + 5

            const heart1 = document.createElement('div')
            heart1.className = 'heart'
            heart1.style.width = `${r_size}px`
            heart1.style.height = `${r_size}px`
            heart1.style.left = `${r_left}%`
            heart1.style.background = `rgba(255,${r_bg - 25},${r_bg},1)`
            heart1.style.animation = `love ${r_time}s ease`

            const heart2 = document.createElement('div')
            heart2.className = 'heart'
            heart2.style.width = `${r_size - 10}px`
            heart2.style.height = `${r_size - 10}px`
            heart2.style.left = `${r_left + r_num}%`
            heart2.style.background = `rgba(255,${r_bg - 25},${r_bg + 25},1)`
            heart2.style.animation = `love ${r_time + 5}s ease`

            bg.appendChild(heart1)
            bg.appendChild(heart2)

            const hearts = bg.querySelectorAll('.heart')
            hearts.forEach((heart) => {
                const top = parseInt(getComputedStyle(heart).top)
                const width = parseInt(getComputedStyle(heart).width)
                if (top <= -100 || width >= 150) {
                    heart.remove()
                }
            })
        }, 500)

        return () => clearInterval(interval)
    }, [])

    return (
        <div className="Login">
            <div className="bg_heart" ref={bgRef}></div>

            <form className="form-container" onSubmit={handleSubmit}>
                <h2>Entre le mot magique 😌</h2>

                <input
                    type="password"
                    placeholder="Mot magique"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button type="submit" className='button-submit'>Laisse-moi entrer</button>

                <Popup
                    isOpen={showPopup}
                    message="Mauvais mot magique. Réessaie !"
                    showHint={attempts >= 3}
                    onClose={() => setShowPopup(false)}
                />

            </form>
        </div>
    )
}

export default Login
