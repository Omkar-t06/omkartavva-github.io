import React from 'react'

function SectionalCards({sectionId,children}) {
  return (
    <section 
      id = {sectionId} 
      className = 'm-4 p-4 rounded-md shadow-md dark:border-charcoal dark:border-solid dark:border-2'
    >
      {children}
    </section>
  )
}

export default SectionalCards