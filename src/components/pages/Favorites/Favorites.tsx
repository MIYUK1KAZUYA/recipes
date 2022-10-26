import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { State, RecipeArray } from "../../redux/store";
import { removeFavorite } from "../../redux/favoritesSlice";
import Signature from "../../signature/Signature";
import './Favorites.css';

const Favorites = function() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    //store initiates with favorites from localStorage
    const favorites: RecipeArray[] = useSelector((state: State) => state.favorites);

    //if user clicks on recipe to remove as favorite
    const removeFavoriteRecipe = function(recipe: RecipeArray): void {
        dispatch(removeFavorite(recipe));
    };

    const naviHandle = function(recipe: RecipeArray): void {
        navigate(`/recipe/${recipe.id}`)
    };

    return (
        <div className="favorites">
            <Signature />
            <h1>Your favorite recipes</h1>
            <div className="favorites-container">
                {!favorites.length 
                ? <h2>No favorite recipes found!</h2> 
                : favorites.map((fav, index) => {
                    return (
                        <div className="favorite-recipe" key={index}>
                            <img src={fav.thumbnail_url} alt="recipe-card" />
                            <p onClick={() => naviHandle(fav)}>{fav.name}</p>
                            <button onClick={() => removeFavoriteRecipe(fav)}>Unfavorite</button>
                        </div>
                    );
                })
                }
            </div>
        </div>
    );
};

export default Favorites;
