interface EducationProps {
  period: string
  course: string
  institution: string
  description: string
}

export default function Education ({
  period,
  course,
  institution,
  description
}: EducationProps) {
  return (
    <div
      className='flex flex-col text-secondary'
    >
      <div
        className='flex flex-col lg:flex-row justify-between lg:items-center'
      >
        <p
          className='lg:text-lg font-semibold text-primary'
        >
          {course}
        </p>
        <p
          className='text-sm'
        >
          {period}
        </p>
      </div>
      <p
        className='underline'
      >
        {institution}
      </p>
      <p
        className='text-sm lg:text-base'
      >
        {description}
      </p>
    </div>
  )
}
