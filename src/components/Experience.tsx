import Image from 'next/image'
import React from 'react'

const Experience = () => {
  const data = [
    {
      id: 1,
      position: 'Backend Developer Intern',
      description: 'Creating an API using the Spring Boot framework with the Kotlin language, Participating in discussions with a System Analyst to ensure a deep understanding of system requirements and the developed API.',
      start_date: '2023-07',
      end_date: '2023-10',
      company: 'Berijalan Techno Center',
      image_company: 'https://ik.imagekit.io/ku9epk6lrv/berijalan-logo.png?updatedAt=1705413008928'
    }
  ]
  return (
    <div className='bg-slate-100 pt-5' id='experience'>
      <div className='flex flex-col items-center'>
        <button className='bg-slate-400 px-3 py-2 rounded-lg text-white text-lg'>Experience</button>
        <div className='flex p-10 lg:py-12 items-center justify-center flex-col'>
          <p>this is quick summary my recent experience</p>
          {data.map(experience => (
            <div key={experience.id} className='w-full gap-10 mt-5 md:my-10 md:w-3/4 rounded-md shadow-xl md:flex bg-slate-100'>
              <div data-aos='fade-up' className='w-full md:w-1/3 flex justify-center items-center'>
                <div className="relative w-1/2 aspect-square justify-center items-center">
                  <Image className='w-12 h-7' src={experience.image_company} layout='fill' alt={experience.company}/>
                </div>
              </div>
              <div className='py-5 mx-5 md:py-20 flex-1'>
                <h1 className='text-xl font-bold'>{experience.position}</h1>
                <ul className='list-disc'>
                  {experience.description.split(',').map((description, index) => (
                    <li key={index}>{description}</li>
                    ))}
                </ul>
                <p className='text-slate-800 text-end align-bottom pt-5'>{experience.start_date}--{experience.end_date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Experience