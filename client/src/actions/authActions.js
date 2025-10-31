// action to request authentication
const authRequest = () => {
    return {
        type: 'AUTH_REQUEST'
    }
}

// action for successful authentication
const authSuccess = (userToken) => {
    return {
        type: 'AUTH_SUCCESS',
        payload: userToken // set token
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

// action to update role
const updateRole = (role) => {
    return {
        type: 'UPDATE_ROLE',
        payload: role
    }
}

export {
    authRequest,
    authSuccess,
    authError,
    logout
}