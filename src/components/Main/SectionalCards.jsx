import React from 'react'

function SectionalCards({sectionId,style, children}) {
  return (
    <section 
      id = {sectionId} 
      className = {`m-4 p-4 rounded-2xl shadow-md dark:border-charcoal dark:border-solid dark:border-2 ${style ? style : ''}`}
    >
      {children}
    </section>
  )
}

export default SectionalCards