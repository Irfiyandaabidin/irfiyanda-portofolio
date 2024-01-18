'use client'
import Image from 'next/image'
import React from 'react'
import ImageIllustration from '../../public/illustration_programmer.png'
import LocationIcon from '@mui/icons-material/LocationOn'
import { GitHub, Instagram, LinkedIn } from '@mui/icons-material'
import Link from 'next/link'
import TypeIt from 'typeit-react'

const HomePage = () => {
  return (
    <div id='home' className='items-center flex-col-reverse h-screen flex lg:flex-row gap-5 lg:gap-48 mx-auto justify-center container px-4 md:py-20 md:px-8 max-w-7xl'>
      <div className='gap-5' data-aos='fade-up'>
        <h1 className='text-4xl md:text-6xl font-bold py-2 md:py-5'>
          Hi, I&apos;m
          <span className='text-blue-500'>
            <TypeIt
              getBeforeInit={(instance) => {
                instance.type(' Ifiyanda ').move(-8, {speed: 960}).type('r').move(8, {speed: 860})
                return instance
              }}
            />  
          </span>
        </h1>
        <h1 className='text-2xl md:text-4xl pb-2 md:pb-5 font-semibold'>
          <span className='text-blue-500'>Fullstack</span> Developer
        </h1>
        <p className='pb-5 text-lg'>
          I&apos;m a Junior Fullstack Developer with a high enthusiasm for crafting innovative technology solutions. I have experience in web development and a keen desire for continuous learning and growth. Welcome to my portfolio!
        </p>
        <div className='pb-5 ps-2 flex flex-row'>
          <LocationIcon/>
          <p>Pemalang, Central Java, Indonesian</p>
        </div>
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
      <div className='mx-auto w-full md:w-full md:block flex justify-center' data-aos='fade-left'>
        <div className="relative w-1/2 md:w-full aspect-square">
          <Image className='rounded-lg' alt='illustration' objectFit='cover' layout='fill' src={ImageIllustration}/>
        </div>
      </div>
    </div>
  )
}

export default HomePage