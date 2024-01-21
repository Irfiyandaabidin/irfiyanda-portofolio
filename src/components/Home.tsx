'use client'
import Image from 'next/image'
import React from 'react'
import Fotoku from '../../public/fotoku-removebg.png'
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
                instance.type(' Ifiyanda 👋').move(-9, {speed: 960}).type('r').move(9, {speed: 860})
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
        <div className="overflow-hidden relative w-1/2 md:w-1/2 lg:w-full aspect-square" 
          style={{
            borderRadius: '50%',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'repeat',
            backgroundImage: `url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 1000 1000' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='c' gradientTransform='rotate(150 .5 .5)'%3E%3Cstop offset='0%' stop-color='%23BED6FC'/%3E%3Cstop offset='100%' stop-color='%23B3A1F6'/%3E%3C/linearGradient%3E%3CclipPath id='b'%3E%3Cpath fill='currentColor' d='M771.5 564.5q-117.5 64.5-158 208t-170 96.5q-129.5-47-209-145T161 502.5Q167 379 209 224t192-84.5Q551 210 674.5 230t169 145q45.5 125-72 189.5Z'/%3E%3C/clipPath%3E%3Cfilter id='a' x='-50vw' y='-50vh' width='100vw' height='100vh'%3E%3CfeFlood flood-color='%23fff' result='neutral-gray'/%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2.5' numOctaves='100' stitchTiles='stitch' result='noise'/%3E%3CfeColorMatrix in='noise' type='saturate' values='0' result='destaturatedNoise'/%3E%3CfeComponentTransfer in='desaturatedNoise' result='theNoise'%3E%3CfeFuncA type='table' tableValues='0 0 0.4 0'/%3E%3C/feComponentTransfer%3E%3CfeBlend in='SourceGraphic' in2='theNoise' mode='soft-light' result='noisy-image'/%3E%3C/filter%3E%3C/defs%3E%3Cg filter='url(%23a)' clip-path='url(%23b)'%3E%3Cpath fill='url(%23c)' d='M771.5 564.5q-117.5 64.5-158 208t-170 96.5q-129.5-47-209-145T161 502.5Q167 379 209 224t192-84.5Q551 210 674.5 230t169 145q45.5 125-72 189.5Z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        >
          <Image style={{filter: 'drop-shadow(4px 4px 8px #999999)'}} className='' alt='illustration' objectFit='cover' layout='fill' src={Fotoku}/>
        </div>
      </div>
    </div>
  )
}

export default HomePage