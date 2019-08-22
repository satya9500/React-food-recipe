import React, { Component, useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Recipe from "./recipe";

const App = () => {
  const APP_ID = "b08685b2";
  const APP_KEY = "69230afd660573f98f1b383c80ca4623";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  var counter = 0;
  useEffect(() => {
    getRecipes();
    counter = 0;
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App container">
      <form onSubmit={getSearch} className="form-search">
        <input
          type="text"
          className="search-bar"
          id="search"
          value={search}
          onChange={updateSearch}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <div className="recipes">
        {recipes.map(recipe => (
          <Recipe
            key={counter++}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
};
export default App;
