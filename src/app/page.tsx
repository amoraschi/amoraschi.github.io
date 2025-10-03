import Image from 'next/image'
import Link from 'next/link'
import { Github, Linkedin } from 'lucide-react'
import HeaderContainer from '@/components/header/header-container'
import HeroTitle from '@/components/text/hero-title'
import HeroSubtitle from '@/components/text/hero-subtitle'

const socials = [
  {
    name: 'GitHub',
    href: 'https://github.com/amoraschi',
    icon: (
      <Github
        size={20}
        strokeWidth={1.25}
      />
    )
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/amoraschi/',
    icon: (
      <Linkedin
        size={20}
        strokeWidth={1.25}
      />
    )
  }
]

export default function HomePage () {
  return (
    <main
      className='min-h-screen grid items-center bg-gray-950 lg:grid-cols-7'
    >
      <HeaderContainer />
      <div
        className='flex flex-col items-start mx-auto mt-4 px-10 lg:col-span-4 self-end lg:self-center lg:mt-0'
      >
        <HeroTitle />
        <HeroSubtitle />
        <div
          className='flex gap-2 mt-2'
        >
          {
            socials.map((social, index) => (
              <Link
                key={index}
                href={social.href}
                target='_blank'
                className='flex items-center text-white p-2 border-2 border-gray-400/30 rounded-lg hover:bg-gray-400/30 hover:border-transparent transition'
              >
                {social.icon}
              </Link>
            ))
          }
        </div>
      </div>
      <div
        className='flex justify-center px-4 lg:col-span-3'
      >
        <Image
          src='https://avatars.githubusercontent.com/u/68395930?v=4'
          alt='Angelo Sho Moraschi'
          width={460}
          height={460}
          className='rounded-lg border-4 border-gray-600/70 hover:border-blue-500 transition w-5/6'
        />
      </div>
    </main>
  )
}
