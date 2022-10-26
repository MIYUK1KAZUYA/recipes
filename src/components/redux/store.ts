import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from './favoritesSlice';
import recipesReducer from './recipesSlice';
import inputReducer from './searchInputSlice';
import isLoadingReducer from './isLoadingSlice';

export type State = {
    recipes: RecipeArray[];
    favorites: RecipeArray[];
    isLoading: boolean;
    searchInput: string;
};

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type RecipeArray = {
    id: number;
    name: string;
    thumbnail_url: string;
    num_servings?: number;
    description: string;
    instructions?: [];
    total_time_minutes?: number;
    credits: {name: string}[];
};

const store = configureStore({
    reducer: {
        recipes: recipesReducer,
        favorites: favoritesReducer,
        isLoading: isLoadingReducer,
        searchInput: inputReducer,
    }
});

export default store;
