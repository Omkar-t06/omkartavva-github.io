import React from 'react'
import ThemeUIBtn from './ThemeUIBtn'

function Header() {
  return (
    <header className='bg-ivory p-4 flex justify-between text-soft-black dark:bg-dark-navy border-b-4 border-soft-black dark:border-light-cyan'>
        <h1 className="text-3xl font-bold text-teal dark:text-light-cyan">&lt;Omkar/&gt;</h1>
        <ThemeUIBtn/>
    </header>
  )
}

export default Header