//set initial state
const initialState = {
    isLoading: false,
    isAuthenticated: false,
    user: {},
    userToken: null,
    error: null
}

// Reducer to change the authentication state
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'AUTH_REQUEST':
            return {
                ...state,
                isLoading: true
            }
        case 'AUTH_SUCCESS':
            return {
                ...state,
                isLoading: false,
                isAuthenticated: true,
                user: action.payload.user,
                userToken: action.payload.token,
                error: null
            }
        case 'AUTH_ERROR':
            return {
                ...state,
                isLoading: false,
                isAuthenticated: false,
                user: {},
                userToken: null,
                error: action.payload
            }
        case 'LOGOUT':
            return {
                ...state,
                isLoading: false,
                isAuthenticated: false,
                user: {},
                userToken: null,
                error: null
            }
        default:
            return state;
    }
}

export default authReducer;