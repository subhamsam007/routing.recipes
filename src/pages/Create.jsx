import React from 'react'

const Create = () => {
  return (
    <div className='bg-amber-300 p-4 h-9/10 w-full rounded-3xl '>
        <form className=' flex  flex-col space-y-10' >

            <label className="font-semibold">
                Recipe Name:
                <input
                    type="text"
                    name="name"
                    className="block mt-1 p-2 rounded border"
                    placeholder="Enter recipe name"
                    required
                />
            </label>
            <label className="font-semibold">
                Image Link:
                <input
                    type="url"
                    name="image"
                    className="block mt-1 p-2 rounded border"
                    placeholder="Enter image URL"
                    required
                />
            </label>
            <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-red-500"
            >
                Create Recipe
            </button>
        </form>
      
    </div>
  )
}

export default Create
