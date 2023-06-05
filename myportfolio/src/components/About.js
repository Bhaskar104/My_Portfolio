import React from 'react'
import {AiFillGithub,AiFillLinkedin} from 'react-icons/ai'

function About() {
  return (
    <div>
      <div className='flex justify-center align-middle text-4xl'>
      <a href="https://github.com/Bhaskar104" target='_blank'><AiFillGithub/></a>
      <a href="https://www.linkedin.com/in/bhaskar-hegde-a24359159/" target='_blank'><AiFillLinkedin/></a>
    </div>
    </div>
  )
}

export default About
