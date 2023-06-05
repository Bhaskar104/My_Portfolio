import React from 'react'
import image from '../images/Project1.png'

function Projects() {
  return (
    <div className='mx-80 flex  flex-col justify-center' >
      <p className=' md:text-xl md:hover:text-2xl transition ease-in-out delay-75 hover:text-4xl mt-20 text-3xl font-poppins'>My Projects</p>
      <div className=' text-center mt-20 mb-40 shadow-lg hover:shadow-fuchsia-700'>
        <div><a className='w-auto h-auto ' target='_blank' href="https://comforting-beignet-61644a.netlify.app/#"><img src={image} alt="no image" /></a></div>
      </div>
    </div>
  )
}

export default Projects
