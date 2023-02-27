import axios from "axios";
import { useState } from "react";
import "./App.css";
import RecipeTile from "./components/RecipeTile";

const { REACT_APP_EDAMAMID, REACT_APP_EDAMAMKEY } = process.env;

function App() {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("");
  const [healthOpt, setHealthOpt] = useState("vegetarian");
  const url = `https://api.edamam.com/search?q=${query}&app_id=${REACT_APP_EDAMAMID}&app_key=${REACT_APP_EDAMAMKEY}&health=${healthOpt}`;

  const getRecipeInfo = async () => {
    var result = await axios.get(url);
    setRecipes(result.data.hits);
    console.log(result.data.hits);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    getRecipeInfo();
  };

  return (
    <div className="app">
      <h1>
        <u>Food Recipe Hub</u>🥗
      </h1>
      <form className="app__searchForm" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Type the ingredient..."
          autoComplete="off"
          className="app__input"
          onChange={(event) => {
            setQuery(event.target.value);
          }}
          value={query}
        />
        <select className="app__healthLabels">
          <option
            value="vegetarian"
            onClick={() => {
              setHealthOpt("vegetarian");
            }}
          >
            vegetarian
          </option>
          <option
            value="vegan"
            onClick={() => {
              setHealthOpt("vegan");
            }}
          >
            vegan
          </option>
          <option
            value="low-sugar"
            onClick={() => {
              setHealthOpt("low-sugar");
            }}
          >
            low sugar
          </option>
          <option
            value="dairy-free"
            onClick={() => {
              setHealthOpt("dairy-free");
            }}
          >
            dairy free
          </option>
          <option
            value="wheat-free"
            onClick={() => {
              setHealthOpt("wheat-free");
            }}
          >
            wheat free
          </option>
          <option
            value="alcohol-free"
            onClick={() => {
              setHealthOpt("alcohol-free");
            }}
          >
            alcohol free
          </option>
          <option
            value="gluten-free"
            onClick={() => {
              setHealthOpt("gluten-free");
            }}
          >
            gluten free
          </option>
          <option
            value="immuno-supportive"
            onClick={() => {
              setHealthOpt("immuno-supportive");
            }}
          >
            immune supportive
          </option>
        </select>
        <input type="submit" value="Get Recipe" className="app__submit" />
      </form>
      <div className="app__recipes">
        {recipes.map((recipe, index) => {
          return <RecipeTile key={index} recipe={recipe.recipe} />;
        })}
      </div>
    </div>
  );
}

export default App;
