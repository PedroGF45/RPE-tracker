// Action to change the selected nav item
const setSelectedNav = (path) => {
    return {
        type: 'CHANGE_NAV',
        payload: path // set path
    }
}

export default setSelectedNav;