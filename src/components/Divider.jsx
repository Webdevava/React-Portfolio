import React from 'react'

const Divider = ({name}) => {
  return (
    <div className="flex border-b-2 border-zinc-700 px-20 mt-8 ">
    <p className='text-3xl lg:text-5xl my-4 marby'>{name}</p>
    </div>
  )
}

export default Divider