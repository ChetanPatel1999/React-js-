import React from 'react'

const Navbar = () => {
    return (
        <div className='p-4 bg-gray-900 flex gap-5'>
            <button className='bg-white text-black py-2 px-4 rounded font-black'  >NewsMag</button>
            <button className='text-gray-200 font-medium text-sm' >Technology</button>
            <button className='text-gray-200 font-medium text-sm' >Business</button>
            <button className='text-gray-200 font-medium text-sm' >Health</button>
            <button className='text-gray-200 font-medium text-sm' >Sports</button>
            <button className='text-gray-200 font-medium text-sm' >Entertainment</button>
        </div>
    )
}

export default Navbar
