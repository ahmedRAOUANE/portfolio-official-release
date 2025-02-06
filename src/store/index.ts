import dataSlice from "./slices/data";
import modalSlice from "./slices/modal";
import inputTypeSlice from "./slices/input-type";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        dataSlice,
        inputTypeSlice,
        modalSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;