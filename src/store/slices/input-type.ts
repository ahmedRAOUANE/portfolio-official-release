import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type InputType = "text" | "file" | "component";

interface StateType {
    inputType: InputType[]
}

const initialState: StateType = {
    inputType: ["text"]
}
const inputTypeSlice = createSlice({
    name: "inputType",
    initialState,
    reducers: {
        setInputType: (state, action) => {
            state.inputType = action.payload;
        },
        updateInputType: (state, action: PayloadAction<{ index: number, type: InputType }>) => {
            const { index, type } = action.payload;

            if (state.inputType[index]) {
                state.inputType[index] = type;
            }
        },
        addInputType: (state, action: PayloadAction<InputType>) => {
            state.inputType.push(action.payload);
        }
    }
})

export const { setInputType, updateInputType, addInputType } = inputTypeSlice.actions;
export default inputTypeSlice.reducer;

