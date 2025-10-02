import HeaderContainer from '@/components/header/header-container'
import HeroTitle from '@/components/text/hero-title'

export default function Home () {
  return (
    <main
      // className='min-h-screen bg-gray-950'
      className='min-h-screen grid grid-cols-6 bg-gray-950'
    >
      <HeaderContainer />
      <div
        className='col-span-4 flex justify-center items-center'
      >
        <HeroTitle />
      </div>
    </main>
  )
}
