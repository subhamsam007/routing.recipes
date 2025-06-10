import React, { useState } from 'react'
import { createContext } from 'react'

export const RecipeesContext= createContext();
const RecipesContext = (props) => {
    const [ recipeData , setrecipeData] = useState([])
  return (
    <RecipeesContext.Provider value={{recipeData , setrecipeData}}>
      {props.children}
    </RecipeesContext.Provider>
  )
}

export default RecipesContext
