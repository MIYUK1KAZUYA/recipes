import { createSlice } from "@reduxjs/toolkit";

type Action = {
    type: string,
    payload: boolean
};

type State = boolean

const initialState = false

export const isLoadingSlice = createSlice({
    name: 'isLoading',
    initialState,
    reducers: {
        toggleLoading: (state: State, action: Action) => {
            return action.payload;
        }
    }
});

export const { toggleLoading } = isLoadingSlice.actions;

export default isLoadingSlice.reducer;
