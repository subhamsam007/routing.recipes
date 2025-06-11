import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { nanoid } from 'nanoid'
import { RecipeesContext } from '../context/RecipesContext'

const Create = () => {
    const { recipeData, setrecipeData } = useContext(RecipeesContext);
    const {register, handleSubmit, reset} = useForm();
    
    const submitHandler = (userData) => {
        userData.id = nanoid();
        console.log(userData)
        setrecipeData([...recipeData, userData])
        reset();     
    }

    return (
        <div className='bg-amber-300 p-4 h-9/10 w-full rounded-3xl '>
            <form className='flex flex-col space-y-10' onSubmit={handleSubmit(submitHandler)}>
                <label className="font-semibold">
                    Recipe Name:
                    <input
                        type="text"
                        name="name"
                        className="block mt-1 p-2 rounded border w-full"
                        placeholder="Enter recipe name"
                        required
                        {...register("name")}
                    />
                </label>
                <label className="font-semibold">
                    Image Link:
                    <input
                        type="url"
                        name="image"
                        className="block mt-1 p-2 rounded border w-full"
                        placeholder="Enter image URL"
                        required
                        {...register('image')}
                    />
                </label>
                <label className="font-semibold">
                    Recipe Type:
                    <select
                        name="type"
                        className="block mt-1 p-2 rounded border w-full"
                        required
                        {...register('catagory')}
                    >
                        <option value="">Select type</option>
                        <option value="breakfast">Breakfast</option>
                        <option value="lunch">Lunch</option>
                        <option value="dinner">Dinner</option>
                        <option value="dessert">Dessert</option>
                        <option value="snack">Snack</option>
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
    );
};

export default Create;
