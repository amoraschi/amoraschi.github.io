import { HiOutlineLocationMarker } from 'react-icons/hi'
import Heading from '../Heading/Heading'

interface HomeProps {
  stats: {
    followers: number
    following: number
    public_repos: number
    bio: string
    name: string
    company: string
  }
}

export default function Home ({ stats }: HomeProps) {
  return (
    <div
      className={`absolute inset-0 select-none justify-center bg-[url('https://wallpapercave.com/wp/wp4816771.jpg')] bg-cover bg-no-repeat bg-center`}
    >
      <div
        className='flex flex-col items-center justify-center w-full h-full bg-black bg-opacity-50'
      >
        <Heading
          content={`${stats.name ?? 'amoraschi'}'s GitHub Page`}
        />
        <h1
          className='text-xl text-white font-light'
        >
          {stats.bio ?? 'Software Engineer Student'}
        </h1>
        <div
          className='flex items-center justify-center w-full m-1'
        >
          <HiOutlineLocationMarker />
          <h1
            className='text-l text-white font-light ml-1'
          >
            {stats.company ?? 'University of Seville'}
          </h1>
        </div>
      </div>
    </div>
  )
}
