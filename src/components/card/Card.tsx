import { RecipeArray } from "../redux/store";
import { useNavigate } from "react-router-dom";
import "./Card.css"

type RecipeProps = {
    recipe: RecipeArray;
    isFavorite: boolean;
};

const Card = function({ recipe }: RecipeProps) {

    const navigate = useNavigate();

    //redirect user to recipe details
    const naviHandle = function(): void {
        navigate(`/recipe/${recipe.id}`)
    };

    return (
        <div className="card" onClick={naviHandle}>
            <img src={recipe.thumbnail_url} alt={recipe.name} />
            <div className="recipe-meta">
                <div className="recipe-text">
                    <p>{recipe.name}</p>
                    <p>{recipe.credits[0].name}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;
