import React from 'react'
import NavItem from './NavItem';

function Navbar() {
  return (
    <nav className='sticky top-0 p-2 bg-ivory dark:bg-dark-navy shadow-md'>
        <ul className='flex space-x-4 text-teal dark:text-light-cyan'>
            <NavItem ItemName='Home' ItemLink='#home'/>
            <NavItem ItemName='About' ItemLink='#home'/>
            <NavItem ItemName='Projects' ItemLink='#home'/>
            <NavItem ItemName='Contact' ItemLink='#home'/>
        </ul>
    </nav>
  )
}

export default Navbar;