import { configureStore, combineReducers } from '@reduxjs/toolkit'
import thunk from "redux-thunk";
import { userSlice } from "./slices"


const rootReducer = combineReducers({
    user: userSlice
})

const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk],
    devTools: true,
})

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch




