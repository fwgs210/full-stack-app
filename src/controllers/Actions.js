export const finishLoading = () => ({
    type: 'SET_LOADED_TRUE'
})

export const startLoading = () => ({
    type: 'SET_LOADED_FALSE'
})

export const setError = errorMessage => ({
    type: 'SET_ERROR',
    errorMessage
})

export const clearError = () => ({
    type: 'CLEAR_ERROR'
})

export const login = userData => ({
    type: 'USER_LOGIN',
    userData
})

export const clearInput = () => ({
    type: 'CLEAR_USER_INPUT'
})