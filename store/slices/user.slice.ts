import { get_cookie } from '@/utils/functions';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';


// Define a type for the slice state
interface userState {
    user: object,
    token: string ,
}

// Define the initial state using that type
const initialState: userState = {
    user: {},
    token: "",
}

// create a slice 
const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        setUser: (state, action: PayloadAction<object>) => {
            state.user = action.payload;
        },
        setToken: (state, action: PayloadAction<string | any>) => {
            state.token = action.payload;
        },
    }
})
export const { setUser, setToken } = userSlice.actions;
export default userSlice.reducer;