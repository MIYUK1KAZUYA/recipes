import { useRef } from "react";
import { useAppDispatch } from "../redux/hooks";
import { addSearchInput } from "../redux/searchInputSlice";
import { fetchRecipes } from "../redux/fetchRecipes";
import "./Search.css";

const Search = function() {

    const dispatch = useAppDispatch();
    //get hold of input value
    const inputRef = useRef<HTMLInputElement | null>(null);

    //fetch new recipes on form submit
    const handleSubmit = function() : void {
        const searchValue = inputRef.current!.value;
        dispatch(addSearchInput(searchValue));
        dispatch(fetchRecipes(searchValue));
    };  

    return (
        <div className="search-container">
            <div className="search">
                <label htmlFor="search-value">Search for your favorite recipes:</label>
                <input 
                    type="text" 
                    ref={inputRef} 
                    id="search-value" 
                    name="search-value"
                    autoComplete="off"
                    placeholder="Place your recipe here"
                />
                <button onClick={handleSubmit}>Search</button>
            </div>
        </div>
    );
};

export default Search;
