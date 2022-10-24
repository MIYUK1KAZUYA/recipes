import { useSelector } from "react-redux";
import { State } from '../redux/reducers';

const Favorites = function() {

    const { favoriteRecipes }: State = useSelector((state: State) => state)
    
    if (!favoriteRecipes.length) {
        return <p>No favorite recipes found!</p>
    }

    return (
        <div>
            {favoriteRecipes.map(fav => <p>{fav.name}</p>)}
        </div>
    );
};

export default Favorites;
