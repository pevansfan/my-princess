import { Navigate } from 'react-router-dom'
import { isMagicWordValid } from '../utils/magicWord'

const ProtectedRoute = ({ children }) => {
    if (!isMagicWordValid()) {
        return <Navigate to="/login" replace />
    }

    return children
}

export default ProtectedRoute
