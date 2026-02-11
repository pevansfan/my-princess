import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoveIntro from './components/LoveIntro/LoveIntro'
import Login from './pages/Login/Login.jsx'
import ProtectedRoute from './routes/ProtectedRoute'
import Home from './pages/Home/Home.jsx'
import Music from './pages/Music/Music.jsx'
import Gallery from './pages/Gallery/Gallery.jsx'
import Notes from './pages/Notes/Notes.jsx'
import LoveLetterPage from './pages/LoveLetter/LoveLetter.jsx'
import './App.css'
import PublicRoute from './routes/PublicRoute.jsx'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
                <Route path="/music" element={<ProtectedRoute><Music /></ProtectedRoute>} />
                <Route path="/gallery" element={<ProtectedRoute><Gallery /></ProtectedRoute>} />
                <Route path="/notes" element={<ProtectedRoute><Notes /></ProtectedRoute>} />
                <Route
                    path="/login"
                    element={
                        <PublicRoute>
                            <Login />
                        </PublicRoute>
                    }
                />

                <Route path="/love-letter" element={<LoveLetterPage />} />

                <Route
                    path="/intro"
                    element={
                        <ProtectedRoute>
                            <LoveIntro />
                        </ProtectedRoute>
                    }
                />

                {/* Redirection par défaut */}
                <Route path="*" element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
