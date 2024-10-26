import React from 'react'

function NavItem({ItemName, ItemLink}) {
  return (
    <li>
      <a 
        href={ItemLink} 
        className='flex p-2 text-xl font-medium items-center transition-colors duration-300 hover:text-orange-500 dark:hover:text-orange-400'
        aria-label={ItemName}
      >
        <span className='flex items-center justify-center p-1 rounded-full hover:bg-slate-200 dark:hover:bg-slate-500'>
          {ItemName}
        </span>
      </a>
    </li>
  )
}

export default NavItem