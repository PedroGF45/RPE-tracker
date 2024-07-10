import { configureStore } from "@reduxjs/toolkit"
import navReducer from './reducers/navReducer';
import authReducer from "./reducers/authReducer";
import headerReducer from "./reducers/headerReducer";

// Create a store with the navReducer
const store = configureStore({
    reducer: {
        navReducer,
        authReducer,
        headerReducer
    },
});

export default store;