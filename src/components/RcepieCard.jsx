import React from 'react'
import { Link } from 'react-router-dom'
const RcepieCard = (props) => {
    const {id, image, name, catagory, description} = props.recipe
  return (
    <Link to={`/recipe/${id}`} className='block w-1/5 h-1/2 rounded-3xl overflow-hidden bg-blue-300 text-3xl text-center  p-5 space-x-5 '>
      <img className='w-full h-[20vh] object-cover  rounded-3xl items-center' src={image} alt={name} />
      <h1 className='text-2xl font-bold'>{name}</h1>
      <p className='text-xl'>{catagory}</p>
      {/* <p>{description.slice(0,100)}...<small className='text-blue-500 cursor-pointer'>Read More</small></p> */}
      <button>View Recipe</button>
    </Link>
  )
}

export default RcepieCard
