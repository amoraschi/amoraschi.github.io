import Image from 'next/image'
import Link from 'next/link'

interface ProjectProps {
  image: string
  title: string
  href: string
  description: JSX.Element
}

export default function Project ({
  image,
  title,
  href,
  description
}: ProjectProps) {
  return (
    <>
      <Link
        href={href}
        target='_blank'
      >
        <Image
          src={image}
          alt={title}
          fill
          priority
          className='w-screen h-screen'
        />
      </Link>
      <div
        className='absolute top-0 left-0 p-4 text-black bg-white flex flex-col rounded-br-lg'
      >
        <span
          className='font-bold text-4xl'
        >
          {title}
        </span>
        <span
          className='text-xl'
        >
          {description}
        </span>
      </div>
    </>
  )
}
