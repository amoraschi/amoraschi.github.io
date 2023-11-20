import Card from './Card'
import { HiOutlineUser } from 'react-icons/hi'

interface StatsProps {
  stats: {
    followers: number
    following: number
    public_repos: number
    bio: string
    name: string
    company: string
  }
}

export default function Stats ({ stats }: StatsProps) {
  return (
    <div
      className='absolute inset-0 top-[100vh] flex flex-col items-center w-full h-52'
    >
      <h1
        className='text-2xl text-white font-light'
      >
        Github Stats
      </h1>
      <div
        className='flex items-center justify-center w-full m-1'
      >
        <Card
          title='Followers'
          content={stats.followers.toString()}
          icon={<HiOutlineUser />}
        />
        <Card
          title='Following'
          content={stats.following.toString()}
          icon={<HiOutlineUser />}
        />
        <Card
          title='Repositories'
          content={stats.public_repos.toString()}
          icon={<HiOutlineUser />}
        />
      </div>
    </div>
  )
}
