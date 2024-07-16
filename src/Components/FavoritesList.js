import React from "react";
import '../styles.css';
import RecipeCard from "./RecipeCard";

export default function FavoritesList({ recipes, favoritesList, toggleFavorites }) {
    return (
        <div>
            <h1 className="title">Your Favorites</h1>
            <div className="favoriteslist">
                {
                    favoritesList.map((id) => {
                        const recipe = recipes.find((recipe) => recipe.id === id);
                        return <RecipeCard key={id} recipe={recipe} toggleFavorites={toggleFavorites} isFavorited={true} />;
                    })
                }
            </div>
        </div>
    );
}