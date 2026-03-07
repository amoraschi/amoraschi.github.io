'use client'

export default function HitTracker () {
  const dev = process.env.NODE_ENV === 'development'
  const url = `https://hits.sh/${dev ? 'test.com' : 'amoraschi.github.io'}.svg`

  return (
    <img
      src={url}
      alt=''
      className='hidden'
    />
  )
}
