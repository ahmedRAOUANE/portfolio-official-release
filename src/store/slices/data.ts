import { DataState, SectionSizes } from "@/utils/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Descendant } from "slate";

const initialState: DataState = {
    name: "",
    description: "",
    children: [],
    isActive: true,
    layout: SectionSizes.full,
    metadata: {
        createdAt: Date.now().toString(),
        updatedAt: Date.now().toString(),
    }
}

const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        setName: (state, action: PayloadAction<string>) => {
            state.name = action.payload
        },
        setDescription: (state, action: PayloadAction<string>) => {
            state.description = action.payload
        },
        setEditorContent: (state, action: PayloadAction<Descendant[]>) => {
            state.children = action.payload
        },
        setIsActive: (state, action: PayloadAction<boolean>) => {
            state.isActive = action.payload
        },
        setLayout: (state, action: PayloadAction<SectionSizes>) => {
            state.layout = action.payload
        }
    }
})

export const { setName, setDescription, setEditorContent, setIsActive, setLayout } = dataSlice.actions;
export default dataSlice.reducer;

