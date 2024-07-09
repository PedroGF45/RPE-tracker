// set initial state
const initialState = {
    selectedNav: "dashboard"
}

// Reducer to change the selected nav item
const navReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_NAV':
        return {
            ...state,
            selectedNav: action.payload // set path to selectedNav
        }
        default:
        return state;
    }
}

export default navReducer;