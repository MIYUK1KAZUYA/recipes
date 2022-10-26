import { RecipeArray } from "../redux/store";
import { useNavigate } from "react-router-dom";

type RecipeProps = {
    recipe: RecipeArray;
    handleFavorite: (recipe: RecipeArray) => void;
    isFavorite: boolean;
};

const Card = function({recipe, handleFavorite, isFavorite}: RecipeProps) {

    const navigate = useNavigate();
    //redirect user to recipe details
    const naviHandle = function(recipe: RecipeArray): void {
        navigate(`/recipe/${recipe.id}`)
    };

    //designate as favorite
    const onFavorite = function() : void {
        handleFavorite(recipe)
    };

    return (
        <div>
            <img src={recipe.thumbnail_url} alt={recipe.name} />
            <p onClick={() => naviHandle} >{recipe.name}</p>
            <p onClick={onFavorite}>{isFavorite ? "❤️" : "🤍"}</p>
        </div>
    );
};

export default Card;
