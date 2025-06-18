import React, { useContext } from "react";
import { RecipeesContext } from "../context/RecipesContext";
import RcepieCard from "../components/RcepieCard";

const Recipes = () => {
  const { recipeData } = useContext(RecipeesContext);
  const renderRecipes = recipeData.map((info) => <RcepieCard key={info.id} recipe={info}/>);
  console.log(recipeData);
  return (
    <div className="bg-amber-300 p-6 h-full w-full space-x-7 rounded-3xl flex flex-wrap ">
      {renderRecipes}
    </div>
  );
};

export default Recipes;
