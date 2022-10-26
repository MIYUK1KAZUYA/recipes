import { useSelector, useDispatch } from "react-redux";
import { State, RecipeArray } from "../../redux/store";
import { removeFavorite } from "../../redux/favoritesSlice";

const Favorites = function() {
    const dispatch = useDispatch();
    //store initiates with favorites from localStorage
    const { favorites }: State = useSelector((state: State) => state);

    //if user clicks on recipe to remove as favorite
    const removeFavoriteRecipe = function(recipe: RecipeArray): void {
        dispatch(removeFavorite(recipe));
    };

    return (
        <div>
            {!favorites.length 
            ? <p>No favorite recipes found!</p> 
            : favorites.map(fav => <p onClick={() => removeFavoriteRecipe}>{fav.name}</p>)}
        </div>
    );
};

export default Favorites;
