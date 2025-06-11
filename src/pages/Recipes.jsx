import React, { useContext } from "react";
import { RecipeesContext } from "../context/RecipesContext";

const Recipes = () => {
  const { recipeData } = useContext(RecipeesContext);
  const renderRecipes = recipeData.map((info) => {
    return (
      <div
        key={info.id}
        className="w-[50%] h-[100%] rounded-3xl bg-blue-300 text-3xl text-center  p-10 "
      >
        <img
          src={info.image}
          alt={info.name}
          className=" block w-[50vh] h-[50vh] object-center mt-5 rounded-3xl items-center"
        />
        <h1 className="text-2xl">{info.name}</h1>
        <p className="text-2xl">{info.catagory}</p>
        <button className="text-2xl bg-red-500 rounded-3xl p-2 hover:bg-green-400 cursor-pointer mt-5">
          View Recipe
        </button>
      </div>
    );
  });
  return (
    <div className="bg-amber-300 p-4 h-9/10 w-full rounded-3xl flex flex-wrap overflow-hidden">
      {renderRecipes}
    </div>
  );
};

export default Recipes;
