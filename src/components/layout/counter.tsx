import { getHits } from '@/utils/hits'

export default async function Counter () {
  const dev = process.env.NODE_ENV === 'development'
  const response = await fetch(
    `https://hits.sh/${dev ? 'test.com' : 'amoraschi.github.io'}.svg`,
    { next: { revalidate: 600 } }
  )

  const hits = getHits(await response.text())

  return (
    <span
      className='text-primary'
    >
      {hits.toLocaleString()}
    </span>
  )
}
