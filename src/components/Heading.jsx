import React from 'react'

export default function Heading({ title, order }) {
  return (
    <h1 className='font-barlowCondensed tracking-[2.7px] text-white uppercase mb-8'>
        <span className='mr-4 opacity-25 font-bold'>{ order }</span>
          <span>
            { title }
          </span>
    </h1>
  )
}
