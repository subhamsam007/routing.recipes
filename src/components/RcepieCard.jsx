import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const RcepieCard = (props) => {
    const {id, image, name, catagory, description} = props.recipe
    const [isExpanded, setIsExpanded] = useState(false)

    const toggleDescription = (e) => {
        e.preventDefault() // Prevent Link navigation when clicking Read More
        setIsExpanded(isExpanded === true ? false : true)
    }

    return (
        <div  className='block hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-black/70 hover:shadow-offset-5  w-1/5 h-1/2 rounded-3xl overflow-hidden bg-blue-100 text-3xl text-center p-5 space-x-5'>
            <img className='w-full h-[20vh] object-cover rounded-3xl items-center' src={image} alt={name} />
            <h1 className='text-2xl font-bold'>{name}</h1>
            <p className='text-xl p-2'>{catagory}</p>
            <p className='text-center '>
                {isExpanded ? description : `${description.slice(0, 10)}...`}
                <small 
                    className='text-blue-500 cursor-pointer ml-1 hover:text-blue-700'
                    onClick={toggleDescription}
                >
                    {isExpanded ? 'Show Less' : 'Read More'}
                </small>
            </p>
            <button className='bg-red-300 hover:bg-red-700 cursor-pointer text-black p-2 rounded-3xl text-xl mt-5'><Link to={`/recipe/details/${id}`}>View Recipe</Link></button>
        </div>
    )
}

export default RcepieCard
