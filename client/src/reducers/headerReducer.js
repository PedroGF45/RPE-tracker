// set initial state
const initialState = {
    expandedHeader: false
}

// Reducer to change the header state
const headerReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_HEADER':
            return {
                ...state,
                expandedHeader: !state.expandedHeader
            }
        default:
            return state;
    }
}

export default headerReducer;