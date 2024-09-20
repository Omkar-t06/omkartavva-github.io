import React from 'react'
import ThemeUIBtn from './ThemeUIBtn'
import Navbar from './Navbar'

function Header() {
  return (
    <>
    <header className='bg-ivory dark:bg-dark-navy shadow-md'>
      <section className='p-4 flex justify-between items-center text-soft-black dark:text-light-cyan'>
        <h1 className="text-3xl font-bold text-teal dark:text-light-cyan">&lt;Omkar/&gt;</h1>
        <ThemeUIBtn/>
      </section>
      <hr className='border-t-2 border-teal dark:border-light-cyan'/>
    </header>
    <Navbar/>
    </>
  )
}

export default Header