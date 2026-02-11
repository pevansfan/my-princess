import React from 'react'
import PageComponent from '../../components/PageComponent/PageComponent'
import './Notes.css'

const notes = [
    "Je t’aime plus que les mots ne peuvent le dire 🤍",
    "N’oublie jamais à quel point tu es précieuse.",
    "Prends soin de toi, même les jours où c’est difficile.",
    "Tu es plus forte que tu ne le penses.",
    "Je suis fier de toi, toujours.",
    "Tu mérites l’amour, la douceur et la paix.",
    "Repose-toi quand ton cœur en a besoin 🌙",
    "Je penserai toujours à toi, peu importe la distance.",
    "Ton sourire illumine mes journées ✨",
    "Chaque jour avec toi est un cadeau.",
    "Tu es capable de réaliser tout ce que tu désires.",
    "Merci d’être toi, simplement merveilleuse 💕",
    "Je suis là pour toi, dans les bons comme dans les mauvais moments.",
    "N’oublie jamais ta valeur, elle est inestimable.",
    "Je t’envoie tout mon amour et mon soutien, toujours."
]

const Notes = () => {
    return (
        <PageComponent className="notes-page" title="Petites notes pour toi 💕">
            <div className="notes-container">
                {notes.map((note, index) => (
                    <div key={index} className="note-card">
                        <p>{note}</p>
                    </div>
                ))}
            </div>
        </PageComponent>
    )
}

export default Notes