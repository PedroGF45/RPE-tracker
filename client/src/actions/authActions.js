// action to request authentication
const authRequest = () => {
    return {
        type: 'AUTH_REQUEST'
    }
}

// action for successful authentication
const authSuccess = (data) => {
    return {
        type: 'AUTH_SUCCESS',
        payload: data // set user and token
    }
}

// action for authentication error
const authError = (error) => {
    return {
        type: 'AUTH_ERROR',
        payload: error // set error
    }
}

// action to logout
const logout = () => {
    return {
        type: 'LOGOUT'
    }
}

export {
    authRequest,
    authSuccess,
    authError,
    logout
}