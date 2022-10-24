import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { State } from "../redux/reducers";
import { RecipeArray, addFavorite, removeFavorite } from "../redux/actions";
import Card from "../card/Card";

const Recipes = function() {
    const { recipeList, favoriteRecipes } : State = useSelector((state: State) => state);
    const [recipes, setRecipes] = useState(recipeList);
    const [favorites, setFavorites] = useState(favoriteRecipes);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleFavorite = function(recipe: RecipeArray) : void {
        if (favorites.includes(recipe)) {
            const newFavorites = favorites.filter(fav => fav.id !== recipe.id);
            if (newFavorites.length === 0) {
                localStorage.removeItem("favorites");
            } else {
                localStorage.setItem("favorites", JSON.stringify(newFavorites));
            };
            dispatch(addFavorite(recipe));
            setFavorites(newFavorites);
        } else {
            const newFavorites = [...favorites, recipe];
            localStorage.setItem("favorites", JSON.stringify(newFavorites));
            dispatch(removeFavorite(recipe));
            setFavorites(newFavorites);
        };
    };

    return (
        <div>
            {recipes.map((recipe) => 
                <Card recipe={recipe} handleFavorite={handleFavorite} />
            )}
        </div>   
    );
};

export default Recipes;
