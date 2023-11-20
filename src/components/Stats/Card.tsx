interface CardProps {
  title: string
  content: string
  icon: JSX.Element
}

export default function Card ({ title, content, icon }: CardProps) {
  return (
    <div
      className='flex flex-col items-center justify-center w-full h-full bg-black bg-opacity-50'
    >
      {icon}
      <h1
        className='text-xl text-white font-light'
      >
        {title}
      </h1>
      <h1
        className='text-l text-white font-light ml-1'
      >
        {content}
      </h1>
    </div>
  )
}
