import modalSlice from "./slices/modal";
import inputTypeSlice from "./slices/input-type";
import { configureStore } from "@reduxjs/toolkit";
import astSlice from "./slices/ast";

const store = configureStore({
    reducer: {
        inputTypeSlice,
        modalSlice,
        astSlice,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;