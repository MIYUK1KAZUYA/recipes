import { RecipeArray } from "../redux/actions";
import { useNavigate } from "react-router-dom";

type RecipeProps = {
    recipe: RecipeArray;
    handleFavorite: (recipe: RecipeArray) => void;
};

const Card = function({recipe, handleFavorite}: RecipeProps) {

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
        <div onClick={() => naviHandle} >
            <img src={recipe.thumbnail_url} />
            <p>{recipe.name}</p>
            <p onClick={onFavorite}>{recipe.name}</p>
        </div>
    );
};

export default Card;
