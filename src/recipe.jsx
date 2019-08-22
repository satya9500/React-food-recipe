import React, { Component } from "react";
import style from "./recipe.module.css";

const Recipe = ({ title, calories, image, ingredients }) => {
  var counter = 0;
  return (
    <div className="recipe">
      <h1>{title}</h1>
      <p>
        <b>Calories:</b>
        {calories}
      </p>
      <img src={image} alt="" className="image" />
      <ol>
        {ingredients.map(ingredient => (
          <li key={counter++}>{ingredient.text}</li>
        ))}
      </ol>
    </div>
  );
};

export default Recipe;
