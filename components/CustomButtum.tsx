import React from 'react'

const CustomButtum = ({text, containerStyles} : {text: string; containerStyles: string}) => {
  return (
    <button className={`${containerStyles} group relative cursor-pointer overflow-hidden bg-accent`}>
      <span className='ease absolute top-1/2 h-0 w-64 origin-center -translate-x-20
      rotate-45 bg-black transition-all duration-300 group-hover:h-64 group-hover:-translate-y-36'></span>
      <span className='relative ease text-white transition duration-300 group-hover:text-white'>{text}</span>
    </button>
  )
}

export default CustomButtum