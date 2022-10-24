import { Dispatch } from "redux";
import { State } from "./reducers";

//Shows mismatch error
export const ADD_RECIPES = 'ADD_RECIPES';
export const ADD_FAVORITE = 'ADD_FAVORITE';
export const IS_LOADING = 'IS_LOADING';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';
export const SEARCH_INPUT = 'SEARCH_INPUT';

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

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9453a4d551mshc10291d5dac3716p13e1e1jsnf64948b9f0df',
		'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
	}
};

export const addRecipes = function(recipes: RecipeArray[]) {
    return {
        type: ADD_RECIPES,
        payload: recipes
    };
};

export const addFavorite = function(recipe: RecipeArray) {
    return {
        type: ADD_FAVORITE,
        payload: recipe
    };
};

export const isLoading = function(bool: boolean) {
    return {
        type: IS_LOADING,
        payload: bool
    };
};

export const removeFavorite = function(recipe: RecipeArray) {
    return {
        type: REMOVE_FAVORITE,
        payload: recipe
    };
};

export const searchInput = function(value: string) {
    return {
        type: SEARCH_INPUT,
        payload: value
    };
};

export const fetchRecipes = function(tag: string) {
    return async function (dispatch: Dispatch, getState: () => State) {
        dispatch(isLoading(true));
        try {
            const response = await fetch(`https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&q=${tag}`, options);
            if (response.status !== 200) {
                throw new Error('Error fetching recipes!')
            };
            const { results } = await response.json();
            dispatch(addRecipes(results));
            dispatch(isLoading(false));
        } catch (err) {
            console.log(err);
            dispatch(isLoading(false));
        };
    };
};