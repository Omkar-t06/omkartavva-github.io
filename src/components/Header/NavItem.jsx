import React from 'react'

function NavItem({ItemName, ItemLink ,onClick, activeSection}) {
  return (
    <li>
      <a 
        href={ItemLink} 
        className='p-4 text-xl items-center font-medium hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-300'
        onClick={() => onClick(ItemLink)}
        aria-label={ItemName}
      >
        <span className='items-center m-2 p-1 rounded-full hover:bg-slate-200 dark:hover:bg-slate-500'>
          {ItemName}
        </span>
      </a>
    </li>
  )
}

export default NavItem