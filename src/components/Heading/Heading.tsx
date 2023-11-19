interface HeadingProps {
  content: string
  transition?: boolean
}

export default function Heading ({ content, transition = false }: HeadingProps) {
  return (
    <div
      className={`font-sans font-light m-6 text-3xl text-center ${transition ? 'transition-colors hover:text-cyan-500' : ''}`}
    >
      <h1>
        {content}
      </h1>
    </div>
  )
}
