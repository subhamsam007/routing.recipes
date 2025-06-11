import React, { useContext } from "react";
import { RecipeesContext } from "../context/RecipesContext";

const Recipes = () => {
  const { recipeData } = useContext(RecipeesContext);
  const renderRecipes = recipeData.map((info) => {
    return (
      <div className=" ">
        <div key={info.id} className="w-[50%] h-[50%] rounded-3xl bg-blue-300">
          <img src={info.image} alt={info.name} className=" block w-[50%] h-[50%] object-center rounded-3xl" />
          <h1>{info.name}</h1>
          <p>{info.catagory}</p>
          <button>View Recipe</button>
        </div>
      </div>
    );
  });
  return <div className="bg-amber-300 p-4 h-9/10 w-full rounded-3xl flex flex-wrap overflow-hidden">{renderRecipes}</div>;
};

export default Recipes;
