import Image from 'next/image'
import React from 'react'

const Skills = () => {
  const data = [
    {
      id: 1,
      name: 'Javascript',
      url: 'https://ik.imagekit.io/ku9epk6lrv/javascript-logo.png?updatedAt=1705363960655'
    },
    {
      id: 2,
      name: 'NodeJS',
      url: 'https://ik.imagekit.io/ku9epk6lrv/nodejs-logo.png?updatedAt=1705363960182'
    },
    {
      id: 3,
      name: 'ExpressJS',
      url: 'https://ik.imagekit.io/ku9epk6lrv/expressjs-logo.png?updatedAt=1705363960007'
    },
    {
      id: 4,
      name: 'MongoDB',
      url: 'https://ik.imagekit.io/ku9epk6lrv/mongodb-logo.png?updatedAt=1705363960409'
    },
    {
      id: 5,
      name: 'Bootstrap 5',
      url: 'https://ik.imagekit.io/ku9epk6lrv/bootstrap-5.png?updatedAt=1705585269102'
    },
    {
      id: 6,
      name: 'NextJS',
      url: 'https://ik.imagekit.io/ku9epk6lrv/nextjs-icon.png?updatedAt=1705363960594'
    },
    {
      id: 7,
      name: 'TailwindCSS',
      url: 'https://ik.imagekit.io/ku9epk6lrv/tailwindcss-logo.png?updatedAt=1705363960226'
    },
    {
      id: 8,
      name: 'PostgreSQL',
      url: 'https://ik.imagekit.io/ku9epk6lrv/PostgreSQL-Logo.png?updatedAt=1705363960659'
    },
    {
      id: 9,
      name: 'Sequelize',
      url: 'https://ik.imagekit.io/ku9epk6lrv/sequelize-icon.png?updatedAt=1705363960668'
    },
    {
      id: 10,
      name: 'Github',
      url: 'https://ik.imagekit.io/ku9epk6lrv/github-logo.png?updatedAt=1705363960606'
    },
  ]
  return (
    <div className='pt-16 md:pt-5' id='skills'>
      <div className='flex flex-col items-center'>
        <button className='bg-slate-400 px-3 py-2 rounded-lg text-white text-lg'>Skills</button>
        <div className='flex flex-col p-10 lg:py-12 items-center'>
          <p className='mb-10'>
          My proficiency in skills and technology.
          </p>
          <div className="grid grid-cols-3 gap-3 md:grid-cols-6 md:gap-9">
            {data.map(skill => (
              <div key={skill.id} className='flex items-center flex-col md:p-3 bg-transparent shadow-lg md:bg-none md:shadow-none rounded-md'>
                <div data-aos='fade-up' className="relative group w-10 h-10 md:w-16 md:h-16 pt-1">
                  <Image className='absolute group-hover:scale-125 ease-in duration-300' alt={skill.name} src={skill.url} objectFit='cover' layout='fill'/>
                </div>
                <p data-aos='fade-up' className='py-1 md:pt-3 text-sm'>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills