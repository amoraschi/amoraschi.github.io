import Link from 'next/link'
import { Github } from 'lucide-react'
import HeaderButton from '@/components/header/header-button'

const links = [
  {
    label: 'Home',
    href: '/'
  },
  {
    label: 'Projects',
    href: '/projects'
  },
  {
    label: 'Education',
    href: '/education'
  }
]

export default function HeaderContainer () {
  return (
    <div
      className='absolute top-0 w-full flex justify-center'
    >
      <div
        className='flex justify-between items-center w-full m-2 bg-gray-600/70 rounded-full shadow-lg border-2 border-gray-400/30 lg:w-1/2'
      >
        <div
          className='flex lg:gap-4'
        >
          {
            links.map(({ label, href }, index) => (
              <HeaderButton
                key={index}
                label={label}
                href={href}
              />
            ))
          }
        </div>
        <Link
          href='https://github.com/amoraschi'
          target='_blank'
          className='flex items-center h-full text-white p-2 rounded-full hover:bg-gray-400/30 transition lg:p-2'
        >
          <Github
            size={20}
            strokeWidth={1.25}
          />
        </Link>
      </div>
    </div>
  )
}
