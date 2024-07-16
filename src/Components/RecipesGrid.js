import React, {useState} from "react";
import '../styles.css';
import RecipeCard from "./RecipeCard";

export default function RecipesGrid({recipes, favoritesList, toggleFavorites}){

    return(
        <div className="recipes-grid">
            {
                recipes.map(recipe => {
                    return (
                        <RecipeCard recipe={recipe} key={recipe.id} toggleFavorites={toggleFavorites} isFavorited={favoritesList.includes(recipe.id)}></RecipeCard>
                    )
                })
            }
        </div>

    )
}