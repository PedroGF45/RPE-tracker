import { configureStore } from "@reduxjs/toolkit"
import navReducer from './reducers/navReducer';

// Create a store with the navReducer
const store = configureStore({reducer: navReducer});

export default store;