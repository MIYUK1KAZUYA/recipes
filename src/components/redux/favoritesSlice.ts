import { createSlice } from "@reduxjs/toolkit";
import { RecipeArray } from "./store";

type Action = {
    type: string;
    payload: RecipeArray
};

type State = RecipeArray[];

const initialState: RecipeArray[] = [];

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addFavorite: (state: State, action: Action) => {
            state.push(action.payload);
        },
        removeFavorite: (state: State, action: Action) => {
            const newFavorites = state.filter((recipe) => recipe.id !== action.payload.id);   
            return newFavorites;
        }
    }
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;
