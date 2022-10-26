import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { State, RecipeArray } from '../redux/store';

const Detail = function() {
    //look into store for recipes
    const { recipes }: State = useSelector((state: State) => state);
    const [data, setData] = useState<RecipeArray | null>();
    const { id } = useParams();

    //define fetch function
    const fetchData = async function() {
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
    };

    useEffect(() => {
        if (recipes.some(recipe => recipe.id === Number(id))) {
            const listedCountry: RecipeArray = recipes.filter(recipe => recipe.id === Number(id))[0];
            setData(listedCountry);
        } else {
            fetchData();
        }
    }, []);
    //fix this
    if (!data) return null;

    return (
        <div>
            <p>{data.name}</p>
            <img src={data.thumbnail_url} alt={data.name} />
            <p>{data.description}</p>
            <p>{data.credits[0].name}</p>
            <p>{data.total_time_minutes}</p>
        </div>
    );
};

export default Detail;
