import React, {useState} from 'react'
import NavItem from './NavItem';

function Navbar() {
  return (
    <nav className='sticky top-0 p-2 bg-ivory dark:bg-dark-navy shadow-md text-teal dark:text-light-cyan'>
        <ul className='flex space-x-4'>
            <NavItem
              ItemName='Home'
              ItemLink='#home'
            />
            <NavItem 
              ItemName='About'
              ItemLink='#about'
            />
            <NavItem 
              ItemName='Projects'
              ItemLink='#project'
            />
            <NavItem 
              ItemName='Contact'
              ItemLink='#contact'
            />
        </ul>
    </nav>
  )
}

export default Navbar;