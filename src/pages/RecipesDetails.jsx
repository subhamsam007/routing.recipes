import React, { useContext } from 'react'  
import { RecipeesContext } from '../context/RecipesContext'
import { useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'

const RecipesDetails = () => {
  const {recipeData } = useContext(RecipeesContext) // taking the recipeData from the context
  const params = useParams(); //Then you're grabbing what's inside the URL, like the recipe's ID with useParams().
  console.log("recipeData:", recipeData);
  console.log("params:", params);

  const recipe = recipeData.find((e) => String(params.id) === String(e.id));
  console.log(recipe);
      const { register, handleSubmit, reset } = useForm();


  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  }
  
  return (
    <div className="h-screen w-full bg-blue-100 flex flex-col">
      <h1 className="text-2xl font-bold text-center my-4">Recipes Details</h1>
      <div className="flex flex-1 w-[100%] max-w-7xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Left Side: Recipe Content */}
        <div className="w-1/2 p-8 flex flex-col items-start justify-start border-r border-gray-200">
          <img src={recipe.image} alt={recipe.name} className="w-full h-64 object-cover rounded-2xl mb-6" />
          <h2 className="text-2xl font-bold mb-2">{recipe.name}</h2>
          <p className="mb-4 text-gray-700">{recipe.description}</p>
          <div className="mb-4 w-full">
            <h3 className="font-semibold mb-1">Ingredients:</h3>
            <ul className="list-disc list-inside text-gray-600">
              {Array.isArray(recipe.ingredients)
                ? recipe.ingredients.map((ing, idx) => <li key={idx}>{ing}</li>)
                : <li>{recipe.ingredients}</li>}
            </ul>
          </div>
          <div className="mb-4 w-full">
            <h3 className="font-semibold mb-1">Instructions:</h3>
            <ol className="list-decimal list-inside text-gray-600">
              {Array.isArray(recipe.instructions)
                ? recipe.instructions.map((step, idx) => <li key={idx}>{step}</li>)
                : <li>{recipe.instructions}</li>}
            </ol>
          </div>
          {recipe.catagory && (
            <p className="text-sm text-gray-500 mb-2">Category: {recipe.catagory}</p>
          )}
        </div>
        {/* Right Side: Form */}
        <div className="w-1/2 p-8 flex flex-col m-5 bg-amber-300 justify-start rounded-2xl">  
          <form className="flex flex-col space-y-4" onSubmit={handleSubmit(submitHandler)}>
            <label className="font-semibold">
              Recipe Name:
              <input
                type="text"
                className="block mt-1 p-2 rounded border w-full"
                placeholder="Enter recipe name"
                defaultValue={recipe.name}
                required
                {...register('name')}
              />
            </label>
            <label className="font-semibold">
              Description:
              <textarea
                className="block mt-1 p-2 rounded border w-full"
                placeholder="Enter recipe description"
                defaultValue={recipe.description}
                required
                {...register('description')}
              />
            </label>
            <label className="font-semibold">
              Ingredients (comma-separated):
              <textarea
                className="block mt-1 p-2 rounded border w-full"
                placeholder="Enter ingredients separated by commas"
                defaultValue={Array.isArray(recipe.ingredients) ? recipe.ingredients.join(', ') : recipe.ingredients}
                required
                {...register('ingredients')}
              />
            </label>
            <label className="font-semibold">
              Instructions (separate steps with periods):
              <textarea
                className="block mt-1 p-2 rounded border w-full"
                placeholder="Enter cooking instructions. Separate steps with periods."
                defaultValue={Array.isArray(recipe.instructions) ? recipe.instructions.join('. ') : recipe.instructions}
                required
                {...register('instructions')}
              />
            </label>
            <label className="font-semibold">
              Image URL:
              <input
                type="url"
                className="block mt-1 p-2 rounded border w-full"
                placeholder="Enter image URL"
                defaultValue={recipe.image}
                required
                {...register('image')}
              />
            </label>
            <label className="font-semibold">
              Category:
              <select
                className="block mt-1 p-2 rounded border w-full"
                required
                defaultValue={recipe.catagory}
                {...register('catagory')}
              >
                <option value="">Select category</option>
                <option value="Breakfast">Breakfast</option>
                <option value="Lunch">Lunch</option>
                <option value="Dinner">Dinner</option>
                <option value="Dessert">Dessert</option>
                <option value="Snack">Snack</option>
              </select>
            </label>
            <label className="font-semibold">
              Difficulty:
              <select
                className="block mt-1 p-2 rounded border w-full"
                defaultValue={recipe.difficulty || 'Easy'}
                {...register('difficulty')}
              >
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>
            </label>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-xl w-2/5 hover:bg-red-500"
            >
              Create Recipe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RecipesDetails;
