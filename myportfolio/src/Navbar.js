import React from 'react'


function Navbar() {
  return (
    <>
    <div className=' p-1 sticky top-0 bg-white rounded ' >
        <nav className='flex  justify-between mx-15 my-5  font-poppins '>
            <div className='text-3xl font-semibold '>BHASKAR</div>
            <ul className='flex gap-4 text-lg font-semibold hover: cursor-pointer'>
                <li className=' hover:text-sky-600 active:text-sky-600'><a href="#">Home</a> </li>
                <li className=' hover:text-sky-600 active:text-sky-600'><a href="#">Projects</a></li>
                <li className=' hover:text-sky-600 active:text-sky-600'><a href="#">About</a></li>
                <li className=' hover:text-sky-600 active:text-sky-600'><a href="#">Contact</a></li>
            </ul>
        </nav>
    </div>
    </>
  )
}

export default Navbar
