import { createSlice } from "@reduxjs/toolkit";

const inputTypeSlice = createSlice({
    name: "inputType",
    initialState: {
        inputType: "text"
    },
    reducers: {
        setInputType: (state, action) => {
            state.inputType = action.payload;
        }
    }
})

export const { setInputType } = inputTypeSlice.actions;
export default inputTypeSlice.reducer;