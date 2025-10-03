'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Github } from 'lucide-react'

interface ProjectCardProps {
  title: string
  description: string
  github: string
  img?: string
}

export default function ProjectCard ({
  title,
  description,
  github,
  img
}: Readonly<ProjectCardProps>) {
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <div
      className={`border-2 border-gray-700 rounded-lg p-4 m-2 hover:border-blue-500 transition ${img == null && 'h-fit'}`}
    >
      {
        img && (
          <Image
            src={img}
            alt={title}
            width={1920}
            height={1080}
            className='rounded-lg mb-4'
            onClick={handleClick}
          />
        )
      }
      <h1
        className='text-white font-bold text-xl'
      >
        {title}
      </h1>
      <p
        className='text-gray-400 mt-2 mb-4'
      >
        {description}
      </p>
      <Link
        href={github}
        target='_blank'
        className='flex items-center w-fit text-white p-2 border-2 border-gray-400/30 rounded-lg hover:bg-gray-400/30 hover:border-transparent transition'
      >
        <Github
          size={20}
          strokeWidth={1.25}
        />
      </Link>
      {
        open && img && (
          <div
            className='fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50'
            onClick={handleClick}
          >
            <Image
              src={img}
              alt={title}
              width={1920}
              height={1080}
              className='bg-gray-900 rounded-lg w-full'
            />
          </div>
        )
      }
    </div>
  )
}
