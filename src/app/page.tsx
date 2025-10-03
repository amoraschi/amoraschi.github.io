import Image from 'next/image'
import HeaderContainer from '@/components/header/header-container'
import HeroTitle from '@/components/text/hero-title'
import HeroSubtitle from '@/components/text/hero-subtitle'

export default function Home () {
  return (
    <main
      className='min-h-screen grid items-center bg-gray-950 lg:grid-cols-7'
    >
      <HeaderContainer />
      <div
        className='flex flex-col items-start mx-auto px-4 lg:col-span-4 self-end lg:self-center'
      >
        <HeroTitle />
        <HeroSubtitle />
      </div>
      <div
        className='flex justify-center px-4 lg:col-span-3'
      >
        <Image
          src='https://avatars.githubusercontent.com/u/68395930?v=4'
          alt='Angelo Sho Moraschi'
          width={460}
          height={460}
          className='rounded-lg border-4 border-gray-600/70 hover:border-blue-500 transition'
        />
      </div>
    </main>
  )
}
