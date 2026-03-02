export default function Legal () {
  return (
    <div
      className='fixed bottom-0 right-0 p-1 bg-background rounded-tl'
    >
      <p
        className='text-center text-xs text-secondary'
      >
        @ {new Date().getFullYear()} Angelo Sho Moraschi. All rights reserved.
      </p>
    </div>
  )
}
