import { Suspense } from 'react'
import Counter from '@/components/layout/counter'
import Tracker from '@/components/layout/tracker'

export default function Hits () {
  return (
    <div
      className='fixed bottom-0 right-0 p-1 text-center text-xs text-secondary bg-background rounded-tl'
    >
      <Tracker />
      <Suspense
        fallback={(
          <p>
            <span
              className='text-primary animate-pulse'
            >
              LOADING
            </span> VISITS
          </p>
        )}
      >
        <p>
          <Counter /> VISITS
        </p>
      </Suspense>
    </div>
  )
}