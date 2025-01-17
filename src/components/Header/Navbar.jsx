import React, { useState } from 'react';
import { IoMdMenu } from "react-icons/io";
import { ImCross } from "react-icons/im";
import NavItem from './NavItem';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className='sticky top-0 w-full bg-ivory dark:bg-dark-navy shadow-md text-teal dark:text-light-cyan z-10'>
      <section className='container flex flex-col items-end md:justify-between md:items-center'>
        <button 
          className="block m-1 md:hidden text-teal dark:text-light-cyan"
          type='button'
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Navigation Menu"
        >
          {isOpen ? <ImCross className="h-6 w-6" /> : <IoMdMenu className="h-8 w-8" />}
        </button>
        <ul className={`${
            isOpen ? "flex flex-col space-y-4 mt-4" : "hidden"
          } md:flex md:flex-row md:space-y-0 md:mt-0 items-center w-full md:w-auto transition-all duration-300 ease-in-out`}>
            <NavItem ItemName='Home' ItemLink='#home'/>
            <NavItem ItemName='About' ItemLink='#about'/>
            <NavItem 
              ItemName='Portfolio'
              dropdownItems={[
                { 
                  name: "Education & Experience",
                  link: "#education-experience"
                },{
                  name: "Projects",
                  link: "#projects"
                }
              ]}
            />
            <NavItem ItemName='Contact' ItemLink='#contact'/>
        </ul>
      </section>
    </nav>
  )
}

export default Navbar;