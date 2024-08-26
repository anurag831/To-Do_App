import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-blue-700 flex justify-between py-4 px-8 mb-3'>
      <div className=' '>
        <h1 className='text-white font-bold text-2xl cursor-pointer'>iDo-uDo</h1>
      </div>
      <div className=' text-white text-lg flex gap-9 font-bold'>
        <span className='cursor-pointer'>Home</span>
        <span className='cursor-pointer'>Todos</span>
      </div>
    </div>
  )
}

export default Navbar
