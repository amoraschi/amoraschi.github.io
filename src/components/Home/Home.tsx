import Heading from '../Heading/Heading'

export default function Home () {
  return (
    <div
      className={`absolute inset-0 select-none justify-center bg-[url('https://wallpapercave.com/wp/wp4816771.jpg')] bg-cover bg-no-repeat bg-center`}
    >
      <div
        className='flex flex-col items-center justify-center w-full h-full bg-black bg-opacity-50'
      >
        <Heading
          content={`amoraschi's Github Page`}
        />
      </div>
    </div>
  )
}
