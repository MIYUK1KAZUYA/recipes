import { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useAppDispatch } from "../../redux/hooks";
import { State, RecipeArray } from '../../redux/store';
import { addFavorite, removeFavorite } from "../../redux/favoritesSlice";
import Signature from "../../signature/Signature";
import './Detail.css';

const Detail = function() {
    //look into store for recipes
    const recipes = useSelector((state: State) => state.recipes);
    //set recipe data into local state
    const [data, setData] = useState<RecipeArray | null>();
    const favorites: RecipeArray[] = useSelector((state: State) => state.favorites);
    //get id of recipe from current URL
    const { id } = useParams();
    const dispatch = useAppDispatch();

    //define fetch function if there is no data in store
    const fetchData = useCallback(
        async function() {
            const url = `https://tasty.p.rapidapi.com/recipes/get-more-info?id=${id}`;
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '9453a4d551mshc10291d5dac3716p13e1e1jsnf64948b9f0df',
                    'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
                }
            };
            try {
                const response = await fetch(url, options);
                if (response.status !== 200) {
                    throw new Error('Error fetching recipe')
                };
                const data = await response.json();
                setData(data);
            } catch (err) {
                console.log(err);
            };
        }, [id]
    )
    const handleFavorite = function() : void {
        if (!data) return;
        if (favorites.some((fav) => fav.id === data.id)) {
            const newFavorites = favorites.filter(fav => fav.id !== data.id);
            if (newFavorites.length === 0) {
                localStorage.removeItem("favoriteRecipes");
            } else {
                localStorage.setItem("favoriteRecipes", JSON.stringify(newFavorites));
            };
            dispatch(removeFavorite(data));
        } else {
            const newFavorites = [...favorites, data];
            localStorage.setItem("favoriteRecipes", JSON.stringify(newFavorites));
            dispatch(addFavorite(data));
        };
    };

    useEffect(() => {
        if (recipes.some(recipe => recipe.id === Number(id))) {
            const listedCountry: RecipeArray = recipes.filter(recipe => recipe.id === Number(id))[0];
            setData(listedCountry);
        } else {
            fetchData();
        }
    }, [recipes, id, fetchData]);
    //fix this
    if (!data) return null;

    return (
        <div className='detail'>
            <Signature />
            <div className='detail-container'>
                <h1>{data.name}</h1>
                {favorites.find((x: RecipeArray) => x.id === data.id) 
                        ? <button className='pink' onClick={handleFavorite}>Unfavorite!</button>
                        : <button className='white' onClick={handleFavorite}>Favorite!</button>
                }
                <img src={data.thumbnail_url} alt={data.name}/>
                <div className='instructions'>
                    {data.instructions.map((step: {display_text: string}, index) => <p key={index}>{index + 1}: {step.display_text}</p>)}
                </div>
            </div>
        </div>
    );
};

export default Detail;
