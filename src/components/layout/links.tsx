'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Github, Linkedin } from 'lucide-react'
import { links } from '@/utils/data'

export default function Links () {
  const pathname = usePathname()

  return (
    <div
      className='fixed top-0 right-0 px-4 py-3 flex items-center gap-6 text-secondary bg-background rounded-bl transition-colors'
    >
      <div
        className='flex items-center gap-4'
      >
        {
          links.map((link) => {
            const href = `/${link === 'home' ? '' : link}`
            const linkStyles = pathname === href ? 'text-primary' : 'hover:text-primary'

            return (
              <Link
                key={link}
                href={href}
                className={linkStyles}
              >
                {link.toUpperCase()}
              </Link>
            )
          })
        }
      </div>
      <div className='w-px h-5 bg-secondary' />
      <div
        className='flex items-center gap-4'
      >
        <Link
          href='https://linkedin.com/in/amoraschi'
          target='_blank'
          className='hover:text-primary'
        >
          <Linkedin
            className='w-5 h-5'
          />
        </Link>
        <Link
          href='https://github.com/amoraschi'
          target='_blank'
          className='hover:text-primary'
        >
          <Github
            className='w-5 h-5'
          />
        </Link>
      </div>
    </div>
  )
}
