import { Descendant } from "slate";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ChildType, CustomElement, DataState, SectionSizes } from "@/utils/types";

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
        setEditorContent: (state, action: PayloadAction<ChildType[]>) => {
            state.children = action.payload
        },
        setIsActive: (state, action: PayloadAction<boolean>) => {
            state.isActive = action.payload
        },
        setLayout: (state, action: PayloadAction<SectionSizes>) => {
            state.layout = action.payload
        },
        updateEditorContent: (state, action: PayloadAction<{ index: number, content: CustomElement[] }>) => {
            const { index, content } = action.payload;

            if (state.children[index]) {
                state.children[index].children = content;
            }
        },
        setMediaContent: (state, action: PayloadAction<{
            index: number,
            src: string,
            alt: string,
            type: "image" | "video"
        }>) => {
            const { index, src, alt, type } = action.payload;

            if (state.children[index]) {
                state.children[index].children.push({ type, props: {}, children: [{ text: alt, src }] });
            }
        }
    }
})

export const {
    setName,
    setDescription,
    setEditorContent,
    setIsActive,
    setLayout,
    updateEditorContent,
    setMediaContent
} = dataSlice.actions;

export default dataSlice.reducer;

