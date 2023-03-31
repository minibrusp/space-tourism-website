import React from 'react'
import { Link } from 'react-router-dom'

export default function Button() {
  return (
    <div className='relative block mx-auto mt-[81px] h-[150px] w-[150px] z-[5] after:bg-white after:w-full after:h-full after:absolute after:block after:rounded-full after:top-0 after:left-0 after:z-[-1] after:opacity-[10.36%] after:transition-transform after:duration-500 after:ease-out hover:after:scale-150'>
      <Link className='font-bellefair text-secondary text-[20px] uppercase h-full w-full rounded-full bg-white flex justify-center items-center tracking-[1.25px]' to="destination">
        <span>
          Explore
        </span>
      </Link>
    </div>
  )
}
