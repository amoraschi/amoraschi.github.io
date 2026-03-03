import Markdown from 'react-markdown'

interface ContentProps {
  title: string
  description: string
  content: string
}

export default function Content ({
  title,
  description,
  content
}: ContentProps) {
  return (
    <div>
      <p
        className='text-4xl font-bold'
      >
        {title}
      </p>
      <p
        className='text-secondary'
      >
        {description}
      </p>
      <div className='w-full h-px bg-secondary my-4' />
      <article
        className='prose prose-lg max-w-none'
      >
        <Markdown>
          {content}
        </Markdown>
      </article>
    </div>
  )
}
