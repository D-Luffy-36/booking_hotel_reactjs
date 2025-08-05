import React from 'react'
import { Link } from 'react-router-dom'

const NavLink = ({navLinks, isScrolled}) => {
  return (
    <>
        {navLinks.map((link, i) => (
            <Link key={i} to={link.path} className="group flex flex-col items-center">
            <span className={`${isScrolled ? "text-gray-700" : "text-white"} transition-colors`}>
                {link.name}
            </span>
            <span className={`h-0.5 w-0 group-hover:w-full transition-all duration-300 ${isScrolled ? "bg-gray-700" : "bg-white"}`}></span>
            </Link>
        ))}
    </>

  )
}

export default NavLink