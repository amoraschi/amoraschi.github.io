interface EducationCardProps {
  index: number
  institution: string
  type: string
  entry: string
  graduation: string
  description: string
  length: number
}

export default function EducationCard ({
  index,
  institution,
  type,
  entry,
  graduation,
  description,
  length
}: Readonly<EducationCardProps>) {
  console.log(index)
  return (
    <div
      className={`
        ${index % 2 === 0 ? 'border-r-2' : 'border-l-2'}
        ${index === length - 1 ? 'border-b-2' : ''}
        border-t-2 border-blue-500 p-4
      `}
    >
      <div
        className='flex flex-col lg:flex-row lg:justify-between lg:items-center'
      >
        <h2
          className='font-semibold text-xl'
        >
          {institution}
        </h2>
        <p
          className='italic text-gray-400 text-sm'
        >
          {entry} - {graduation}
        </p>
      </div>
      <h3
        className='text-gray-400'
      >
        {type}
      </h3>
      <p
        className='text-gray-400 text-sm'
      >
        {description}
      </p>
    </div>
  )
}
