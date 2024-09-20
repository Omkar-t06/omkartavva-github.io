import React from 'react'

function NavItem({ItemName, ItemLink}) {
  return (
    <li>
      <a href={ItemLink} className='p-3 hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-300 active:text-orange-500 active:dark:text-orange-400'>
        {ItemName}
      </a>
    </li>
  )
}

export default NavItem