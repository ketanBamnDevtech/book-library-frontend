import { get_cookie } from '@/utils/functions';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';


// Define a type for the slice state
interface userState {
    allbooks: object,
    myBooks: object
}

// Define the initial state using that type
const initialState: userState = {
    allbooks: {},
    myBooks: {},
}

// create a slice 
const bookSlice = createSlice({
    name: "books",
    initialState: initialState,
    reducers: {
        setBooks: (state, action: PayloadAction<object>) => {
            state.allbooks = action.payload;
        },
        setMyBooks : (state, action: PayloadAction<object>) => {
            state.myBooks = action.payload;
        }
    }
})
export const { setBooks, setMyBooks } = bookSlice.actions;
export default bookSlice.reducer;