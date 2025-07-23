// src/components/Nav.jsx
import { useState } from 'react'
import {  NavLink  } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import logo from '../images/Logo.png'

function Nav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm rounded" >
      <nav className="flex justify-between items-center py-5 border-b border-[#FFFFFF]  relative px-4 md:px-10">
        {/* Logo and Navigation Links */}
        <div className="flex items-center gap-[50px]">
          <div className="logo">
            <img src={logo} alt="Logo" className="w-[44px] h-[44px] rounded-md ml-1" />
          </div>

          {/* Navigation Links */}
          <ul
            className={`${
              isOpen ? 'flex' : 'hidden'
            } flex-col absolute top-[70px] left-0 w-full bg-white px-6 py-5 shadow-md z-10 md:flex md:flex-row md:static md:shadow-none md:p-0 md:gap-[26px]`}
          >
            <NavLink to="/" className="nav-link">Home</NavLink>
            <NavLink to="/courses" className="nav-link">Courses</NavLink>
             <NavLink to="/about" className="nav-link">About</NavLink>
            <NavLink to="/pricing" className="nav-link">Pricing</NavLink>
             <NavLink to="/contact" className="nav-link">Contact</NavLink>
          </ul>
        </div>

        {/*  Auth Buttons */}
        <div className="flex items-center gap-5 md:gap-[30px]">
  {/* Sign Up Button */}
  <button className="text-sm">Sign Up</button>

  {/* Login Button */}
  <button className="bg-[#FF9500] text-white border-none px-[34px] py-[14px] rounded-md text-sm">
    Login
  </button>

  {/* Hamburger Icon (Mobile Only) */}
  <div className="md:hidden text-2xl cursor-pointer p-2" onClick={() => setIsOpen(!isOpen)}>
    <FaBars />
  </div>
    </div>
      </nav>
    </header>
  )
}

export default Nav
