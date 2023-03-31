import { configureStore, combineReducers } from '@reduxjs/toolkit'
import thunk from "redux-thunk";
import config from "../config"
import userSlice from './slices/user.slice';
import bookSlice from './slices/book.slice';


const rootReducer = combineReducers({
    user: userSlice,
    books : bookSlice
})

const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk],
    devTools: config.ENVIROMENT === "dev",
})

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch




