import Text from '@/app/components/ui/text'

export default function AboutSection () {
  return (
    <div
      id='about'
      className='h-[100vh] px-96 py-36'
    >
      <div
        className='flex flex-col gap-2 text-white'
      >
        <Text
          className='text-4xl'
        >
          About
        </Text>
        <br />
        <Text
          className='text-lg'
        >
          I'm Angelo, currently studying the English degree in Software Engineering at the University of Seville.
          I'm very invested in the world of technology and I'm always looking for new projects to work on.
        </Text>
      </div>
      <div
        className='text-center mt-10'
      >
        <Text
          className='text-white text-xl'
        >
          Under construction...
        </Text>
        <br />
        <Text
          className='text-gray-500'
        >
          16th of May, 2024
        </Text>
      </div>
    </div>
  )
}
