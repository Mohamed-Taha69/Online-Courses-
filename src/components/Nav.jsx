// src/components/Nav.jsx
import { useState } from 'react'
import {  NavLink  } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import logo from '../images/Logo.png'

function Nav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm rounded w-full">
      <nav className="flex justify-between items-center py-3 sm:py-4 md:py-5 border-b border-[#FFFFFF] relative px-4 sm:px-6 md:px-10 lg:px-12">
        {/* Logo and Navigation Links */}
        <div className="flex items-center gap-4 sm:gap-6 md:gap-[50px]">
          <div className="logo">
            <img src={logo} alt="Logo" className="w-[36px] h-[36px] sm:w-[40px] sm:h-[40px] md:w-[44px] md:h-[44px] rounded-md flex-shrink-0" />
          </div>

          {/* Navigation Links */}
          <ul
            className={`${
              isOpen ? 'flex' : 'hidden'
            } flex-col absolute top-full left-0 w-full bg-white px-4 sm:px-6 py-4 shadow-lg z-50 
            md:flex md:flex-row md:static md:shadow-none md:p-0 md:gap-4 lg:gap-[26px] border-t border-gray-100 md:border-t-0`}
          >
            <NavLink to="/" className="nav-link py-2 md:py-1" onClick={() => setIsOpen(false)}>Home</NavLink>
            <NavLink to="/courses" className="nav-link py-2 md:py-1" onClick={() => setIsOpen(false)}>Courses</NavLink>
            <NavLink to="/about" className="nav-link py-2 md:py-1" onClick={() => setIsOpen(false)}>About</NavLink>
            <NavLink to="/pricing" className="nav-link py-2 md:py-1" onClick={() => setIsOpen(false)}>Pricing</NavLink>
            <NavLink to="/contact" className="nav-link py-2 md:py-1" onClick={() => setIsOpen(false)}>Contact</NavLink>
          </ul>
        </div>

        {/*  Auth Buttons */}
        <div className="flex items-center gap-2 sm:gap-3 md:gap-5 lg:gap-[30px]">
          {/* Sign Up Button */}
          <NavLink to="/signup">
            <button className="p-2 sm:p-3 text-xs sm:text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors duration-200">
              Sign Up
            </button>
          </NavLink>

          {/* Login Button */}
          <NavLink to="/login">
            <button
              className="cursor-pointer bg-[#FF9500] text-white border-none 
                         px-3 py-1.5 sm:px-4 sm:py-2 md:px-6 md:py-2 lg:px-[34px] lg:py-[14px] rounded-md 
                         text-xs sm:text-sm w-fit whitespace-nowrap font-medium
                         hover:bg-[#e67e00] transition-colors duration-200"
            >
              Login
            </button>
          </NavLink>

          {/* Hamburger Icon (Mobile Only) */}
          <div className="md:hidden text-xl sm:text-2xl cursor-pointer p-1 sm:p-2 hover:text-gray-600 transition-colors duration-200" onClick={() => setIsOpen(!isOpen)}>
            <FaBars />
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Nav
