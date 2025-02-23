import { CustomElement, SectionSizes } from "@/utils/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: CustomElement = {
    type: "section",
    props: {
        name: "",
        className: "",
        isActive: true,
        description: "",
        layout: SectionSizes.full,
        metadata: {
            createdAt: Date.now().toString(),
            updatedAt: Date.now().toString(),
        }
    },
    children: [],
}

export const astSlice = createSlice({
    name: 'ast',
    initialState,
    reducers: {
        setName: (state, action: PayloadAction<string>) => {
            state.props!.name = action.payload
        },
        setDescription: (state, action: PayloadAction<string>) => {
            state.props!.description = action.payload
        },
        setIsActive: (state, action: PayloadAction<boolean>) => {
            state.props!.isActive = action.payload
        },
        setLayout: (state, action: PayloadAction<SectionSizes>) => {
            state.props!.layout = action.payload
        },
        addChild: (state, action: PayloadAction<CustomElement>) => {
            state.children?.push(action.payload)
        },
        updateChild: (state, action: PayloadAction<{ index: number, content: CustomElement }>) => {
            const { index, content } = action.payload;

            if (state.children && state.children[index]) {
                state.children[index] = content;
            }
        }
    }
})

export const { setName, setDescription, setIsActive, setLayout, addChild, updateChild } = astSlice.actions; 

export default astSlice.reducer;