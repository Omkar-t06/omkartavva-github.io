import React, {useState} from 'react'
import NavItem from './NavItem';

function Navbar() { 
  const [activeSection, setActiveSection] = useState('#home');
  function clickHandler(link) {
    setActiveSection(link)
  }

  return (
    <nav className='sticky top-0 p-2 bg-ivory dark:bg-dark-navy shadow-md text-teal dark:text-light-cyan'>
        <ul className='flex space-x-4'>
            <NavItem
              ItemName='Home' 
              ItemLink='#home' 
              onClick={clickHandler}
              activeSection={activeSection}
            />
            <NavItem 
              ItemName='About' 
              ItemLink='#about' 
              onClick={clickHandler}
              activeSection={activeSection}
            />
            <NavItem 
              ItemName='Projects' 
              ItemLink='#project' 
              onClick={clickHandler}
              activeSection={activeSection}
            />
            <NavItem 
              ItemName='Contact' 
              ItemLink='#contact' 
              onClick={clickHandler}
              activeSection={activeSection}
            />
        </ul>
    </nav>
  )
}

export default Navbar;