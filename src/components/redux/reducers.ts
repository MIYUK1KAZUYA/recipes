import { RecipeArray, ADD_RECIPES, ADD_FAVORITE, REMOVE_FAVORITE, IS_LOADING, SEARCH_INPUT } from "./actions";

export type State = {
    recipeList: RecipeArray[];
    isLoading: boolean | null;
    favoriteRecipes: RecipeArray[];
    searchBarValue: string;
};

const initialState: State = {
    recipeList: [],
    isLoading: null,
    favoriteRecipes: localStorage.getItem("favorites") !== null 
        ? JSON.parse(localStorage.getItem("favorites") || "") 
        : [],
        searchBarValue: "",
};

type Action = {
    type: string;
    payload: any;
};

export const reducer = function(state = initialState, action: Action) : State {
    switch(action.type) {
        case ADD_RECIPES:
            return {
                ...state,
                recipeList: action.payload,
            };
        case ADD_FAVORITE:
            return  {
                ...state,
                favoriteRecipes: [...state.favoriteRecipes, action.payload],
            };
        case REMOVE_FAVORITE:
            return {
                ...state,
                favoriteRecipes: state.favoriteRecipes.filter((recipe) => recipe.id !== action.payload.id)
            };
        case IS_LOADING:
            return {
                ...state,
                isLoading: action.payload,
            };
        case SEARCH_INPUT:
            return {
                ...state,
                searchBarValue: action.payload,
            };
        default:
            return state;
    };
};
