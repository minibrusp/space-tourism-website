import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'

const sizeMap = new Map()
  sizeMap.set('small', 0)
  sizeMap.set('large', 1)




export default function Button({text, destination, size}) {

  const sizesBtnContainer = useMemo(() => {
    return [
      {
        'base': '150px',
        'medium': '150px',
        'large': '150px'
      },
      {
        'base': '150px',
        'medium': '242px',
        'large': '274px'
      },
    ]
  }, [])

  const sizesBtnText = useMemo(() => {
    return [
      {
        'base': '20px',
        'medium': '20px',
        'large': '274px'
      },
      {
        'base': '20px',
        'medium': '32px',
        'large': '274px'
      },
    ]
  }, [])
  
  return (
    <div className={`relative block mx-auto mt-[81px] h-[${sizesBtnContainer[sizeMap.get(size)].base}] w-[${sizesBtnContainer[sizeMap.get(size)].base}] z-[5] after:bg-white after:w-full after:h-full after:absolute after:block after:rounded-full after:top-0 after:left-0 after:z-[-1] after:opacity-[10.36%] after:transition-transform after:duration-500 after:ease-out hover:after:scale-150 md:h-[${sizesBtnContainer[sizeMap.get(size)].medium}] md:w-[${sizesBtnContainer[sizeMap.get(size)].medium}] lg:m-0 lg:h-[${sizesBtnContainer[sizeMap.get(size)].large}] lg:w-[${sizesBtnContainer[sizeMap.get(size)].large}]`}>
      <Link className={`font-bellefair text-secondary text-[${sizesBtnText[sizeMap.get(size)].base}] uppercase h-full w-full rounded-full bg-white flex justify-center items-center tracking-[1.25px] md:tracking-[2px] md:text-[${sizesBtnText[sizeMap.get(size)].medium}]`} to={destination}>
        <span>
          {text}
        </span>
      </Link>
    </div>
  )
}
