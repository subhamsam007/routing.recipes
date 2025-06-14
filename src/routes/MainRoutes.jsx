import React from 'react'
import { Route , Routes } from 'react-router-dom'
import Create from '../pages/Create';
import About from '../pages/About';
import Home from '../pages/Home';
import Recipes from '../pages/Recipes';
import RecipesDetails from '../pages/RecipesDetails';
const MainRoutes = () => {
return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/Create' element={<Create />} />
        <Route path='/Recipes' element = {<Recipes />} />
        <Route path='/recipe/details/:id' element = {<RecipesDetails />} />
        <Route path=''  element = {<div>
            <h1>404 not found </h1>
        </div>} />
    </Routes>
)
}

export default MainRoutes
