export const isMagicWordValid = () => {
    const found = localStorage.getItem('magicWordFound') === 'true'
    const expiresAt = localStorage.getItem('magicWordExpiresAt')

    if (!found || !expiresAt) return false

    if (Date.now() > Number(expiresAt)) {
        // Expiré → nettoyage
        localStorage.removeItem('magicWordFound')
        localStorage.removeItem('magicWordExpiresAt')
        return false
    }

    return true
}
