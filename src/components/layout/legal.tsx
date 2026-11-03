export default function Legal () {
  return (
    <div
      className='fixed bottom-0 right-0 p-1'
    >
      <abbr
        title='All rights reserved.'
      >
        <p
          className='h-fit text-center text-xs text-secondary'
        >
          @ {new Date().getFullYear()} Angelo Sho Moraschi
        </p>
      </abbr>
    </div>
  )
}
