import { createSlice } from "@reduxjs/toolkit";
import { RecipeArray } from "./store";

type Action = {
    type: string;
    payload: RecipeArray
};

const initialState: RecipeArray[] = localStorage.getItem("favoriteRecipes") !== null
    ? JSON.parse(localStorage.getItem("favoriteRecipes") || "")
    : [];

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addFavorite: (state: RecipeArray[], action: Action) => {
            state.push(action.payload);
        },
        removeFavorite: (state: RecipeArray[], action: Action) => {
            const newFavorites = state.filter((recipe) => recipe.id !== action.payload.id);   
            return newFavorites;
        }
    }
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;
