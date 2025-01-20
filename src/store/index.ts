import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./slices/data";
import inputTypeSlice from "./slices/input-type";

const store = configureStore({
    reducer: {
        dataSlice,
        inputTypeSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;