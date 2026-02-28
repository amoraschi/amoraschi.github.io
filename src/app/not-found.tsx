import Link from 'next/link';

export default function NotFoundPage () {
  return (
    <main
      className='h-screen grid place-items-center'
    >
      <div
        className='flex flex-col gap-2 text-center'
      >
        <p
          className='text-5xl font-bold'
        >
          NOT FOUND
        </p>
        <p
          className='text-2xl text-secondary'
        >
          This page is not available.
        </p>
        <Link
          href='/'
          className='text-xl hover:underline'
        >
          GO BACK
        </Link>
      </div>
    </main>
  )
}
