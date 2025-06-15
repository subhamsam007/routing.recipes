import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { nanoid } from 'nanoid'
import { RecipeesContext } from '../context/RecipesContext'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const Create = () => {
    const { recipeData, setrecipeData } = useContext(RecipeesContext);
    const { register, handleSubmit, reset } = useForm();
    const navigate = useNavigate();

    const submitHandler = (userData) => {
        // Create a complete recipe object with all required fields
        const newRecipe = {
            id: nanoid(),
            name: userData.name,
            ingredients: userData.ingredients.split(',').map(item => item.trim()),
            instructions: userData.instructions.split('.').map(instruction => instruction.trim()).filter(Boolean),
            // prepTimeMinutes: parseInt(userData.prepTimeMinutes) || 0,
            // cookTimeMinutes: parseInt(userData.cookTimeMinutes) || 0,
            // servings: parseInt(userData.servings) || 1,
            difficulty: userData.difficulty || 'Easy',
            // cuisine: userData.cuisine || 'General',
            // caloriesPerServing: parseInt(userData.caloriesPerServing) || 0,
            tags: userData.tags.split(',').map(tag => tag.trim()),
            // userId: 166, // You might want to make this dynamic based on logged-in user
            image: userData.image,
            // rating: 0,
            // reviewCount: 0,
            catagory: userData.catagory,
            description: userData.description
        };

        setrecipeData([...recipeData, newRecipe]);
        toast.success('Recipe created successfully');
        reset();
        navigate('/Recipes'); // Navigate to recipes page after creation
    }

    return (
        <div className='bg-amber-300 p-4 h-9/10 w-full rounded-3xl overflow-y-auto'>
            <form className='flex flex-col space-y-4' onSubmit={handleSubmit(submitHandler)}>
                <label className="font-semibold">
                    Recipe Name:
                    <input
                        type="text"
                        className="block mt-1 p-2 rounded border w-full"
                        placeholder="Enter recipe name"
                        required
                        {...register("name")}
                    />
                </label>

                <label className="font-semibold">
                    Description:
                    <textarea
                        className="block mt-1 p-2 rounded border w-full"
                        placeholder="Enter recipe description"
                        required
                        {...register("description")}
                    />
                </label>

                <label className="font-semibold">
                    Ingredients (comma-separated):
                    <textarea
                        className="block mt-1 p-2 rounded border w-full"
                        placeholder="Enter ingredients separated by commas"
                        required
                        {...register("ingredients")}
                    />
                </label>

                <label className="font-semibold">
                    Instructions (separate steps with periods):
                    <textarea
                        className="block mt-1 p-2 rounded border w-full"
                        placeholder="Enter cooking instructions. Separate steps with periods."
                        required
                        {...register("instructions")}
                    />
                </label>

                <label className="font-semibold">
                    Image URL:
                    <input
                        type="url"
                        className="block mt-1 p-2 rounded border w-full"
                        placeholder="Enter image URL"
                        required
                        {...register('image')}
                    />
                </label>

                <label className="font-semibold">
                    Category:
                    <select
                        className="block mt-1 p-2 rounded border w-full"
                        required
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

                {/* <div className="grid grid-cols-2 gap-4">
                    <label className="font-semibold">
                        Prep Time (minutes):
                        <input
                            type="number"
                            className="block mt-1 p-2 rounded border w-full"
                            {...register("prepTimeMinutes")}
                        />
                    </label>

                    <label className="font-semibold">
                        Cook Time (minutes):
                        <input
                            type="number"
                            className="block mt-1 p-2 rounded border w-full"
                            {...register("cookTimeMinutes")}
                        />
                    </label>

                    <label className="font-semibold">
                        Servings:
                        <input
                            type="number"
                            className="block mt-1 p-2 rounded border w-full"
                            {...register("servings")}
                        />
                    </label>

                    <label className="font-semibold">
                        Calories per Serving:
                        <input
                            type="number"
                            className="block mt-1 p-2 rounded border w-full"
                            {...register("caloriesPerServing")}
                        />
                    </label>
                </div> */}

                <label className="font-semibold">
                    Difficulty:
                    <select
                        className="block mt-1 p-2 rounded border w-full"
                        {...register("difficulty")}
                    >
                        <option value="Easy">Easy</option>
                        <option value="Medium">Medium</option>
                        <option value="Hard">Hard</option>
                    </select>
                </label>

                {/* <label className="font-semibold">
                    Cuisine:
                    <input
                        type="text"
                        className="block mt-1 p-2 rounded border w-full"
                        placeholder="Enter cuisine type"
                        {...register("cuisine")}
                    />
                </label>

                <label className="font-semibold">
                    Tags (comma-separated):
                    <input
                        type="text"
                        className="block mt-1 p-2 rounded border w-full"
                        placeholder="Enter tags separated by commas"
                        {...register("tags")}
                    />
                </label>
 */}
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-xl w-2/5 hover:bg-red-500"
                >
                    Create Recipe
                </button>
            </form>
        </div>
    );
};

export default Create;
