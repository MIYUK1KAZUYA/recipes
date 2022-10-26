import { useSelector } from "react-redux";
import { State } from "../redux/store";
import Card from "../card/Card";
import Spinner from "../spinner/Spinner";
import "./Recipes.css";

const Recipes = function() {
    const recipes = useSelector((state: State) => state.recipes);
    const favorites = useSelector((state: State) => state.favorites);
    const isLoading = useSelector((state: State) => state.isLoading);

    return (
        <div className="card-container">
            {isLoading && <Spinner />}
            {!isLoading && recipes.map((recipe, index) => 
                <Card 
                    recipe={recipe} 
                    isFavorite={favorites.includes(recipe)}
                    key={index}
                />
            )}
        </div>   
    );
};

export default Recipes;
