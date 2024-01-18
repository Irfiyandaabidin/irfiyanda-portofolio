import Link from 'next/link'
import React from 'react'
import { GitHub, Instagram, LinkedIn } from '@mui/icons-material'

const Footer = () => {
  return (
    <div className='px-5 flex flex-col gap-6 py-10 mt-10 md:gap-14 lg:gap-32 md:flex-row justify-center bg-purple-50 shadow-inner bottom-0'>
      <div>
        <h3 className='font-extrabold'>Irfiyanda Abidin</h3>
        <p className='font-semibold'>Junior Fullstack Developer</p>
        <div className='gap-5 ps-2 flex flex-row py-2'>
        <Link href='https://github.com/Irfiyandaabidin'>
          <GitHub/>
        </Link>
        <Link href='https://www.instagram.com/irfi_yanda/'>
          <Instagram/>
        </Link>
        <Link href='https://www.linkedin.com/in/irfi-yanda-793616236/'>
          <LinkedIn/>
        </Link>
        </div>
      </div>
      <div>
        <h3 className='font-extrabold'>Information</h3>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Education</li>
          <li>Experience</li>
        </ul>
      </div>
      <div>
        <h3 className='font-bold'>Address</h3>
        <p>Pemalang</p>
        <p>Jawa Tengah - Indonesia</p>
        <p>085217257228</p>
        <p>irfidupang@gmail.com</p>
      </div>
    </div>
  )
}

export default Footer