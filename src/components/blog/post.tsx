import Link from 'next/link'
import Image from 'next/image'

export default function Post ({
  slug,
  title,
  description,
  image,
  date
}: Post) {
  return (
    <div
      className='flex flex-col md:flex-row'
    >
      <Image
        src={image ?? '/post.png'}
        alt={title}
        width={400}
        height={300}
        className='rounded'
      />
      <div
        className='relative p-4'
      >
        <Link
          href={`/post?slug=${slug}`}
          className='text-2xl font-bold text-blue-500 hover:underline'
        >
          {title}
        </Link>
        <p
          className='text-secondary'
        >
          {description}
        </p>
        <p
          className='lg:absolute bottom-4 left-4 text-sm'
        >
          {new Date(date).toLocaleDateString(undefined, {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </p>
      </div>
    </div>
  )
}
