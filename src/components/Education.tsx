import { PrismaClient } from '@prisma/client'
import Image from 'next/image'
import React from 'react'
const prisma = new PrismaClient();

const getEducation = async() => {
  const res = await prisma.education.findMany({
    select: {
      id: true,
      company: true,
      description: true,
      startDate: true,
      endDate: true,
      position: true,
      formal: true,
      tag: true
    }
  });
  return res;
}

const Education = async() => {
  const education = await getEducation();
  const data = [
    {
      id: 1,
      company: 'Universitas AMIKOM Yogyakarta',
      description: 'Currently, I am completing my D3 in Information Engineering at AMIKOM University Yogyakarta. I am in the final semester, focusing on honing technical skills and knowledge in the field of Backend Development.',
      start_date: '2021-07',
      end_date: '2024-07',
      position: 'D3 Teknik Informatika',
      formal: true,
      tag: 'Codeigniter, Bootstrap, PHP, MySQL',
      imageCompany: 'https://ik.imagekit.io/ku9epk6lrv/logo_amikom_full_color.png?updatedAt=1705585630867'
    },
    {
      id: 2,
      company: 'Productzilla Academy',
      description: 'Additionally, I have undertaken non-formal education at Productzilla Academy, where I am actively engaged in refining my skills as a Backend Engineer. his hands-on experience complements my formal education, providing practical insights into the latest industry practices and technologies.',
      start_date: '2023-02',
      end_date: '2023-07',
      position: 'Backend Engineer',
      formal: false,
      tag: 'ExpressJS, NodeJS, Postman, API, Swagger, Github, Testing, MongoDB',
      imageCompany: 'https://ik.imagekit.io/ku9epk6lrv/productzilla_logo.jpeg?updatedAt=1705586019858'
    },
    {
      id: 3,
      company: 'Binar Academy',
      description: 'I have also completed the Fullstack Web Development program at Binar Academy. Throughout this period, I delved into comprehensive skills in web development, covering both the frontend and backend aspects.',
      start_date: '2023-08',
      end_date: '2024-01',
      position: 'Fullstack Web Development',
      formal: false,
      tag: 'ExpressJS, ReactJS, Tailwindcss, NextJS, PostgreSQL, MongoDB, NodeJS, Bootstrap, Github, Postman, Swagger, Testing, Midtrans, ImageKit',
      imageCompany: 'https://ik.imagekit.io/ku9epk6lrv/logo-binar.png?updatedAt=1705585601213'
    }
  ]

  return (
    <div className='pt-5' id='education'>
      <div className='flex flex-col items-center mx-5'>
        <button className='px-3 py-2 rounded-lg text-white bg-slate-400 text-lg mb-8 md:mb-14'>Education</button>
        <p>formal and non-formal education that I have completed and that is still ongoing</p>
        {data.map((education, index) => (
          <div key={education.id} className={`w-full lg:w-1/2 shadow-xl p-5 my-2 rounded-sm md:flex ${index % 2 == 0 ? 'flex-row-reverse' : ''}`}>
            <div className={`w-full flex md:justify-center md:items-center ${index % 2 != 0 ? 'justify-end' : 'justify-start'} py-5`}>
              <div className='relative aspect-square w-1/4 md:w-1/4 rounded-md overflow-hidden'>
                <Image data-aos='fade-up' alt='image' src={education.imageCompany} layout='fill'/>
              </div>
            </div>
            <div className='w-full'>
              <h1 className='text-lg font-bold'>{education.company}</h1>
              <h1 className='text-md font-semibold'>{education.position}</h1>
              <p className='my-2'>{education.description}</p>
              {education.tag.split(',').map((tag, index) => (
                <button key={index} className='bg-slate-800 mx-2 my-1 py-1 px-2 rounded-md text-white'>
                  <p>{tag}</p>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Education