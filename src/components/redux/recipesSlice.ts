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
            const newRecipes: RecipeArray[] = [];
            action.payload.forEach((recipe) => {
                if (recipe.recipes) {
                    newRecipes.push(recipe.recipes[0])
                } else {
                    newRecipes.push(recipe)
                }
            });
            return newRecipes;
        }
    }
});

export const { addRecipes } = recipesSlice.actions;

export default recipesSlice.reducer;
