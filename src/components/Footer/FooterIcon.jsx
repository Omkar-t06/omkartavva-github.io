import React from 'react'

function FooterIcon({refLink, Icon}) {
  return (
    <a 
        href={refLink}
        target="_blank"
        rel="noopener noreferrer"
    >
        <Icon className="h-5 w-5 text-teal dark:text-light-cyan" />
    </a>
  )
}

export default FooterIcon