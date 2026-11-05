import Image from 'next/image'
import Link from 'next/link'

interface ProjectProps {
  image?: string
  title: string
  description: string
  github?: string
  demo?: string
}

export default function Project ({
  image,
  title,
  description,
  github,
  demo
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
        <p
          className='text-secondary'
        >
          {description}
        </p>
        {
          (demo != null || github != null) && (
            <Link
              href={demo ?? github ?? ''}
              target='_blank'
              className='text-blue-500 hover:underline'
            >
              {demo != null ? 'View project' : 'View on GitHub'}
            </Link>
          )
        }
      </div>
    </div>
  )
}
