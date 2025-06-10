import React, { useState } from 'react'
import { createContext } from 'react'

export const RecipeesContext= createContext();
const RecipesContext = () => {
    const [ recipeData , setrecipeData] = useState([])
  return (
    <RecipeesContext.Provider>
        
    </RecipeesContext.Provider>
  )
}

export default RecipesContext
