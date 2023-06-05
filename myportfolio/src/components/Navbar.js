import React from 'react'
import { Link, Outlet } from 'react-router-dom'


function Navbar() {
  return (
    <>
    <div className=' p-1 sticky top-0 bg-white font-poppins w-full shadow-lg px-40' >
        <nav className='flex  justify-between  my-5  '>
            <div className='text-3xl font-semibold '>BHASKAR</div>
            <ul className='flex gap-4 font-mono font-semibold hover: cursor-pointer  '>
                <li className=' hover:text-sky-600 active:text-sky-600'><Link to="/home">Home</Link> </li>
                <li className=' hover:text-sky-600 active:text-sky-600'><Link to="/projects">Projects</Link></li>
                <li className=' hover:text-sky-600 active:text-sky-600'><Link to="/about">About</Link></li>
                <li className=' hover:text-sky-600 active:text-sky-600'><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    <Outlet/>
    </div>
    </>
  )
}

export default Navbar
