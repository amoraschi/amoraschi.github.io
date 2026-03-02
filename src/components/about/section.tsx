import Link from 'next/link'

interface SectionProps {
  title: string
  texts: string[]
}

export default function Section ({
  title,
  texts
}: SectionProps) {
  const isALink = (text: string) => {
    const urlRegex = /https?:\/\/[^\s]+/g
    return urlRegex.test(text)
  }

  return (
    <div
      className='flex flex-col gap-4'
    >
      <p
        className='text-center text-4xl font-bold'
      >
        {title}
      </p>
      <div
        className='lg:text-lg text-secondary'
      >
        {
          texts.map((text, index) => isALink(text) ? (
            <p
              key={index}
            >
              <Link
                href={text}
                target='_blank'
                className='text-blue-500 hover:underline'
              >
                {text}
              </Link>
            </p>
          ) : (
            <p
              key={index}
            >
              {text}
            </p>
          ))
        }
      </div>
    </div>
  )
}
