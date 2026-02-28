import Image from 'next/image'

export default function HomePage () {
  return (
    <main
      className='h-screen flex'
    >
      <div
        className='w-full h-full flex pr-0 md:pr-2'
      >
        <div
          className='hidden w-full md:flex justify-center'
        >
          <Image
            src='/self.png'
            alt='Temp'
            width={1300}
            height={2400}
            className='h-auto lg:h-full w-full lg:w-auto col-start-2 col-span-2 object-cover object-right lg:object-center'
          />
        </div>
        <div
          className='w-full flex flex-col justify-center items-center lg:items-start'
        >
          <div
            className='text-center text-5xl md:text-7xl lg:text-8xl font-medium'
          >
            <p
              className='font-semibold lg:font-normal bg-[url("/text_background.jpg")] bg-clip-text text-transparent bg-center bg-cover'
            >
              ANGELO SHO
              <br />
              MORASCHI
            </p>
            <p
              className='mt-2 text-xl lg:text-3xl'
            >
              Software Engineer Student
            </p>
            <p
              className='mt-1 text-lg lg:text-xl text-secondary'
            >
              University of Seville
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
