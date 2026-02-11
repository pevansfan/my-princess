import { useNavigate } from 'react-router-dom'
import { RxCross1 } from "react-icons/rx"
import LoveLetter from '../../assets/pdf/love-letter.pdf'
import './LoveLetter.css'

const LoveLetterPage = () => {
    const navigate = useNavigate()

    return (
        <div className="letter-page">
            <button
                className="close-btn"
                onClick={() => navigate(-1)}
            >
                <RxCross1 size={30} />
            </button>

            <iframe
                src={LoveLetter}
                title="Love Letter"
                width="100%"
                height="100%"
            />
        </div>
    )
}

export default LoveLetterPage