import React, { useContext } from 'react'  
import { RecipeesContext } from '../context/RecipesContext'
import { useParams } from 'react-router-dom'

const RecipesDetails = () => {
  const {recipeData } = useContext(RecipeesContext)
  const Params = useParams();
  const recipe = recipeData.find((e) => Params.id === e.id);
  console.log(recipe);
  
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-blue-100'>
      <h1>Recipes Details</h1>
      
    </div>
  )
}

export default RecipesDetails
