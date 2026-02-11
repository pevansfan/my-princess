import { useNavigate } from 'react-router-dom'
import PageComponent from '../../components/PageComponent/PageComponent.jsx'
import './Home.css'

const Home = () => {
    const navigate = useNavigate()

    return (
        <PageComponent className="home-page">
            <div className="presentation">
                <h1>Bienvenue dans ton espace spécial !</h1>
                <p>
                    Cet endroit est dédié à toi, mon amour !! Ici, tu trouveras des
                    souvenirs, des musiques qui me font penser à toi, et des petites
                    notes d'amour que j'ai écrites spécialement pour toi.
                
                </p>

                <button
                    className="button-open-letter"
                    onClick={() => navigate('/love-letter')}
                >
                    Ouvrir ma lettre d'amour 💌
                </button>
            </div>
        </PageComponent>
    )
}

export default Home