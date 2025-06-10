import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
return (
    <div className="text-3xl space-x-4">
        <NavLink
            to="/"
            className={({ isActive }) =>
                isActive
                    ? 'text-red-500'
                    : 'text-blue-500 '
            }
        >
            Home
        </NavLink>
        <NavLink
            to="/about"
            className={({ isActive }) =>
                isActive
                    ? 'text-red-500 text-6xl'
                    : 'text-blue-500 '
            }
        >
            About
        </NavLink>
        <NavLink
            to="/Recipes"
            className={({ isActive }) =>
                isActive
                    ? 'text-red-500 text-5xl'
                    : 'text-blue-500 '
            }
        >
            Recipes
        </NavLink>
        <NavLink
            to="/Create"
            className={({ isActive }) =>
                isActive
                    ? 'text-red-500 text-6xl'
                    : 'text-blue-500 '
            }
        >
            Create
        </NavLink>
    </div>
)
}

export default Navigation
