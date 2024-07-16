import React from "react";
import '../styles.css';

export default function RecipeCard({recipe, isFavorited, toggleFavorites}) {


    return(
        <div key ={recipe.id} className="recipe-card">
            <img src ={`images/${recipe.image}`} alt={recipe.title}></img>
            <div className="recipe-card-info">
                <h3 className="recipe-card-title">{recipe.title}</h3>
                <p className="recipe-card-recipe">{recipe.recipe}</p>
            </div>
            <label className="switch">
                <input type="checkbox" checked={isFavorited} onChange={()=> toggleFavorites(recipe.id)}></input>
                <span className="slider">
                    <span className="slider-label">{isFavorited ? "In Favorites" : "Add to Favorites"} 
                    </span>
                </span>
            </label>
        </div>
    )
}