interface BoxProps {
  content: JSX.Element
  padding?: string
  shadow?: boolean
}

export default function Box ({ content, padding }: BoxProps) {
  return (
    <div
      className={`
        flex
        flex-row
        space-x-2
        ${padding}
        ring-2
        ring-black
        shadow-opaque
      `}
    >
      {content}
    </div>
  )
}
