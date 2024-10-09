import React from 'react'

function Socials({ text, link }: { text: string; link: string}) {
  return (
    <li className='py-2 px-5 rounded-full border-[1px] border-primary'>
        <a href={link} target="_blank">{text}</a>        
    </li>
  )
}

export default Socials