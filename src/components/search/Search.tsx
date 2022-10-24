import { useRef } from "react";
import { useDispatch } from "react-redux";
import { fetchRecipes, searchInput } from '../redux/actions';

const Search = function() {

    const dispatch = useDispatch();
    //get hold of input value
    const inputRef = useRef<HTMLInputElement | null>(null);

    //fetch new recipes on form submit
    const handleSubmit = function() : void {
        const searchValue = inputRef.current!.value;
        dispatch(searchInput(searchValue));
        fetchRecipes(searchValue);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="search-value">Search for your favorite recipes:</label>
            <input 
                type="text" 
                ref={inputRef} 
                id="search-value" 
                name="search-value"
            />
            <input 
                type="button" 
                id="button" 
                name="button" 
                value="Search" 
            />
        </form>
    );
};

export default Search;
