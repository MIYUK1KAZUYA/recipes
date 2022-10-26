import { createSlice } from "@reduxjs/toolkit";
import { RecipeArray } from "./store";

type Action = {
    type: string,
    payload: RecipeArray[]
};

const initialState: RecipeArray[] = [
    {
        id: 3279, 
        name: "Time To Spice It Up!", 
        description: "Bland is boring! A little spice can elevate any meal. If you agree with that statement, then get your palate ready to reach new heights! Why don't you check out these recipes to spice up your day?",
        credits: [{name: "Jervaz Fernandes"}],
        thumbnail_url: "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/393239.jpg"
    },
    {
        id: 3279, 
        name: "Time To Spice It Up!", 
        description: "Bland is boring! A little spice can elevate any meal. If you agree with that statement, then get your palate ready to reach new heights! Why don't you check out these recipes to spice up your day?",
        credits: [{name: "Jervaz Fernandes"}],
        thumbnail_url: "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/393239.jpg"
    },
    {
        id: 3279, 
        name: "Time To Spice It Up!", 
        description: "Bland is boring! A little spice can elevate any meal. If you agree with that statement, then get your palate ready to reach new heights! Why don't you check out these recipes to spice up your day?",
        credits: [{name: "Jervaz Fernandes"}],
        thumbnail_url: "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/393239.jpg"
    },
    {
        id: 3279, 
        name: "Time To Spice It Up!", 
        description: "Bland is boring! A little spice can elevate any meal. If you agree with that statement, then get your palate ready to reach new heights! Why don't you check out these recipes to spice up your day?",
        credits: [{name: "Jervaz Fernandes"}],
        thumbnail_url: "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/393239.jpg"
    },
    {
        id: 3279, 
        name: "Time To Spice It Up!", 
        description: "Bland is boring! A little spice can elevate any meal. If you agree with that statement, then get your palate ready to reach new heights! Why don't you check out these recipes to spice up your day?",
        credits: [{name: "Jervaz Fernandes"}],
        thumbnail_url: "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/393239.jpg"
    },
    {
        id: 3279, 
        name: "Time To Spice It Up!", 
        description: "Bland is boring! A little spice can elevate any meal. If you agree with that statement, then get your palate ready to reach new heights! Why don't you check out these recipes to spice up your day?",
        credits: [{name: "Jervaz Fernandes"}],
        thumbnail_url: "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/393239.jpg"
    }
];

export const recipesSlice = createSlice({
    name: 'recipes',
    initialState,
    reducers: {
        addRecipes: (state, action: Action) => {
            return action.payload;
        }
    }
});

export const { addRecipes } = recipesSlice.actions;

export default recipesSlice.reducer;
