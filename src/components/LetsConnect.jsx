import { MoveLeft } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const LetsConnect = () => {
  return (
    <div className='w-full flex py-10 justify-end relative'>
    <Link to={'/contact'} className="px-4 py-8 border border-zinc-800  relative w-2/3 lg:w-1/2 connectBtn border-r-0 rounded-s-lg flex justify-start items-center">
    <span className='border border-zinc-800 rounded-full absolute -left-7 top-5 bg-black p-2'>
    <MoveLeft height={40} width={40} />
    </span>
    <h1 className='text-2xl'>Let&apos;s Connect</h1>
    </Link>
    </div>
  )
}

export default LetsConnect