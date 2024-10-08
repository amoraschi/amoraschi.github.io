'use client'

import { Suspense, useEffect, useState } from 'react'
import Link from 'next/link'
import { Canvas } from '@react-three/fiber'
import Objects from '@/components/hero/objects'
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu'

const links = [
  {
    name: 'Projects',
    url: '/projects'
  },
  {
    name: 'About',
    url: '/about'
  }
]

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

  return (
    <div
      className='flex justify-center h-[100vh]'
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
      <NavigationMenu
        className='fixed bottom-2 justify-center w-full'
      >
        <NavigationMenuList>
        {
          links.map(({ name, url }, index) => (
            <NavigationMenuItem
              key={index}
            >
              {/* <Button
                key={url}
                variant='ghost'
                asChild
              > */}
                <Link
                  href={url}
                  legacyBehavior
                  passHref
                >
                  <NavigationMenuLink
                    className={navigationMenuTriggerStyle()}
                  >
                    {name}
                  </NavigationMenuLink>
                </Link>
              {/* </Button> */}
            </NavigationMenuItem>
          ))
        }
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}
