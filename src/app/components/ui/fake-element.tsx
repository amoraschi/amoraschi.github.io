interface FakeElementProps {
  element: string
  closed?: boolean
  noBorder?: boolean
  children?: React.ReactNode
}

export default function FakeElement ({
  element,
  closed = false,
  noBorder = false,
  children
}: FakeElementProps) {
  return (
    <div
      className='flex flex-col'
    >
      <span
        className='text-white'
      >
        {'<'}
        <span
          className='text-green-500'
        >
          {element}
        </span>
        {closed ? ' />' : '>'}
      </span>
      <div
        className={!noBorder ? 'pl-6 py-3 border-dotted border-l-[1px]' : ''}
      >
        {children}
      </div>
      {
        !closed && (
          <span
            className='text-white'
          >
            {'</'}
            <span
              className='text-green-500'
            >
              {element}
            </span>
            {'>'}
          </span>
        )
      }
    </div>
  )
}
