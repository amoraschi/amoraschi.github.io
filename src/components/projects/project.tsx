import Image from 'next/image'
import Link from 'next/link'

interface ProjectProps {
  image?: string
  title: string
  description: string
  github: string
}

export default function Project ({
  image,
  title,
  description,
  github
}: ProjectProps) {
  return (
    <div
      className='flex flex-col md:flex-row'
    >
      {
        image != null && (
          <Image
            src={image}
            alt={title}
            width={400}
            height={300}
            className='rounded'
          />
        )
      }
      <div
        className='p-4'
      >
        <p
          className='text-2xl font-bold'
        >
          {title}
        </p>
        <p className='text-gray-500'>
          {description}
        </p>
        <Link
          href={github}
          target='_blank'
          className='text-blue-500 hover:underline'
        >
          View on GitHub
        </Link>
      </div>
    </div>
  )
}
