'use client'

import { Suspense, TouchEvent, useEffect, useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrthographicCamera } from 'three'
import Objects from './objects'

export default function CustomCanvas () {
  const [zoom, setZoom] = useState(100)

  useEffect(() => {
    const updateZoom = () => {
      const isMobile = window.matchMedia('(max-width: 768px)').matches
      setZoom(isMobile ? 30 : 100)
    }

    updateZoom()

    window.addEventListener('resize', updateZoom)
    return () => window.removeEventListener('resize', updateZoom)
  }, [])

  const allowScroll = (ev: TouchEvent<HTMLDivElement>) => {
    if (ev.touches.length !== 1) return
    ev.stopPropagation()
  }

  return (
    <div
      className='h-[100vh]'
      onTouchMove={allowScroll}
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
