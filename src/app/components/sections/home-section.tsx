'use client'

import Typewriter from 'typewriter-effect'
import Text from '@/app/components/ui/text'

export default function HomeSection () {
  return (
    <div
      className='h-[100vh] grid place-items-center'
    >
      <div>
        <Text
          className='text-xl text-gray-500'
        >
          Hi, I'm
        </Text>
        <br />
        <Text
          className='text-6xl font-semibold'
        >
          ANGELO
          <br />
          MORASCHI
        </Text>
        <Text
          className='text-right'
        >
          <Typewriter
            options={{
              strings: [
                'Software Engineering Student',
                'Polyglot (Developer)',
                'Student at the University of Seville',
                'Space Enthusiast'
              ],
              autoStart: true,
              loop: true,
              // @ts-expect-error
              pauseFor: 5000,
              delay: 75
            }}
          />
        </Text>
      </div>
    </div>
  )
}
