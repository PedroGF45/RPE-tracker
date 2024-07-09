import { configureStore } from "@reduxjs/toolkit"
import navReducer from './reducers/navReducer';
import authReducer from "./reducers/authReducer";

// Create a store with the navReducer
const store = configureStore({
    reducer: {
        navReducer,
        authReducer
    },
});

export default store;