import { Github } from 'lucide-react'
import Link from 'next/link'
import Text from '@/app/components/ui/text'

export default function FooterSection () {
  return (
    <div
      className='p-2 flex justify-between items-center'
    >
      <Text
        className='text-gray-400 text-sm'
      >
        © Angelo Moraschi 2024. All rights reserved.
      </Text>
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
