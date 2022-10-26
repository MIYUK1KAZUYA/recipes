import { createSlice } from "@reduxjs/toolkit";

type Action = {
    type: string,
    payload: string
};

type State = string;

const initialState = "";

const searchInputSlice = createSlice({
    name: 'searchInput',
    initialState,
    reducers: {
        addSearchInput: (state: State, action: Action) => {
            return action.payload;
        }
    }
});

export const { addSearchInput } = searchInputSlice.actions;

export default searchInputSlice.reducer;
