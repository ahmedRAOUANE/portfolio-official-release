import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const modalSlice = createSlice({
    name: "modal",
    initialState: {
        isOpen: false,
        window: "success",
    },
    reducers: {
        openModal: (state, action: PayloadAction<string>) => {
            state.isOpen = true;
            state.window = action.payload
        },
        closeModal: (state) => {
            state.isOpen = false;
            state.window = "";
        }
    }
})

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;

