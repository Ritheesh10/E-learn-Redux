import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    email:""
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.email = action.payload;
        }
    }
})

export default userSlice.reducer;
export const { setUser }=userSlice.actions;