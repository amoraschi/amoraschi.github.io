'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTheme } from 'next-themes'
import { Github, Linkedin, Moon, Sun } from 'lucide-react'
import { links } from '@/utils/data'

export default function Links () {
  const pathname = usePathname()
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = mounted && resolvedTheme === 'dark'
  const toggleTheme = () => setTheme(isDark ? 'light' : 'dark')

  return (
    <div
      className='fixed top-0 right-0 px-4 py-3 flex items-center gap-4 md:gap-6 text-sm md:text-base text-secondary bg-background rounded-bl transition-colors'
    >
      <div
        className='flex gap-2 md:gap-4'
      >
        {
          links.map((link) => {
            const href = `/${link === 'home' ? '' : link}`
            const linkStyles = pathname === href || (link !== 'home' && pathname.startsWith(href)) ? 'text-primary' : 'hover:text-primary'

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
      <div className='hidden md:block w-px h-5 bg-secondary' />
      <div
        className='flex items-center gap-2 md:gap-4'
      >
        <Link
          href='https://linkedin.com/in/amoraschi'
          target='_blank'
          className='hover:text-primary'
        >
          <Linkedin
            className='w-4.5 h-4.5 md:w-5 md:h-5'
          />
        </Link>
        <Link
          href='https://github.com/amoraschi'
          target='_blank'
          className='hover:text-primary'
        >
          <Github
            className='w-4.5 h-4.5 md:w-5 md:h-5'
          />
        </Link>
        <button
          onClick={toggleTheme}
          className='hover:text-primary cursor-pointer'
          aria-label='Toggle theme'
        >
          {
            isDark ? (
              <Sun className='w-4.5 h-4.5 md:w-5 md:h-5' />
            ) : (
              <Moon className='w-4.5 h-4.5 md:w-5 md:h-5' />
            )
          }
        </button>
      </div>
    </div>
  )
}
