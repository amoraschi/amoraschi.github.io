'use client'

import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Objects from './objects'

export default function Name () {
  return (
    <div
      className='h-[100vh]'
    >
      <Canvas
        className='h-full w-full bg-black'
        orthographic
        shadows
        camera={{
          zoom: 100
        }}
      >
        <Suspense
          fallback={null}
        >
          <Objects />
        </Suspense>
      </Canvas>
    </div>
  )
}
