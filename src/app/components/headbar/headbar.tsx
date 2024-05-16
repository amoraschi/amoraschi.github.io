import HeadbarLink from '@/app/components/headbar/headbar-link'
import { Github } from 'lucide-react'
import Link from 'next/link'

const links = [
  {
    name: '#about',
    url: '/#about'
  },
  {
    name: '#projects',
    url: '/#projects'
  }
]

export default function Headbar () {
  return (
    <div
      className='fixed flex p-4 gap-4 w-full justify-end items-center'
    >
      {
        links.map((link, key) => (
          <HeadbarLink
            key={key}
            href={link.url}
          >
            {link.name}
          </HeadbarLink>
        ))
      }
      <Link
        href='https://github.com/amoraschi'
        target='_blank'
        className='text-gray-400 hover:text-gray-500 transition'
      >
        <Github />
      </Link>
    </div>
  )
}
