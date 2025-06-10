import React, { useContext } from 'react'
import { RecipeesContext } from '../context/RecipesContext'

const Recipes = () => {
  const { recipeData } = useContext(RecipeesContext)
  const renderRecipes = recipeData.map((info) => {
    return (
      <div key={info.id}>
        <h1>{info.name}</h1>
      </div>
    )
  })
  return (
    <div className='bg-amber-600'>
      {renderRecipes}
    </div>
  )
}

export default Recipes