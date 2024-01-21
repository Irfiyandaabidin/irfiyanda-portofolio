import Image from 'next/image'
import React from 'react'
import Fotoku from '../../public/fotoku.jpeg'

const About = () => {
  return (
    <div className='py-5 h-screen bg-slate-100 pt-5' id='about'>
      <div className='flex justify-center items-center'>
        <button className='bg-slate-400 top-32 px-3 py-2 rounded-lg text-white text-lg'>About Me</button>
      </div>
      <div className='overflow-hidden h-full md:flex md:flex-col items-center py-10 lg:py-20 lg:flex-row gap-5 lg:gap-48 mx-auto justify-center container px-4 md:py-20 md:px-8 max-w-7xl'>
        <div data-aos='fade-right' className=' mx-auto relative w-3/4 h-1/2 lg:w-1/4 overflow-hidden rounded-md'>
          <Image className='hover:scale-125 ease-in duration-300' alt='foto irfiyanda' layout='fill' objectFit='cover' src={Fotoku} />
        </div>
        <div data-aos='fade-left' className='lg:w-1/2'>
          <h1 className='text-blue-500 text-2xl md:text-4xl font-bold my-2'>Irfiyanda <span className='text-black'>Abidin</span></h1>
          <p>
          As a final semester student with a deep interest in Backend Development, I have honed my skills in building APIs using Express.js, Spring Boot Kotlin, and .NET. My internship experience since July 2023 has broadened my understanding of the software development world. Currently, my primary focus is on continuous self-improvement and achieving short-term goals as a Senior Backend Developer capable of making a positive impact through technological solutions. While aspiring to be a full-stack developer, my inclination leans towards backend development.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About