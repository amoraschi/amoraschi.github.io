'use client'

import { Suspense, useEffect, useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrthographicCamera } from 'three'
import Objects from './objects'

export default function Name () {
  const [zoom, setZoom] = useState(100)

  useEffect(() => {
    const updateZoom = () => {
      const isMobile = window.matchMedia('(max-width: 768px)').matches
      setZoom(isMobile ? 35 : 100)
    }

    updateZoom()

    window.addEventListener('resize', updateZoom)
    return () => window.removeEventListener('resize', updateZoom)
  }, [])

  return (
    <div
      className='h-[100vh]'
    >
      <Canvas
        className='h-full w-full bg-black'
        orthographic
        shadows
        camera={{
          zoom
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
