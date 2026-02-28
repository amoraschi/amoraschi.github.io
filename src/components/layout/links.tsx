import Link from 'next/link'

export default function Links () {
  return (
    <div
      className='fixed top-0 right-0 px-4 py-3 flex gap-4 text-secondary'
    >
      <Link
        href='/'
        className='hover:underline'
      >
        HOME
      </Link>
      <Link
        href='/projects'
        className='hover:underline'
      >
        PROJECTS
      </Link>
      <Link
        href='/about'
        className='hover:underline'
      >
        ABOUT
      </Link>
    </div>
  )
}
