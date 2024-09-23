import React from 'react'

function FooterIcon({refLink, Icon}) {
  return (
    <a 
        href={refLink}
        target="_blank"
        rel="noopener noreferrer"
        className='hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-300'
    >
        <Icon className="h-5 w-5" />
    </a>
  )
}

export default FooterIcon