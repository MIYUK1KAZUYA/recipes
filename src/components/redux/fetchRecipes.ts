import { AppDispatch } from "./store";
import { addRecipes } from "./recipesSlice";
import { toggleLoading } from "./isLoadingSlice";

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9453a4d551mshc10291d5dac3716p13e1e1jsnf64948b9f0df',
		'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
	}
};

//thunk action creator
export const fetchRecipes = (tag: string) => {
    return async (dispatch: AppDispatch) => {
        dispatch(toggleLoading(true));
        try {
            const response = await fetch(`https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&q=${tag}`, options);
            if (response.status !== 200) {
                throw new Error('Error fetching recipes!')
            };
            const { results } = await response.json();
            dispatch(addRecipes(results));
            dispatch(toggleLoading(false));
        } catch (err) {
            console.log(err);
            dispatch(toggleLoading(false));
        };
    }
};
