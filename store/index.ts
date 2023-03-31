import { configureStore, combineReducers } from '@reduxjs/toolkit'
import thunk from "redux-thunk";
import config from "../config"
import userSlice from './slices/user.slice';


const rootReducer = combineReducers({
    user: userSlice
})

const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk],
    devTools: config.ENVIROMENT === "dev",
})

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch




