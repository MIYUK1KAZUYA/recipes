import { createSlice } from "@reduxjs/toolkit";
import { RecipeArray } from "./store";

type Action = {
    type: string,
    payload: RecipeArray[]
};

const initialState: RecipeArray[] = [];

export const recipesSlice = createSlice({
    name: 'recipes',
    initialState,
    reducers: {
        addRecipes: (state, action: Action) => {
            return action.payload;
        }
    }
});

export const { addRecipes } = recipesSlice.actions;

export default recipesSlice.reducer;
