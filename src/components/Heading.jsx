import React from 'react'

export default function Heading({ title, order }) {
  return (
    <h1 className='font-barlowCondensed tracking-[2.7px] text-white uppercase mb-8 md:text-left md:ml-9 md:text-xl md:tracking-[3.38px] md:mb-[60px]'>
        <span className='mr-4 opacity-25 font-bold'>{ order }</span>
          <span>
            { title }
          </span>
    </h1>
  )
}
