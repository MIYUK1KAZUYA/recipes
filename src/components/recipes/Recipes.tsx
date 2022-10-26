import { useAppDispatch } from "../redux/hooks";
import { useSelector } from "react-redux";
import { RecipeArray, State } from "../redux/store";
import { addFavorite, removeFavorite } from '../redux/favoritesSlice';
import Card from "../card/Card";

const Recipes = function() {
    const recipes = useSelector((state: State) => state.recipes);
    const favorites = useSelector((state: State) => state.favorites);
    const isLoading = useSelector((state: State) => state.isLoading);
    const dispatch = useAppDispatch();

    const handleFavorite = function(recipe: RecipeArray) : void {
        if (favorites.includes(recipe)) {
            const newFavorites = favorites.filter(fav => fav.id !== recipe.id);
            if (newFavorites.length === 0) {
                localStorage.removeItem("favorites");
            } else {
                localStorage.setItem("favorites", JSON.stringify(newFavorites));
            };
            dispatch(addFavorite(recipe));
        } else {
            const newFavorites = [...favorites, recipe];
            localStorage.setItem("favorites", JSON.stringify(newFavorites));
            dispatch(removeFavorite(recipe));
        };
    };

    return (
        <div>
            {isLoading && <p>Spinner</p>}
            {!isLoading && recipes.map((recipe) => 
                <Card 
                    recipe={recipe} 
                    handleFavorite={handleFavorite}
                    isFavorite={favorites.includes(recipe)}
                />
            )}
        </div>   
    );
};

export default Recipes;
