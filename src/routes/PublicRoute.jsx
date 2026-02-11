import { Navigate } from 'react-router-dom'
import { isMagicWordValid } from '../utils/magicWord'

const PublicRoute = ({ children }) => {
    if (isMagicWordValid()) {
        return <Navigate to="/" replace />
    }

    return children
}

export default PublicRoute
