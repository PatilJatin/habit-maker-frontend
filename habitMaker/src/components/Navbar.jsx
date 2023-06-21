import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between text-white bg-gray-800 w-[100%] '>
        <div className='basis-[20%]'>
           logo
        </div>
        <div className='w-[80%] rounded-full object-fit basis-[20%]' >
           <img src="https://picsum.photos/id/237/50/50" alt="" className='rounded-full' />
        </div>
    </nav>
  )
}

export default Navbar