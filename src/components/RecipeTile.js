import React from "react";
import "./RecipeTile.css";

function RecipeTile({ recipe }) {
  return (
    <div className="recipe__tile">
      <p className="recipe__name">{recipe.label}</p>
      <img
        className="recipe__image"
        src={recipe.image}
        alt={recipe.label}
        onClick={() => window.open(recipe.url)}
      />
    </div>
  );
}

export default RecipeTile;
